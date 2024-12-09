// const wrapper = document.querySelector('.wrapper')
// const registerLink = document.querySelector('.register-link')
// const loginLink = document.querySelector('.login-link')

// registerLink.onclick = () => {
//     wrapper.classList.add('active')
// }

// loginLink.onclick = () => {
//     wrapper.classList.remove('active')
// }





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
    localStorage.setItem("psw", password);


    // redirect to login page 

    window.location.href = "login.html";
    alert("registration successful");


}