
function isAuthentication() {
    if (getAccessToken()){
        return true;
    } else {
        return false;
    }
}


function redirect () {
    if (isAuthentication()) {
        window.location.href = './templates/home.html';
    } else {
        window.location.href = './templates/login.html';
    }
}

redirect();