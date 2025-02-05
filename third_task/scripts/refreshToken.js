async function refreshToken() {
    const userData = new FormData(); 
    refresh = getRefreshToken();
    if (!refresh) {
        window.location.href = '../templates/login.html';
    }
    userData.append('refresh', refresh);
    try {
        const responseData = await sendHttpRequest(
            'POST', 
            'http://localhost:8000/api/users/token/refresh/', 
            userData
        );
        const { access, refresh } = responseData;
        createSessionStorage(access, refresh)
    } catch (error) {
        console.log('Refresh token failed:', error.message);
        alert(error.message)
    }
}
