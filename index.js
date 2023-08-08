const form = document.getElementById ('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const popup = document.getElementById('popup');


form.addEventListener('submit', (event) => {
     event.preventDefault();


     validateInputs();
});

// setError parameters
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};
// setSuccess parameters
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(String(email).toLowerCase());
};


// validatInput parameters
const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
   

    if(usernameValue === '') {
       setError(username, 'Username is required');
    }else {
       setSuccess(username);
    }
    if(emailValue === ''){
        setError(email, 'Email is required');
    }
     else if (!isValidEmail(emailValue)){
        setError(email, 'Provide a valid email address');
    }
    else{
        setSuccess(email);
    }

    if (passwordValue === ''){
        setError(password, 'Password is required');
    }else if (passwordValue.length < 8 ){
        setError(password, 'Password must be at least 8 character.');
    }else {
        setSuccess(password);
    }

    if (password2Value == '') {
        setError(password2, 'Please confirm your password');
    }else if (password2Value !== passwordValue) {
        setError(password2, "Password does not match");
    }else if(password2Value == passwordValue || password == passwordValue || username == usernameValue || email == emailValue){
        popup.classList.add('open-slide');
        return false;
    }else {
        setError(password2, "confirm password!")
    }   
};
function closeSlide(){
    popup.classList.remove('open-slide')
}