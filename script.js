let baseUrl = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=";
let input = document.querySelector(".container input");
let generate = document.querySelector("#generate");
let img = document.querySelector(".container img");
// let loaderContainer
let loaderContainer = document.querySelector(".loaderContainer");


generate.addEventListener("click", () => {
    if (input.value != "") {
        loaderContainer.style.display = "flex";
        let url = baseUrl + input.value;
        img.src = url;
        img.onload = () => {
            loaderContainer.style.display = "none";
        }
    }
    else{
        alert("Please Enter a valid data!")
    }
})