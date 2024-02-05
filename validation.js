document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var firstName = document.getElementById('first_name').value;
    if (!isAlphabets(firstName)) {
        showError('First Name should contain only alphabets.', 'first_name');
        return;
    }

    var middleName = document.getElementById('middle_name').value;
    if (middleName !== '' && !isAlphabets(middleName)) {
        showError('Middle Name should contain only alphabets.', 'middle_name');
        return;
    }
    var lastName = document.getElementById('last_name').value;
    if (!isAlphabets(lastName)) {
        showError('Last Name should contain only alphabets.', 'last_name');
        return;
    }

    var email = document.getElementById('email').value;
    if (!isValidEmail(email)) {
        showError('Invalid Email Address.', 'email');
        return;
    }
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
    var termsAndConditions = document.getElementById('terms_and_con').checked;
    if (!termsAndConditions) {
        showError('Please accept the Terms and Conditions.', 'terms_and_con');
        return;
    }
    var state1 = document.getElementById('state1').value;
    var city1 = document.getElementById('city1').value;
    if (state1 === '' || city1 === '') {
        showError('Please select Job Preferred state 1 and city 1.', 'state1');
        return;
    }

    var state2 = document.getElementById('state2').value;
    var city2 = document.getElementById('city2').value;
    if (state2 !== '' && city2 === '') {
        showError('Please select Job Preferred city 2.', 'city2');
        return;
    }
    alert('Form submitted successfully!');

});

// Function to reset borders and remove error messages
function resetValidation() {
    var elements = document.getElementsByClassName('names');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.border = '';
    }
    alert('reset');
}

function showError(message, elementId) {
    alert(message);
    document.getElementById(elementId).style.border = '2px solid red';
    document.getElementById(elementId).focus();
}
function isAlphabets(input) {
    return /^[a-zA-Z]+$/.test(input);
}
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPassword(str) {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
}

function isNumeric(input) {
    return /^\d+$/.test(input);

}
