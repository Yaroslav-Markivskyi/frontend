const signupForm = document.querySelector('#signup form');

async function signup() {
    const userData = new FormData(signupForm); 
    try {
        const responseData = await sendHttpRequest(
            'POST', 
            'http://localhost:8000/api/users/create/', 
            userData
        );
        console.log('User created successfully:');
        window.location.href = '../templates/login.html';
    } catch (error) {
        alert(error.message)
    }
}

signupForm.addEventListener('submit', event => {
    event.preventDefault();
    signup();
});
