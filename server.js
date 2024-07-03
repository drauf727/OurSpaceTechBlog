const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const hbs = exphbs.create({
  helpers: {
      formatDate: function (dateString) {
          const date = new Date(dateString);
          const options = { year: '2-digit', month: '2-digit', day: '2-digit' };
          return date.toLocaleDateString('en-US', options);
      }
  }
});
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 5000;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);





sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

