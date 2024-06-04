// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
 
  navMenu.classList.toggle("hidden");
});

// script.js

// script.js

const texts = ["information systems student", "Junior Web developer", "Front end Developer"];
const speed = 100; // Kecepatan mengetik dalam milidetik
const pauseBetweenTexts = 2000; // Waktu tunggu sebelum mengganti teks

let textIndex = 0;
let charIndex = 0;
const typewriterText = document.getElementById("typewriter-text");

function typeWriter() {
    if (charIndex < texts[textIndex].length) {
        typewriterText.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(() => {
            charIndex = 0;
            textIndex = (textIndex + 1) % texts.length;
            typewriterText.innerHTML = ""; // Reset teks untuk menampilkan teks baru
            typeWriter();
        }, pauseBetweenTexts); // Tunggu sebentar sebelum mengganti teks
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeWriter();
});

