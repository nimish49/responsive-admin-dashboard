// document.getElementById("btn").addEventListener("click", add);

// function add(e){
//     e.preventDefault();
//     let name = document.getElementById("username").value;
//     let age = document.getElementById("email").value;
//     let email = document.getElementById("password").value;
//     let cnfpsw = document.getElementById("psw").value;

// }

// if(username == ""|| email == ""|| password== "" || cnfpsw == ""){
//     alert("All fields are required");
//     return;
// }
// if(password != cnfpsw){
//     alert("Passwords do not match");
//     return;
// }
// localStorage.setItem("username", username);
// localStorage.setItem("email", email);
// localStorage.setitem("password",passsword);

// //redirect to login message
// window.location.href = "login.html";
// alert("registeration successful!");

document.getElementById("btn").addEventListener("click",add);

function add(e) {
    e.preventDefault();  // prevent default behaviour of form submit

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let cnfpsw = document.getElementById("psw").value;

    if(username === "" || email === "" || password === "" || cnfpsw === "") {
        alert("All fields are required!");
        return;
    }
    if(password != cnfpsw) {
        alert("Passwords do not match!");
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);


    // redirect to login page 

    window.location.href = "login.html";
    alert("registration successful");


}
// login form validation
