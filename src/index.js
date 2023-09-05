import "./styles.css";
// Get the box element
var box = document.getElementById("box");

// Get the viewport width and height
var vw = window.innerWidth;
var vh = window.innerHeight;

// Define a function to generate a random number between min and max
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Define a function to move the box to a random position inside the viewport
function moveBox() {
  // Get the box width and height
  var bw = box.offsetWidth;
  var bh = box.offsetHeight;

  // Generate a random x and y coordinate for the top-left corner of the box
  // Make sure the box does not go out of the viewport
  var x = random(0, vw - bw);
  var y = random(0, vh - bh);

  // Set the box style to reflect the new position
  box.style.left = x + "px";
  box.style.top = y + "px";
}

// Add an event listener to the box element for mouseover event
box.addEventListener("mouseover", moveBox);
