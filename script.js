const passwordBox = document.getElementById("Password")
const lenght = 12;


const upperCase = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghiklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@!#$%^&*(){]+_=;:)(<>.><?/||";
const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (lenght > password.length) {
        Password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = Password;
}


function copyPassword() {
    const copy = passwordBox.value;
    navigator.clipboard.writeText(copy);
  }