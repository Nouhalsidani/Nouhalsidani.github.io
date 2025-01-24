document.addEventListener("DOMContentLoaded", () => {
    const registernButton = document.getElementById("register");
    const Loginghost= document.getElementById("Login");
    const Container = document.getElementById("container");
    var Passwordinput = document.getElementById("Password");
    var Userinput = document.getElementById("Username");
    const loginButton= document.getElementById("Loginbutton");

    registernButton.addEventListener("click",()=>{
            Container.classList.add("right-panel-active");
    });
    Loginghost.addEventListener("click",()=>{
        Container.classList.remove("right-panel-active");
    });
    loginButton.addEventListener("click",()=>{
        event.preventDefault();
        if (Passwordinput.value === "Abraj@101" && Userinput.value === "abraj@maliks.com") {
            window.open("https://sites.google.com/view/abcverdun/home", "_blank");
        } 
        else {
            alert("Invalid username or password!");
        }
    });
});
