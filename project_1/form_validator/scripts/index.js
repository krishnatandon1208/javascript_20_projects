const validationForm = document.getElementById("formValidator");
const formUsername = document.getElementById("formUsername");
const formEmail = document.getElementById("formEmail");
const formPassword = document.getElementById("formPassword");
const formPasswordConfirm = document.getElementById("formPasswordConfirm");

//Show input error message
function showError(input, message) {
    console.log(input, message);
    //We need to add a class to out input element and show the relevent error message.
    const form_input = input.parentElement;
    form_input.className = "form-control error";
    const form_input_error = form_input.querySelector("small");
    form_input_error.innerText = message;
}

function showSuccess(input, message) {
    const form_input = input.parentElement;
    form_input.className = "form-control success";
    const form_input_success = form_input.querySelector("small");
    form_input_success.innerText = message;
}

//Check valid email
function isEmailValid() {
    const validateEmailAddress = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validateEmailAddress.test(String(email).toLowerCase());
}

//Event Listener
validationForm.addEventListener("submit", function(event) {
    event.preventDefault();
    //On clicking the submit button, page reloads. Hence, the event.preventDefault() will hold 
    //the existing functionality and will not perform that existing operation.
    // console.log("Submit");
    // console.log(formUsername.value);

    if(formUsername.value === "") {
        showError(formUsername, "Username is required");
    } else {
        showSuccess(formUsername, "Username accepted");
    }

    if(formEmail.value === "") {
        showError(formEmail, "Email is required");
    } else if(formEmail.value) {
        
    } else {
        showSuccess(formEmail, "Email accepted");
    }

    if(formPassword.value === "") {
        showError(formPassword, "Password is required");
    } else {
        showSuccess(formPassword, "Password accepted");
    }

    if(formPasswordConfirm.value === "") {
        showError(formPasswordConfirm, "Confirm Password is required");
    } else {
        showSuccess(formPasswordConfirm, "Password Matched");
    }
    
});