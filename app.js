const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const sentences = [
  "JavaScript is an awesome programming language.",
  "Learning JavaScript is fun and rewarding.",
  "JavaScript powers the web.",
  "JavaScript is used for building dynamic websites.",
  "Mastering JavaScript opens up many career opportunities.",
  "JavaScript allows you to create interactive user interfaces.",
];

let sentenceIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < sentences[sentenceIndex].length) {
    typedTextSpan.textContent += sentences[sentenceIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 60);
  } else {
    setTimeout(erase, 400);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = sentences[sentenceIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 40);
  } else {
    sentenceIndex++;
    if (sentenceIndex >= sentences.length) {
      sentenceIndex = 0;
    }
    setTimeout(type, 530);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(type, 50);
});
