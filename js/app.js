// Select color input
var color = $("#colorPicker");
const clearColor = $("#clearColor");
var fillColor = $("#fillColor");
// Select input
var height = $("#inputHeight");
var width = $("#inputWidth");
// Select table
var table = $("#pixelCanvas");
// Select form
const form = $("#sizePicker");
//TODO add function to toggle image visibility
// display/remove image
const img = $("coverImage");

// Clear Canvas
const clearCanvas = $("#clearCanvas");

// Get the modal
var modal = document.getElementById('rubricModal');

// Get the button that opens the modal
var btn = document.getElementById("rubricBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
};

function makeGrid() {

  // Clear previous grid
  table.empty();

  // Create Canvas
  for (let r = 0; r < height.val(); r++) {
    let tr = $("<tr></tr>");
    table.append(tr);

    for (let c = 0; c < width.val(); c++) {
      let td = $("<td></td>");
      tr.append(td);
    }
  }
}

// Color cell
table.on("click", "td", function() {
  $(this).css("background-color", color.val());
});

// Fill Canvas with selected color
fillColor.on("click", function() {
  const td = $("td");
  td.css("background-color", color.val());
});

// Delete cell color
table.on("dblclick", "td", function() {
  $(this).css("background-color", "");
});

// Delete canvas color
clearColor.on("click", function() {
  const td = $("td");
  td.css("background-color", "");
});

// Click & drag to draw & right click drag to erase
table.on("mousedown mouseover contextmenu", "td", function(e) {
  e.preventDefault();
  if (e.buttons === 1) {
    $(this).css("background-color", color.val());
  } else if (e.buttons === 2) {
    $(this).css("background-color", "");
  }
});

// Stop form from submitting & call function makeGrid

form.on("change", function(e) {
  e.preventDefault();
  makeGrid();
});

// Clear Canvas
clearCanvas.click(function() {
  table.empty();
});

// Vanilla slider value
let slider1 = document.getElementById("inputHeight");
let output1 = document.getElementById("val1");
output1.innerHTML = slider1.value;

slider1.oninput = function() {
  output1.innerHTML = this.value;
};

let slider2 = document.getElementById("inputWidth");
let output2 = document.getElementById("val2");
output2.innerHTML = slider2.value;

slider2.oninput = function() {
  output2.innerHTML = this.value;
};
