
document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
});
// First NAme Validation
function validateform() {
    if (document.myform.text1.value == "") {
        alert(" You Should Enter a FirstName");
        document.getElementById('first_name').style.border = '2px solid red';
        document.getElementById('first_name').focus();
        return false;
    }
    else {
        document.getElementById('first_name').style.border = "1px solid rgb(213, 208, 208)";
    }
    const regEx = /^[A-Za-z]+$/;
    if (!document.myform.text1.value.match(regEx)) {
        alert("Enter Alphabetical Value in FirstName")
        document.getElementById('first_name').style.border = '2px solid red';
        document.getElementById('first_name').focus();
        return false;
    }
    else {
        document.getElementById('first_name').style.border = "1px solid rgb(213, 208, 208)";
    }
    // Middle name Validation
    if (document.myform.text2.value.trim() == "") {
        return true;
    }
    else {
        if (!document.myform.text2.value.match(regEx)) {
            alert("Enter Alphabetical Value in MiddleName")
            document.getElementById('middle_name').style.border = '2px solid red';
            document.getElementById('middle_name').focus();
            return false;
        }
        else {
            document.getElementById('middle_name').style.border = "1px solid rgb(213, 208, 208)";
        }
    }

    // Last Name validation
    if (document.myform.text3.value == "") {
        alert(" You Should Enter a LastName");
        document.getElementById('last_name').style.border = '2px solid red';
        document.getElementById('last_name').focus();
        return false;
    }
    else {
        document.getElementById('last_name').style.border = "1px solid rgb(213, 208, 208)";
    }
    if (!document.myform.text3.value.match(regEx)) {
        alert("Enter Alphabetical Value in LastName")
        document.getElementById('last_name').style.border = '2px solid red';
        document.getElementById('last_name').focus();
        return false;
    }
    else {
        document.getElementById('last_name').style.border = "1px solid rgb(213, 208, 208)";
    }

    // mail validation
    if (document.myform.mail.value == "") {
        alert(" You Should Enter a Email");
        document.getElementById('email').style.border = '2px solid red';
        document.getElementById('email').focus();
        return false;
    }
    else {
        document.getElementById('email').style.border = "1px solid rgb(213, 208, 208)";
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!document.myform.mail.value.match(emailRegex)) {
        alert("Enter A Valid Email Adress")
        document.getElementById('email').style.border = '2px solid red';
        document.getElementById('email').focus();
        return false;
    }
    else {
        document.getElementById('email').style.border = "1px solid rgb(213, 208, 208)";
    }

    // Password Validation
    if (document.myform.password.value == "") {
        alert(" You Should Enter a Password");
        document.getElementById('passwd').style.border = '2px solid red';
        document.getElementById('passwd').focus();
        return false;
    }
    else {
        document.getElementById('email').style.border = "1px solid rgb(213, 208, 208)";
    }
    const passwordregx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!document.myform.password.value.match(passwordregx)) {
        alert("Weak Passcode! Password Should Include Atleast 8 Character, atleast One Uppercase, atleast One Lower case, at least one Secial Character And Minimum 1 Number ")
        document.getElementById('passwd').style.border = '2px solid red';
        document.getElementById('passwd').focus();
        return false;
    }
    else {
        document.getElementById('passwd').style.border = "1px solid rgb(213, 208, 208)";
    }
       // Birthdate Validation
       var dob = document.forms["myform"]["brthd"].value;
       console.log(dob);
      
       if (dob == null || dob == "") {
           alert("Enter A  BirthDate");
           document.getElementById('brthd').style.border = '2px solid red';
           document.getElementById('brthd').focus();
           return false;
       }
       else {
           document.getElementById('brthd').style.border = "1px solid rgb(213, 208, 208)";
           return true
       }
    // Age Validation
    if (document.myform.Age.value == "") {
        alert(" You Should Enter Age");
        document.getElementById('age').style.border = '2px solid red';
        document.getElementById('age').focus();
        return false;
    }
    else {
        document.getElementById('age').style.border = "1px solid rgb(213, 208, 208)";
    }
    let agevl = document.myform.Age.value;
    if(agevl <= 120 && agevl >= 1){
        document.getElementById('age').style.border = "1px solid rgb(213, 208, 208)";
        return true;
    }
    else{
        document.getElementById('age').style.border = '2px solid red';
        alert("Age Should be In Between 1 to 120")
        return false;
    }
    // Gender Validation
        document.getElementById('interest_other').onchange = function() {
            document.getElementById('yourText').disabled = !this.checked;
 
    };
}
