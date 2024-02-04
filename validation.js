document.getElementById('myForm').addEventListener('submit', function (event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Reset borders and remove error messages
    // resetValidation();

    // Validate First Name
    var firstName = document.getElementById('first_name').value;
    if (!isAlphabets(firstName)) {
        showError('First Name should contain only alphabets.', 'first_name');
        return;
    }

    // Validate Middle Name (optional)
    var middleName = document.getElementById('middle_name').value;
    if (middleName !== '' && !isAlphabets(middleName)) {
        showError('Middle Name should contain only alphabets.', 'middle_name');
        return;
    }

    // Validate Last Name
    var lastName = document.getElementById('last_name').value;
    if (!isAlphabets(lastName)) {
        showError('Last Name should contain only alphabets.', 'last_name');
        return;
    }

    // Validate Email Address
    var email = document.getElementById('email').value;
    if (!isValidEmail(email)) {
        showError('Invalid Email Address.', 'email');
        return;
    }

    // Validate Password
    var password = document.getElementById('passwd').value;
    if (!isValidPassword(password)) {
        showError('Invalid Password. (1 cap, 1 small, 1 Special char, 1 Numeric, minimum 8 char)', 'passwd');
        return;
    }

    // Validate Age
    var age = document.getElementById('age').value;
    if (!isNumeric(age)) {
        showError('Age should be numeric.', 'age');
        return;
    }

    // Validate Gender
    var genderMale = document.getElementById('gender_male').checked;
    var genderFemale = document.getElementById('gender_female').checked;
    if (!genderMale && !genderFemale) {
        showError('Please select a gender.', 'gender_male');
        return;
    }

    // Validate Birthdate
    var birthdate = document.getElementById('brtd').value;
    if (birthdate === '') {
        showError('Please select a birthdate.', 'brtd');
        return;
    }

    // Validate Interest
    var interestSport = document.getElementById('interest_sport').checked;
    var interestDance = document.getElementById('interest_dance').checked;
    var interestReading = document.getElementById('interest_reading').checked;
    var interestOther = document.getElementById('interest_other').checked;
    var otherInterest = document.getElementById('other_interest').value;

    if (!(interestSport || interestDance || interestReading || (interestOther && otherInterest !== ''))) {
        showError('Select at least one interest.', 'interest_sport');
        return;
    }

    // Validate Terms and Conditions
    var termsAndConditions = document.getElementById('terms_and_con').checked;
    if (!termsAndConditions) {
        showError('Please accept the Terms and Conditions.', 'terms_and_con');
        return;
    }

    // Validate Job Preferred state 1 and city 1
    var state1 = document.getElementById('state1').value;
    var city1 = document.getElementById('city1').value;
    if (state1 === '' || city1 === '') {
        showError('Please select Job Preferred state 1 and city 1.', 'state1');
        return;
    }

    // Validate Job Preferred state 2 and city 2 (if state 2 is selected)
    var state2 = document.getElementById('state2').value;
    var city2 = document.getElementById('city2').value;
    if (state2 !== '' && city2 === '') {
        showError('Please select Job Preferred city 2.', 'city2');
        return;
    }

    // Submit the form if all validations pass
    alert('Form submitted successfully!');
    // You can add additional logic here to handle form submission

});

// Function to reset borders and remove error messages
function resetValidation() {
    var elements = document.getElementsByClassName('names');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.border = '';
    }
    alert('reset');
}

// Function to show error message and set border color
function showError(message, elementId) {
    alert(message);
    document.getElementById(elementId).style.border = '2px solid red';
    document.getElementById(elementId).focus();
}

// Function to check if a string contains only alphabets
function isAlphabets(input) {
    return /^[a-zA-Z]+$/.test(input);
}

// Function to check if a string is a valid email address
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// function isValidPassword(password) {
//     // Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 special character, 1 numeric digit, and have a minimum length of 8 characters
//     return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[\w@$!%*?&]{8,}$/.test(password);
// }
function isValidPassword(str) {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
}

// Function to check if a value is numeric
function isNumeric(input) {
    return /^\d+$/.test(input);
}
