// 1
// let bTN = document.querySelector('.helloWorld')
// function sendAsms() {
//     alert("Hello World!");
// }
// bTN.addEventListener('click', sendAsms)
// 2



// function checkGuess() {
//     let guess = Number(document.getElementById("guess").value);
//     let randomNumber = Math.floor(Math.random() * (10-1)) + 1;
  

//     if ((guess) === randomNumber) {
//         alert("Вітаємо! Ви вгадали число!");
//     } else {
//         alert(`На жаль, ви не вгадали. Спробуйте ще раз!`);
//     }
//     console.log(randomNumber)
// }

// 3
let clickCount = 0;

function clickCountFunction(){
    clickCount++
    document.getElementById("clickCount").textContent = clickCount;
}

document.addEventListener('click',clickCountFunction)

































// 5
// function calculateDiscountedPrice(price, discount) {
//     return price * (1 - discount / 100);
// }

// let originalPrice = 120;
// let discountPertage = 50;

// let discountedPrice = calculateDiscountedPrice(originalPrice, discountPertage);

// console.log(discountedPrice);