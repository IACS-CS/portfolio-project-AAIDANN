// Write JavaScript here.
console.log("main.js loaded successfully!");

/* Some sample JavaScript: this just listens 
for any "click" on the hero element and then
toggles the "active" class which we use to
shift colors when they click */
let hero = document.querySelector(".hero");
hero.addEventListener("click", () => {
  console.log("They clicked the hero!");
  hero.classList.toggle("active");
});
document.addEventListener("DOMContentLoaded", () => {
  let hero = document.querySelector(".hero"); // Had ChatGPT help me with this
  hero.classList.add("active"); 
});
/** Mini-Turtle Project **/

// Select the HTML elements where we'll put
// the components of our application.
const canvas = document.querySelector("#real-turtle");
const textDiv = document.querySelector("#text-app");

// Initialize turtle and text interface objects
const turtle = new RealTurtle.default(canvas, {
  async: false,
  autoStart: false
});

const drawEquilateralTriangle = (size) => {
  turtle.right(90);
  turtle.penDown(); // Make sure the pen is down to draw
  for (let i = 0; i < 3; i++) {

    turtle.forward(size); 
    turtle.left(120);
  }
  turtle.penUp();
  turtle.setPosition(10000, 0);
};

turtle.setSpeed(0.5);
turtle.setLineWidth(15); 
turtle.setStrokeStyle("white"); 


turtle.start();
drawEquilateralTriangle(600);



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
