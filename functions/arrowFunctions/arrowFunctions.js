// ---------------------------------------- 1)
function sum(a, b) {
    return a + b;
}

let  sum2 = (a, b) => {
    return a + b;
}

let sum3 = (a, b) => a + b;

// ---------------------------------------- 2)
function isPositive(number) {
    return number >= 0;
}

let isPositive2 = number => number >= 0;
let isPositive3 = () => number >= 0;

// ---------------------------------------- 3)
function randomNumber() {
    return Math.random;
}

let randomNumber2 = () => Math.random();

// ---------------------------------------- 4)
document.addEventListener('click', function() {
    console.log('Clicked');
})

document.addEventListener('click', () => console.log('Clicked'));