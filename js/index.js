const submitButton = document.getElementById('submit-button');
const fullName = document.getElementById('fullname');
const email = document.getElementById('email');
const message = document.getElementById('message');


function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    const data = {}; 
    const errors = []; 

    // FULL NAME
    if (fullName.value.trim() === '') {
        errors.push('Full name is missing');
    } else {
        data.fullname = fullName.value.trim();
    }

    // EMAIL
    if (email.value.trim() === '') {
        errors.push('Email is missing');
    } else {
        data.email = email.value.trim();
    }

    // MESSAGE
    if (message.value.trim() === '') {
        errors.push('Message is missing');
    } else {
        data.message = message.value.trim();
    }

    // FEEDBACK/ERRORS
    if (errors.length > 0) {
        console.error('Error:', errors); // Log errors to console
    } else {
        console.log('Collected Data:', data); // Log form data to console
        clearFields(); // Clear form fields
    }
}

// Function to clear form fields
function clearFields() {
    fullName.value = '';
    email.value = '';
    message.value = '';
}

// Register form to "submit" event
document.getElementById('myform').addEventListener('submit', validateForm);
