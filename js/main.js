// 
// Name: Azul Lanas
// Date: 09/23/2020
// Purpose: Form Validation


function validateEmail(x){
    var re =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    
    return re.test(x);
}

function validate() {
    // getting all the values from the elements needed for form validation

    let fullName = $('#fullName').val().trim();
    let email1 = $('#firstEmail').val().trim();
    let email2 = $('#secondEmail').val().trim();
    let subject = $('#formSubject').val().trim();
    let message = $('#formMessage').val();
    let errMsg = '';

    $('#fullName').val(fullName);
    $('#firstEmail').val(email1);
    $('#secondEmail').val(email2);
    $('#formSUbject').val(subject);

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
    $('#fullName').val('');
    $('#firstEmail').val('');
    $('#secondEmail').val('');
    $('formSubject').val('');
    $('formMessage').val('');
    $('#hiddenDiv').html('<br>');
}

$(document).ready(function (){
    $('#clearBtn').click(function (){
        clearForm();
    });

    $('#sendBtn').click(function(){
        let check = validate();
        if (check === "") {
            clearForm();
            $('#hiddenDiv').html('Sent!');
        } else {
            $('#hiddenDiv').html(check);
        }
    });
});
