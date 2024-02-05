function validateform() {
    const name =  document.querySelector('#first_name').value;
    console.log(name);
        if(name =="" ){
            document.getElementById('first_name').style.border  = '2px solid red';
            document.myForm.name.focus();
        alert(" You Should Enter a FirstName");
        }
     

}

