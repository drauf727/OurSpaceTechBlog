const loginArea = document.querySelector('#loginarea');
const userName = localStorage.getItem("username") ? JSON.parse(localStorage.getItem("username")) : "";


const clearArea = (area) => {
    document.querySelector(area).innerHTML = "";
}

const replaceWithName = (name) => {
    clearArea('#loginarea');
    loginArea.innerHTML = `
        <ul class="navbar-nav" id="loginarea">
           <li class="nav-item">
                <a class="nav-link light-text">Welcome, ${name}!</a>
            </li>
            <li class="nav-item">
            <a class="nav-link light-text" href="/dashboard">Dashboard</a>
            </li>
            <li class='nav-item'>
                <a class="nav-link light-text" onclick="logout()">Log Out</a>
            </li>
        </ul>`
}


const logic = () => {
    if (userName != "") {
        replaceWithName(userName)
    }
}

logic()