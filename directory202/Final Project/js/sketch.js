var lines = []
var strokeColor;
var bgColor;
var strokeWidth;
var canvasStates = [];
var currentStateIndex = 0;


// canvas for drawing
function setup() {
  createCanvas(windowWidth, windowHeight - 200);
  background(30);
  var options = createDiv().style('display: flex; background:rgba(25, 135, 84, 0); color: black; text-align: right');

  // labels
  var optionsTitles = createDiv().parent(options);
  createP('Stroke Color').parent(optionsTitles).style("font-size: 30px");
  createP('Background Color').parent(optionsTitles).style("font-size: 30px");
  createP('Stroke Width').parent(optionsTitles).style("font-size: 30px");

  // color pickers
  var optionsValues = createDiv().parent(options).style('margin: 10px 30px; width: 50px');

// bg color stroke color and stroke width options
  strokeColor = createColorPicker('#ffffff').parent(optionsValues).style('border-radius: 5px')
  bgColor = createColorPicker('#1e1e1e1e').parent(optionsValues).style('margin-top: 10px; border-radius: 5px')
  strokeWidth = createSelect(false).parent(optionsValues).style('margin-top: 10px;')
  strokeWidth.option('40')
  strokeWidth.option('24')
  strokeWidth.option('12')
  strokeWidth.option('8')

  strokeWidth.selected('8')
// clear button
  clearBut = createButton('Clear Canvas').parent(options).style('width: 100px; background:rgba(25, 135, 84, 0); color: black; border-radius: 20px; font-size: 30px; height: 100px')

// undo button
  undoBut = createButton('Undo').parent(options).style('width: 100px; background: rgba(25, 135, 84, 0); color: black; border-radius: 20px; font-size: 30px; height: 100px')

    // save as PDF button
    savePDFButton = createButton('Save as PDF').parent(options).style('width: 120px; background: rgba(25, 135, 84, 0); color: black; border-radius: 20px; font-size: 30px; height: 100px');
  
  // Button actions
  clearBut.mousePressed(function() {
    lines = [];
    saveState(); // Save state after clearing
  });

  // Connect the undo button to the undo function
   undoBut.mousePressed(function() {
    undo();
  });

  savePDFButton.mousePressed(function() {
    saveCanvasAsPDF();
  });

  // Save the initial blank state
  saveState(); 


  
}


function draw() {
  background(bgColor.value())

// if clear button pressed clears canvas
  clearBut.mousePressed(function() {
    lines = []
  })

  if (mouseIsPressed) {
    var line = new MyLine(strokeColor.value(), strokeWidth.value())
    lines.push(line)
    
  }

  for (var line of lines) {
    line.show();

  }
}


// Save state only after finishing a stroke
function mouseReleased() {
  if (lines.length > 0) {
    saveState();
  } 
}

function saveState() {
  canvasStates.push([...lines]); // Save a copy of the current lines array
  currentStateIndex = canvasStates.length - 1;
}

function undo() {
  if (canvasStates.length > 1) {
    canvasStates.pop(); // Remove the last saved state
    lines = [...canvasStates[canvasStates.length - 1]]; // Restore the previous state
  } else if (canvasStates.length === 1) {
    lines = []; //If only one state left, clear the canvas
  }
}


function saveCanvasAsPDF() {
  let canvas = document.querySelector('canvas');
  let imgData = canvas.toDataURL('image/png');

  const { jsPDF } = window.jspdf;
  let pdf = new jsPDF('l', 'px', [width, height]);
  pdf.addImage(imgData, 'PNG', 0, 0, width, height);

  pdf.save('drawing.pdf');
}
