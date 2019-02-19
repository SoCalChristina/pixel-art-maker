
// Select color input
const colorPicker = $('#colorPicker');
const clearColor = $("clearColor");
var paint = $("#fillColor");

// Select size input
const height = $('#inputHeight');
const width = $('#inputWidth');
// Select table
const table = $('#pixelCanvas');
// Select form
const form = $("#sizePicker");
// Clear canvas
const clearCanvas = $("#clearCanvas");

//const submitSize = $('#submit');
//set Flag for mouseup/mousedown
var isDown = false;

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//function makeGrid() {
  // Clear previous grid
//  table.empty();
//TODO create function to remove background image visibility
  // Create Canvas
//  for (let r = 0; r < height.val(); r++) {
//    let tr = $("<tr></tr>");
//    table.append(tr);

//    for (let c = 0; c < width.val(); c++) {
//      let td = $("<td></td>");
//      tr.append(td);
//    }
//  }
//}

// Color cell
table.on("click", "td", function() {
  $(this).css("background-color", colorPicker.val());
});

// Paint Canvas with selected color
  paint.on("click", function() {
  const td = $("td");
  td.css("background-color", colorPicker.val());
});

// Dynamic paint button
paint.css("background-color", "#4267B2").hover(
  function() {
    $(this).css("background-color", color.val());
  },
  function() {
    $(this).css("background-color", "#4267B2");
  }
);

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
    $(this).css("background-color", colorPicker.val());
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

// When size is submitted by the user, call makeGrid()
//$('#submit').on('click', function() {
  //event.preventDefault();
//  reset();
//  makeGrid();
//});

//function makeGrid() {
	//nested for loop/2D array
//for(let h = 0; h < height.val(); h++){
//table.append('<tr></tr>');
//	for (let w = 0; w < width.val(); w++){
//		$('tr').last().append('<td></td>');
//	}
// }
//}

//Reset grid
function reset() {
 table.children().remove()
}

//Assign true/false to isDown
//table.on('mousedown', 'tr td', function(){
//        isDown = true;
//         });
//table.on('mouseup', 'tr td', function(){
//        isDown = false;
//         });
//Set color selection as background-color of grid elements
//table.on('mousedown mouseover', 'tr td', function(){
//  if(isDown){
//	$(this).css("background-color", colorPicker.val());
//  }
//});
// Vanilla slider value
var slider1 = document.getElementById("inputHeight");
var output1 = document.getElementById("val1");
output1.innerHTML = slider1.value;

slider1.oninput = function() {
  output1.innerHTML = this.value;
};

var slider2 = document.getElementById("inputWidth");
var output2 = document.getElementById("val2");
output2.innerHTML = slider2.value;

slider2.oninput = function() {
  output2.innerHTML = this.value;
};

//Double click to erase
table.on('dblclick', 'tr td', function()
{
 $(this).css('background-color', '#f1f1f1');
});

//save function
$("#save").click(function(){
        html2canvas($("#pixelCanvas"), {
            onrendered: function(canvas) {
                var imgData = canvas.toDataURL(
                    'image/png');
                var doc = new jsPDF('p', 'mm');
                doc.addImage(imgData, 'PNG', 100, 100);
                doc.save('sample-file.pdf');
            }
        });
  });
