function fnameFunction() {
    const first_name = document.getElementById('fname').value
    if (first_name == "") {
        displayMessage('First name should not be empty', 'fnamemsg', 'red')
        return false
    }
    else if (first_name.length < 4) {
        displayMessage('First name must have more than 3 character', 'fnamemsg', 'red')
        return false
    }
    else if (!first_name.match(/^([a-zA-Z])+$/)){
        displayMessage('first name should be alphabet','fnamemsg','red')
        return false
    }
    else {
        displayMessage('Valid first name', 'fnamemsg', 'green')
        return true
    }
}

function lnameFunction() {
    const last_name = document.getElementById('lname').value
    if (last_name == "") {
        displayMessage('Last name should not be empty', 'lnamemsg', 'red')
        return false
    }
    else if (last_name.length < 3) {
        displayMessage('Last name must more than two characters','lnamemsg','red')
        return false
    }
    else if(!last_name.match(/^([a-zA-Z])+$/)){
        displayMessage('last name should be alphabet','lnamemsg','red')
        return false
    }
    else{
        displayMessage('Valid last name','lnamemsg','green')
        return true
    }
}

function gmailFunction(){
    const gmail = document.getElementById('gmail').value
    if(!gmail.match(/^([a-z0-9])([a-z0-9\-\_\.])+(\@)+(([a-z])+\.)+([a-z])+$/)){
        displayMessage('gmail is not valid','gmailmsg','red')
        return false
    }
    else{
        displayMessage('valid mail','gmailmsg','green')
        return true
    }
}




function displayMessage(message, destiny, color_value) {
    document.getElementById(destiny).innerHTML = message
    document.getElementById(destiny).style.color = color_value
}
