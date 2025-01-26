/* const n1 = 1;
const n2 = 2;

const s1 = 1;
const s2 = 2;

n1 + n2;
s2 + n1; */

/* const value = true;

if (value) {
    console.log("Value is truthy");
    } else {
        console.log("value is falsy");
    } */

const minNum = 1;
const maxNum = 100;
/* Genrate et random tal mellem 1 & 100 */
const answer = Math.floor(Math.random()*(maxNum - minNum + 1));

console.log(answer);

let attempts = 0;
let guess;
let running = true;

function startGame() {

    guess = window.prompt(`Gæt et nummer mellem ${minNum} - ${maxNum}`)
    guess = Number(guess);

if(isNaN(guess)){
window.alert("Indtast et tal")
}

else if (guess < minNum || guess > maxNum) {
    window.alert("indstast et tal mellem 1 - 100")
}
else {
    attempts++;
    if(guess < answer) {
        window.alert("Det var for lavt, prøv igen")
    }
    else if (guess > answer) {
        window.alert("Gættet var for højt, prøv igen")
    }
    else{
        window.alert(`Korrekt, svaret var ${answer}. Det tog dig ${attempts} forsøg.`)
        running = false;
    }
    
}};

document.addEventListener("DOMContentLoaded", function () {
    startGame();
});