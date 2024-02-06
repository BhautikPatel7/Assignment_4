
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
});
const checkboxes = document.querySelectorAll(
    'input[type="checkbox"]',
);
console.log(checkboxes);

// First NAme Validation
function validateform() {
    $('#terms_and_con').click(function () {
        //check if checkbox is checked
        if ($(this).is(':checked')) {

            $('#submit_button').removeAttr('disabled');

        } else {
            $('#submit_button').attr('disabled', true);
        }
    });


    if (document.myform.text1.value == "") {
        alert(" You Should Enter a FirstName");
        bordercolor(first_name);
        return false;
    }
    else {
        bordernormal(first_name);
    }
    const regEx = /^[A-Za-z]+$/;
    if (!document.myform.text1.value.match(regEx)) {
        alert("Enter Alphabetical Value in FirstName")
        bordercolor(first_name);
        return false;
    }
    else {
        bordernormal(first_name);
    }
    // Middle name Validation
    if (document.myform.text2.value.trim() == "") {

    }
    else {
        if (!document.myform.text2.value.match(regEx)) {
            alert("Enter Alphabetical Value in MiddleName")
            bordercolor(middle_name);
            return false;
        }
        else {
            bordernormal(middle_name);
    }

    // Last Name validation
    if (document.myform.text3.value == "") {
        alert(" You Should Enter a LastName");
        bordercolor(last_name);
        return false;
    }
    else {
        bordernormal(last_name);
    }
    if (!document.myform.text3.value.match(regEx)) {
        alert("Enter Alphabetical Value in LastName");
        bordercolor(last_name);
        return false;
    }
    else {
        bordernormal(last_name);
    }

    // mail validation
    if (document.myform.mail.value == "") {
        alert(" You Should Enter a Email");
        bordercolor(email);
        return false;
    }
    else {
       bordernormal(email);
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!document.myform.mail.value.match(emailRegex)) {
        alert("Enter A Valid Email Adress")
        bordercolor(email);
        return false;
    }
    else {
        bordernormal(email);
    }

    // Password Validation
    if (document.myform.password.value == "") {
        alert(" You Should Enter a Password");
        bordercolor(passwd);
        return false;
    }
    else {
        bordercolor(passwd);
    }
    const passwordregx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!document.myform.password.value.match(passwordregx)) {
        alert("Weak Passcode! Password Should Include Atleast 8 Character, atleast One Uppercase, atleast One Lower case, at least one Secial Character And Minimum 1 Number ")
        bordercolor(passwd);
        return false;
    }
    else {
        bordercolor(passwd);
    }
    // Birthdate Validation
    var dob = document.forms["myform"]["brthd"].value;
    console.log(dob);

    if (dob == null || dob == "") {
        alert("Enter A  BirthDate");
        bordercolor(brthd);
        return false;
    }
    else {
        document.getElementById('brthd').style.border = "1px solid rgb(213, 208, 208)";
    }
    // Age Validation
    if (document.myform.Age.value == "") {
        alert(" You Should Enter Age");
        bordercolor(age);
        return false;
    }
    else {
        bordercolor(age);
    }
    let agevl = document.myform.Age.value;
    if (agevl <= 120 && agevl >= 1) {
        document.getElementById('age').style.border = "1px solid rgb(213, 208, 208)";
    }
    else {
        document.getElementById('age').style.border = '2px solid red';
        alert("Age Should be In Between 1 to 120");
        return false;
    }
    // Gender Validation
    var genderM = myform.gender_male;
    var genderF = myform.gender_female;

    if (genderM.checked == false && genderF.checked == false) {
        alert("You must select male or female");
        return false;
    }
    // // Chekbox Validation
    if (!atLeastOneCheckboxChecked(checkboxes)) {
        console.log('None of the checkboxes are checked');
        alert("You Shuld Chek At Least one Chekbox");
        return false;
    }
    document.getElementById('interest_other').onchange = function () {
        document.getElementById('tgg').disabled = !this.checked;
    }

    if (!document.getElementById('tgg').disabled) {
        if (document.myform.othertext.value == "") {
            alert(" You Should Enter Intrest");
            bordercolor(tgg)
            return false;
        }
        else if (!document.myform.othertext.value.match(regEx)) {
            alert("Enter Alphabetical Value in Intrest")
            bordercolor(tgg);
        }
        else {
            bordercolor(tgg);
        }
    }
    // Dropdown Validation
    if ((document.getElementById("owner")).selectedIndex == 0) {
        alert('Plese Select State 1');
        return false;
    }
    if ((document.getElementById("co-owner")).selectedIndex == 0) {
        alert('Plese Select city 1');
        return false;
    }
    if ($('#terms_and_con').prop("checked")) {

    } else {
        alert("You Should Accept terms And Condtion")

    }
}
}
// Chekbox Validation
// 👇️ find the first selected checkbox
function findFirstSelectedCheckbox(checkboxes) {
    return Array.from(checkboxes).find(
        checkbox => checkbox.checked,
    );
}
// 👇️ get an array of all selected checkboxes
function findAllSelectedCheckboxes(checkboxes) {
    return Array.from(checkboxes).filter(
        checkbox => checkbox.checked,
    );
}
// 👇️ check if at least one checkbox is checked
function atLeastOneCheckboxChecked(checkboxes) {
    return Array.from(checkboxes).some(
        checkbox => checkbox.checked,
    );

}
// DropDown

$(function () {

    // Generic logic
    var toggleDropdown = function (owner) {
        // hasOwner is a boolean store
        var hasOwner = typeof owner !== typeof undefined && owner;
        // Use boolean to decide whether to disable/enable co-owner field
        $('#co-owner').prop('disabled', !hasOwner).val('');
    }
    // Trigger logic when #owner is updated
    $('#owner').on('change', function () {
        toggleDropdown($(this).val());
    });

    // Trigger logic on DOM ready
    toggleDropdown();

});
$(function () {
    // Generic logic
    var toggleDropdown = function (owner1) {
        // hasOwner is a boolean store
        var hasOwner = typeof owner1 !== typeof undefined && owner1;
        // Use boolean to decide whether to disable/enable co-owner field
        $('#co-owner1').prop('disabled', !hasOwner).val('');
    }
    // Trigger logic when #owner is updated
    $('#owner1').on('change', function () {
        toggleDropdown($(this).val());
    });
    // Trigger logic on DOM ready
    toggleDropdown();
});

function bordercolor(id) {
    var d = document.getElementById('id');
    d.focus();
    d.style.border = '2px solid rgb(255,0,0)';

}

function bordernormal(id){
    var d = document.getElementById('id');
    d.focus();
    d.style.border = '1px solid rgb(213, 208, 208)';
}




