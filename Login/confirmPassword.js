function checkPassword(){
    let psw = document.getElementById("psw").value;
    let cnfrm = document.getElementById("cnfrm").value;
    console.log(psw,cnfrm);
    let message= document.getElementById("message");
    if (psw.length != 0){
        if(psw == cnfrm){
           message.textContent = "Password Match" 
        }
        else{
            message.textContent = "Password does not match"
        }
    }
}
