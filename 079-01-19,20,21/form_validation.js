function validFname(){
    const first_name=document.getElementById('firstname').value
    if(first_name==""){
        displayMsg('firstname must be mandatory','fnamemsg','red')
        return false
    }
    else if(first_name.length<3){
        displayMsg('first name must more than two character','fnamemsg','red')
        return false
    }
    else if(!first_name.match(/^([a-zA-Z])+$/)){
        displayMsg('first name only contains alphabets','fnamemsg','red')
        return false
    }
    else{
        displayMsg('valid firstname','fnamemsg','green')
        return true
    }
}


function validLname(){
    const last_name=document.getElementById('lastname').value
    if(last_name==""){
        displayMsg('lastname must be mandatory','lnamemsg','red')
        return false
    }
    else if(last_name.length<3){
        displayMsg('last name must more than two character','lnamemsg','red')
        return false
    }
    else if(!last_name.match(/^([a-zA-z])+$/)){
        displayMsg('last name must be alphabet','lnamemsg','red')
        return false
    }
    else{
        displayMsg('valid lastname','lnamemsg','green')
        return true
    }
}


function validEmail(){
    const email_value=document.getElementById('email_1').value
    if(email_value==""){
        displayMsg('email must be mandatory','emailmsg','red')
        return false
    }
    else if(!email_value.match(/^([a-z0-9])([a-z0-9\-\_\.])+(\@)+(([a-z])+\.)+([a-z])+$/)){
        displayMsg('invalid email','emailmsg','red')
        return false
    }
   
    else{
        displayMsg('valid email','emailmsg','green')
        return true
    }
}


function validPassword(){
    const password=document.getElementById('password').value
    if(password==""){
        displayMsg('password must be mandatory','passwordmsg','red')
        return false
    }
    else if(password.length<6){
        displayMsg('Password must be strong','passwordmsg','yellow')
        return false
    }
    else if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[~!@#$%&.-_]).{8,100}$/)){
        displayMsg('weak password','passwordmsg','red')
        return false
    }
   
    else{
        displayMsg('valid password','passwordmsg','green')
        return true
    }
}



function displayMsg(msg,idValue,colorValue){
    document.getElementById(idValue).innerHTML=msg
    document.getElementById(idValue).style.color=colorValue
}

function validForm(){
    if (validFname() &&  validLname() && validEmail() && validPassword()){
        return true
    }
    else{
        return false
    }
}