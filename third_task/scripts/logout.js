const button = document.getElementById("logout-button");

async function logout() {
    const userData = new FormData(); 
    refresh = getRefreshToken();
    if (!refresh) {
        window.location.href = '../templates/login.html';
    }
    userData.append('refresh_token', refresh);
    try {
        const responseData = await sendHttpRequest(
            'POST', 
            'http://localhost:8000/api/users/logout/', 
            userData
        );
        clearSessionStorage();
        console.log('User got token successfully:');
        window.location.href = '../templates/login.html';
    } catch (error) {
        alert(error.message)
    }
}

button.addEventListener('click', event => {
    event.preventDefault();
    logout();
});
