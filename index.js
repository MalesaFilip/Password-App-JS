const value = document.querySelector("#value");
const input = document.querySelector("#customRange");
value.textContent = input.value
input.addEventListener("input", (e) => {
    value.textContent = e.target.value
})

const result = document.querySelector("#generatedResult")
const buttonGenerator = document.querySelector(".generator-button");
const passwordLenght = value.textContent;
const hasLower = document.getElementById("lowercase");
const hasUpper = document.getElementById("uppercase");
const hasNumber = document.getElementById("numbers");
const hasSymbol = document.getElementById("symbols");
buttonGenerator.addEventListener("click", () => {
    password = "";
    if (hasLower.checked) {
        password  += "abcdefghijklmnopqrstuvwxyz"
    } if (hasUpper.checked) {
        password += "ABCDEFGHIJKLMNOPRSTUVWXYZ"
    } if (hasNumber.checked) {
        password += "0123456789"
    } if (hasSymbol.checked) {
        password += "!@#$%^&*()"
    }
    retVal = ""
    for (var i = 0, n = password.length; i < passwordLenght; i++){
        retVal += password.charAt(Math.floor(Math.random() * n));
    }
    generatedResult.innerHTML = retVal;
});


const copySymbol = document.getElementsByClassName("fas");
copySymbol[0].addEventListener("click", () => {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    if(popup.classList.contains("show")) 
        setTimeout(() => popup.classList.remove("show"), 500) 
});
