function checkdata(){
    var username = document.getElementById("name");
    var emailid = document.getElementById("email");

    if(username.value==""){
        alert("Please enter the name");
        username.focus();
        return false;
    }

    if(emailid.value==""){
        alert("Please enter a valid email");
        emailid.focus();
        return false;
    }
    
    if (username.value && emailid.value) {
        alert("Form submitted successfully")
    }
    return True;
}