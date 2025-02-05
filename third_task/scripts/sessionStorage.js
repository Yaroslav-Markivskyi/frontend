function createSessionStorage (access_token, refresh_token) {
    sessionStorage.setItem("access_token", access_token);
    sessionStorage.setItem("refresh_token", refresh_token);
}

function clearSessionStorage () {
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("refresh_token");
}

function getAccessToken () {
    return sessionStorage.getItem("access_token");
}

function getRefreshToken() {
    return sessionStorage.getItem("refresh_token");
}