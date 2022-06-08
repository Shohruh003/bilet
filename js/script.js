var elHeading = document.querySelector(".heading");
var sum = prompt("Summani kiriting :");


var usdBilet = 500;
var usdRoom = 250;
var euroMuseum = 120;

if (sum >= ((usdBilet + usdRoom) * 11000) + euroMuseum * 11800) {
  elHeading.textContent = "Oq yo’l, Alisher!";
} else {
  elHeading.textContent = "Alisher, ozgina sabr qilish kerak bo’lar ekan.";
}


