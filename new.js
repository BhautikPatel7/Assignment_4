document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('submit_button').disabled = true;
    document.getElementById('terms_and_con').addEventListener('change', function () {
        document.getElementById('submit_button').disabled = !this.checked;
    });

    const inputFields = document.querySelectorAll('input[type="text"], input[type="password"], input[type="number"]');
    inputFields.forEach(function (input) {
        input.addEventListener('click', function () {
            this.style.border = '1px solid rgb(213, 208, 208)';
        });
    });

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            const otherInterestCheckbox = document.getElementById("interest_other");
            const otherInterestTextbox = document.getElementById("tgg");
            if (otherInterestCheckbox.checked) {
                otherInterestTextbox.disabled = false;
                // otherInterestTextbox.required = true;
            } else {
                otherInterestTextbox.disabled = true;
                otherInterestTextbox.required = false;
            }
        });
    });

    // Disable Job Preferred City 1 dropdown initially
    document.getElementById("co-owner").disabled = true;

    // Event listener for changes in Job Preferred State 1 dropdown
    document.getElementById("owner").addEventListener("change", function() {
        var jobPreferredState1Value = this.value;
        var jobPreferredCity1Dropdown = document.getElementById("co-owner");

        // Enable/disable Job Preferred City 1 dropdown based on selected state
        if (jobPreferredState1Value !== "0") {
            jobPreferredCity1Dropdown.disabled = false;
        } else {
            jobPreferredCity1Dropdown.disabled = true;
        }
    });

    // Disable Job Preferred City 2 dropdown initially
    document.getElementById("co-owner1").disabled = true;

    // Event listener for changes in Job Preferred State 2 dropdown
    document.getElementById("owner1").addEventListener("change", function() {
        var jobPreferredState2Value = this.value;
        var jobPreferredCity2Dropdown = document.getElementById("co-owner1");

        // Enable/disable Job Preferred City 2 dropdown based on selected state
        if (jobPreferredState2Value !== "0") {
            jobPreferredCity2Dropdown.disabled = false;
        } else {
            jobPreferredCity2Dropdown.disabled = true;
        }
    });

});

function validateform() {
    // First Name Validation
    var firstName = document.getElementById("first_name").value.trim();
    if (firstName === "") {
        alert("Please enter a First Name");
        bordercolor("first_name");
        return false;
    } else if (!/^[A-Za-z]+$/.test(firstName)) {
        alert("Enter alphabetical value in First Name");
        bordercolor("first_name");
        return false;
    } else {
        bordernormal("first_name");
    }

    // Middle Name Validation
    var middleName = document.getElementById("middle_name").value.trim();
    if (middleName !== "" && !/^[A-Za-z]+$/.test(middleName)) {
        alert("Enter alphabetical value in Middle Name");
        bordercolor("middle_name");
        return false;
    } else {
        bordernormal("middle_name");
    }

    // Last Name Validation
    var lastName = document.getElementById("last_name").value.trim();
    if (lastName === "") {
        alert("Please enter a Last Name");
        bordercolor("last_name");
        return false;
    } else if (!/^[A-Za-z]+$/.test(lastName)) {
        alert("Enter alphabetical value in Last Name");
        bordercolor("last_name");
        return false;
    } else {
        bordernormal("last_name");
    }

    // Email Validation
    var email = document.getElementById("email").value.trim();
    if (email === "") {
        alert("Please enter an Email Address");
        bordercolor("email");
        return false;
    } else {
        bordernormal("email");
    }

    // Password Validation
    var password = document.getElementById("passwd").value;
    if (password === "") {
        alert("Please enter a Password");
        bordercolor("passwd");
        return false;
    } else {
        bordernormal("passwd");
    }
    const passwordregx = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordregx.test(password)) {
        alert("Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long");
        bordercolor("passwd");
        return false;
    } else {
        bordernormal("passwd");
    }

    // Birthdate Validation
    // var birthdate = document.getElementById("brthd").value.trim();
    // if (birthdate === "") {
    //     alert("Please enter a Birthdate");
    //     bordercolor("brthd");
    //     return false;
    // } else {
    //     bordernormal("brthd");
    // }

    // Birthdate Validation
    var birthdateInput = document.getElementById("brthd");
    var birthdateValue = birthdateInput.value.trim();

    // Check if birthdate is not empty
    if (birthdateValue === "") {
        alert("Please enter a Birthdate");
        bordercolor("brthd");
        return false;
    }

    // Convert birthdate string to Date object
    var selectedDate = new Date(birthdateValue);
    var currentDate = new Date();

    // Check if the selected date is in the future
    if (selectedDate > currentDate) {
        alert("Please select a valid Birthdate");
        bordercolor("brthd");
        return false;
    } else {
        bordernormal("brthd");
    }


    // Age Validation
    var age = document.getElementById("age").value.trim();
    if (age === "" || isNaN(age)) {
        alert("Please enter Age");
        bordercolor("age");
        return false;
    } else {
        bordernormal("age");
    }
    if (age < 1 || age > 120) {
        alert("Age should be between 1 and 120");
        bordercolor("age");
        return false;
    } else {
        bordernormal("age");
    }

    // Gender Validation
    var gender_male = document.getElementById("gender_male").checked;
    var gender_female = document.getElementById("gender_female").checked;
    if (!gender_male && !gender_female) {
        alert("Please select Gender");
        return false;
    }

    // // Interest Validation
    // var interestCheckboxes = document.querySelectorAll('input[name="interest"]:checked');
    // if (interestCheckboxes.length === 0) {
    //     alert("Please select at least one interest");
    //     return false;
    // }

        // Interest Validation
    var interestCheckboxes = document.querySelectorAll('input[name="interest"]:checked');
    var otherInterestCheckbox = document.getElementById("interest_other");
    var otherInterestTextbox = document.getElementById("tgg");

    // Check if "Other" checkbox is checked and if the text input is empty
    if (otherInterestCheckbox.checked && otherInterestTextbox.value.trim() === "") {
        alert("Please specify your other interest");
        return false;
    }

    // Check if no checkboxes are checked
    if (interestCheckboxes.length === 0) {
        alert("Please select at least one interest");
        return false;
    }


    // Terms and Condition Validation
    var termsCheckbox = document.getElementById("terms_and_con");
    if (!termsCheckbox.checked) {
        alert("Please accept Terms & Conditions");
        return false;
    }

    // Job Preferred State 1 Validation
    var jobPreferredState1 = document.getElementById("owner").value;
    if (jobPreferredState1 === "0") {
        alert("Please select Job Preferred State 1");
        return false;
    }

    // Job Preferred City 1 Validation
    var jobPreferredCity1 = document.getElementById("co-owner").value;
    if (jobPreferredCity1 === "4") {
        alert("Please select Job Preferred City 1");
        return false;
    }


    // Job Preferred State 2 Validation
    var jobPreferredState2 = document.getElementById("owner1").value;
    if (jobPreferredState2 !== "0") {
        // Job Preferred City 2 Validation
        var jobPreferredCity2 = document.getElementById("co-owner1").value;
        if (jobPreferredCity2 === "4") {
            alert("Please select Job Preferred City 2");
            return false;
        }
    }

    return true;
}

function bordercolor(id) {
    var element = document.getElementById(id);
    element.focus();
    element.style.border = '2px solid red';
}

function bordernormal(id) {
    var element = document.getElementById(id);
    element.style.border = '1px solid rgb(213, 208, 208)';
}
