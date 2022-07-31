
var numberofButtons = document.querySelectorAll("button").length;

for (var i = 0; i < numberofButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  })
}
// Detecting Keyboard Press
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});
function makeSound(key) {
  switch (key) {
    case "q":
      var A4 = new Audio('sounds/A4.mp3');
      A4.play();
      break;
    case "a":
      var Ab4 = new Audio('sounds/Ab4.mp3');
      Ab4.play();
      break;
    case "w":
      var B4 = new Audio('sounds/B4.mp3');
      B4.play();
      break;
    case "s":
      var Bb4 = new Audio('sounds/Bb4.mp3');
      Bb4.play();
      break;
    case "e":
      var C4 = new Audio('sounds/C4.mp3');
      C4.play();
      break;
    case "r":
      var C5 = new Audio('sounds/C5.mp3');
      C5.play();
      break;
    case "d":
      var Db4 = new Audio('sounds/Db4.mp3');
      Db4.play();
      break;
    case "t":
      var D4 = new Audio('sounds/D4.mp3');
      D4.play();
      break;
    case "f":
      var Db5 = new Audio('sounds/Db5.mp3');
      Db5.play();
      break;
    case "y":
      var D5 = new Audio('sounds/D5.mp3');
      D5.play();
      break;
    case "h":
      var Eb4 = new Audio('sounds/Eb4.mp3');
      Eb4.play();
      break;
    case "u":
      var E4 = new Audio('sounds/E4.mp3');
      E4.play();
      break;
    case "i":
      var E5 = new Audio('sounds/E5.mp3');
      E5.play();
      break;
    case "j":
      var Eb5 = new Audio('sounds/Eb5.mp3');
      Eb5.play();
      break;
    case "o":
      var F4 = new Audio('sounds/F4.mp3');
      F4.play();
      break;
    case "k":
      var Gb4 = new Audio('sounds/Gb4.mp3');
      Gb4.play();
      break;
    case "p":
      var G4 = new Audio('sounds/G4.mp3');
      G4.play();
      break;
  }
}
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

 
    activeButton.classList.add("pressed");
    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);

}