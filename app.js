// random number from 1 to 6
let randomNumber1 = Math.ceil(Math.random() * 6);
console.log(randomNumber1);
let randomNumber2 = Math.ceil(Math.random() * 6);
console.log(randomNumber2);

// random img selector
let randomImgSource1 = `images/dice${randomNumber1}.png`;
console.log(randomImgSource1);

let randomImgSource2 = `images/dice${randomNumber2}.png`;
console.log(randomImgSource2);

// quering the dom --> img
document.querySelector(".img1").setAttribute("src", randomImgSource1);
document.querySelector(".img2").setAttribute("src", randomImgSource2);

// quering the dom --> heading
let heading = document.querySelector("h1");

// Heading value
if (randomNumber1 > randomNumber2) {
  heading.innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  heading.innerHTML = "Player 2 Wins 🚩";
} else {
  heading.innerHTML = "🏳 Draw! 🏳";
}

/*
// function to pick out a random dice image between dice1.png to dice 6.png
//then place this image inside the left <img> element.

function pickImg1() {
  if (randomNumber1 == 1) {
    document
      .querySelector(".dice .img1")
      .setAttribute("src", "images/dice1.png");
  }
  if (randomNumber1 == 2) {
    document
      .querySelector(".dice .img1")
      .setAttribute("src", "images/dice2.png");
  }
  if (randomNumber1 == 3) {
    document
      .querySelector(".dice .img1")
      .setAttribute("src", "images/dice3.png");
  }
  if (randomNumber1 == 4) {
    document
      .querySelector(".dice .img1")
      .setAttribute("src", "images/dice4.png");
  }
  if (randomNumber1 == 5) {
    document
      .querySelector(".dice .img1")
      .setAttribute("src", "images/dice5.png");
  }
  if (randomNumber1 == 6) {
    document
      .querySelector(".dice .img1")
      .setAttribute("src", "images/dice6.png");
  }
}

function pickImg2() {
  if (randomNumber2 == 1) {
    document
      .querySelector(".dice .img2")
      .setAttribute("src", "images/dice1.png");
  }
  if (randomNumber2 == 2) {
    document
      .querySelector(".dice .img2")
      .setAttribute("src", "images/dice2.png");
  }
  if (randomNumber2 == 3) {
    document
      .querySelector(".dice .img2")
      .setAttribute("src", "images/dice3.png");
  }
  if (randomNumber2 == 4) {
    document
      .querySelector(".dice .img2")
      .setAttribute("src", "images/dice4.png");
  }
  if (randomNumber2 == 5) {
    document
      .querySelector(".dice .img2")
      .setAttribute("src", "images/dice5.png");
  }
  if (randomNumber2 == 6) {
    document
      .querySelector(".dice .img2")
      .setAttribute("src", "images/dice6.png");
  }
}

function title() {
  if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    heading.innerHTML = "Player 2 Wins'";
  } else if (randomNumber1 == randomNumber2) {
    heading.innerHTML = "Draw !";
  }
}

pickImg1();
pickImg2();
title();
*/
