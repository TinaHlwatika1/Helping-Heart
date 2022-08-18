// let First_Name; 
// let Last_Name; 
// let psw;

// First_Name = document.getElementById("First_Name").value;
// Last_Name = document.getElementById("Last_Name").value;
// email = document.getElementById("email").value;
// psw = document.getElementById("psw").value;

// function saveData(){
//     localStorage.setItem("First_Name",First_Name)
//     localStorage.setItem("Last_Name",Last_Name)
//     localStorage.setItem("email",email)
//     localStorage.setItem("psw",psw)
// }

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const psw = document.getElementById("psw");
const btnSignUp = document.getElementById("btnSignUp");
const cancelbtn = document.getElementById("cancelbtn")

btnSignUp.onclick = function (e) {
    e.preventDefault();

    const lsFirstName = firstName.value;
    const lsLastName = lastName.value
    const lsEmail = email.value


    if (lsFirstName && lsLastName && lsEmail) {
        localStorage.setItem("firstName",lsFirstName)
        localStorage.setItem("lastName",lsLastName)
        localStorage.setItem("email",lsEmail)

        location.reload();
    }
}
cancelbtn.onclick = function(){
    location.reload();
}