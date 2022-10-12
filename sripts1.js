// // pengenalan Switch
// let day = "";
// switch (new Date().getDay()) {
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
// }

// Nilai 1 - 30 : D
// Nilai 31 - 59: C
// Nilai 60 - 79 : B
// Nilai 80 - 100 : A 

// validasi 1 => jika nilai lebih dari 100 makan invalid number
// validasi 2 => jika nilai ada berhubungan negatif invalid number (-1)

// let angka = prompt("Masukkan angka yang diingingkan? ");

// if (angka <= 30) {
//     console.log("D");
// } else if (angka <= 59) {
//     console.log("C");
// } else if (angka <= 79) {
//     console.log("B");
// } else if (angka <= 100) {
//     console.log("A");
// } else {
//     alert("Angka Lebih dari 100");
// }

const userInput = prompt("Masukkan nilai");
const convertValue = +parseInt(userInput);

// if (convertValue !== NaN) {
//     alert("Hanya Angka");
// }

if (convertValue < 0 || convertValue > 100) alert("Invalid angka!");

if (convertValue >= 1 && convertValue <= 30) alert("D");
if (convertValue >= 31 && convertValue <= 59) alert("C");
if (convertValue >= 60 && convertValue <= 79) alert("B");
if (convertValue >= 80 && convertValue <= 100) alert("A");