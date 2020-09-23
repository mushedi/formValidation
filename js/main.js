// 
// Name: Azul Lanas
// Date: 09/23/2020
// Purpose: Form Validation

"use strict";

function validateEmail(x){
    var re =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    
    return re.test(x);
}

function validate() {
    // getting all the values from the elements needed for form validation
    let fullName = document.getElementById("fullName").value;
    let email1 = document.getElementById("firstEmail").value;
    let email2 = document.getElementById("secondEmail").value;
    let subject = document.getElementById("formSubject").value;
    let message = document.getElementById("formMessage").value;
    let errMsg = "";


    // validating input
    if(fullName === ""){
        errMsg += "Full name cannot be empty.<br>";
    }

    if(email1 === "" && email2 === ""){
        errMsg += "Emails cannot be empty.<br>";
    } else if(email1 != email2){
        errMsg += "Emails do not match.<br>";
    } else if(email1 === email2){
        let verifyEmail = validateEmail(email1);
        if(!verifyEmail){
            errMsg += "Email entries are not vaild.<br>";
        }
    }

    if(subject === ""){
        errMsg += "Subject cannot be empty. <br>"
    }

    if(message === "") {
        errMsg += "Message cannot be empty.<br><br>";
    }

    return(errMsg);
}

function clearForm(){
    document.getElementById("fullName").value = "";
    document.getElementById("firstEmail").value = "";
    document.getElementById("secondEmail").value = "";
    document.getElementById("formSubject").value = "";
    document.getElementById("formMessage").value = "";
    document.getElementById("hiddenDiv").innerHTML = "<br>";
}

let sendBtn = document.getElementById("sendBtn");

sendBtn.onclick = function(e) {
    let hiddenDiv = document.getElementById("hiddenDiv");
    let check = validate();

    if(check === ""){
        clearForm();
        hiddenDiv.innerHTML = "Sent!"
    } else {
        hiddenDiv.innerHTML = check;
    }
    
}

let clearBtn = document.getElementById("clearBtn");

clearBtn.onclick = function(e) {
    clearForm();
}