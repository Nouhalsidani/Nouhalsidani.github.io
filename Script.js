const registernButton = document.getElementById("register");
const LoginButton = document.getElementById("Login");
const Container = document.getElementById("container");
registernButton.addEventListener("click",()=>{
    Container.classList.add("right-panel-active");
});
LoginButton.addEventListener("click",()=>{
    Container.classList.remove("right-panel-active");
}); 