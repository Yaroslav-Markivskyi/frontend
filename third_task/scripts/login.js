const loginForm = document.querySelector('#login form')

async function login() {
    const userData = new FormData(loginForm); 
    try {
        const responseData = await sendHttpRequest(
            'POST', 
            'http://localhost:8000/api/users/token/', 
            userData
        );
        const { access, refresh } = responseData;
        createSessionStorage(access, refresh)
        console.log('User got token successfully:');
        window.location.href = '../templates/home.html';
    } catch (error) {
        alert(error.message)
    }
}

loginForm.addEventListener('submit', event => {
    event.preventDefault();
    login();
});
