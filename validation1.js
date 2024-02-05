function validateform() {
    const name =  document.querySelector('#first_name').value;
    console.log(name);
        if(name =="" ){
            document.getElementById('first_name').style.borderColor  = '2px solid red';
        alert(" You Should Enter a FirstName");
        // document.getElementsByClassName('names').style.border = '2px solid red';
        return false;
        }
        //  else if (!/^[a-zA-Z]*$/g.test(document.myForm.text1.value)) {
        //     alert("Invalid characters");
        //     return false;
        // }


}

