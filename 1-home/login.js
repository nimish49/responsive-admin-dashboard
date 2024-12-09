document.getElementById("btn1").addEventListener("click",login);

function login(e) {
    e.preventDefault();  // prevent default behaviour of form submit

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "" ||  password === "") {
        alert("All fields are required!");
        return;
    }
    let storedusername = localStorage.getItem("username");
    let storedpassword = localStorage.getItem("password");

    if(storedusername == username || storedpassword == password){
        alert(`login succesful,welcome ${username}`);
        window.location.href = "/1-home/index.html";
    
    }
    else{
        alert("Login failed");
    }
}