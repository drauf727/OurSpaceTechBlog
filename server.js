const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const hbs = exphbs.create({});
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 5000;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);


app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
