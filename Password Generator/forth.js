const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";
const allChar = upperCase + lowerCase + numbers + specialChars;

let para = document.querySelector("#para");
let copyBtn = document.querySelector("#copy");
let genrateBtn = document.querySelector("#btn");

function password(len){
    result = "";
    for(let i =0 ; i<=len; i++){
        let randomIdx = Math.floor(Math.random() * allChar.length)
        result += allChar[randomIdx];
    }
    para.innerHTML=result;
}
genrateBtn.addEventListener("click",()=>{
    password(10);
});
copyBtn.addEventListener("click", ()=>{
    copyAll();
    copyBtn.innerText = "Copied!";
    copyBtn.style.fontSize ="15px";
})
function copyAll (){
navigator.clipboard.writeText(para.textContent);
}