// DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Function to update class and message for errors
function showError(input, message) {
    // (.form-control)
    const formControl = input.parentElement;
    // Replace the class - add error
    formControl.className = 'form-control error';
    // Get the small element for the error message
    const small = formControl.querySelector('small');
    // Replace the text for small(error message) element using the input message
    small.innerText = message;
};

// Function to update class for success
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
};

// Event Listeners
// Create event listener for click me button
form.addEventListener('submit', function(e) {
    // Stop page from reloading on click me!
    e.preventDefault();

    //see if fields meet required field requirement
    if(username.value === '') {
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    };
    if(email.value === '') {
        showError(email, 'Email is required');
    } else {
        showSuccess(email);
    };
    if(password.value === '') {
        showError(password, 'Password is required');
    } else {
        showSuccess(password);
    };
    if(password2.value === '') {
        showError(password2, 'Confirm Password is required');
    } else {
        showSuccess(password2);
    };
});