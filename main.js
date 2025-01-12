// Write JavaScript here.
console.log("main.js loaded successfully!");

/* Some sample JavaScript: this just listens 
for any "click" on the hero element and then
toggles the "active" class which we use to
shift colors when they click */
  let overview = document.querySelector(".overview");
  let cards = document.querySelectorAll(".card");
  overview.addEventListener("click", () => {
  console.log("They clicked to view");
  overview.classList.add("active");
  cards.forEach((card) => {
    card.classList.add("active"); //Chat GPT helped out getting EACH of the cards unblurred, instead of just one.
  });
});
document.addEventListener("DOMContentLoaded", () => {
  let hero = document.querySelector(".hero"); // Had ChatGPT help me with this
  hero.classList.add("active"); 
});
/** Mini-Turtle Project **/

// Select the HTML elements where we'll put
// the components of our application.
const canvas = document.querySelector("#real-turtle, #fake-turtle");
const textDiv = document.querySelector("#text-app");

// Initialize turtle and text interface objects
const turtle = new RealTurtle.default(canvas, {
  async: false,
  autoStart: false
});

 const drawEquilateralTriangle =  (size) => {
  turtle.setPosition(250, 900);
  turtle.right(90);
  turtle.penDown();
  for (let i = 0; i < 3; i++) {

    turtle.forward(size); 
    turtle.left(120);
  }
};

turtle.setSpeed(0.78);
turtle.setLineWidth(15); 
turtle.setStrokeStyle("white"); 


turtle.start();

drawEquilateralTriangle(700);



 





// Test code

/* main method -- put all of your work in here */
const main = async () => {
  // Get input...

  let size = await ti.promptSquare("How big a square?");

  // Draw turtle stuff
  drawSquare(size);

  // We need a separate "start" command
  // after the turtle.
  turtle.start();

  main();
};

// Commenting out main for now --
// we're just testing our function!
//main();
//drawSquare(200);
//turtle.start();
