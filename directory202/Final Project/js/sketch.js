var lines = []
var strokeColor;
var bgColor;
var strokeWidth;
var canvasStates = [];
var currentStateIndex = 0;



function setup() {
  createCanvas(windowWidth, windowHeight - 200);
  background(30);
  var options = createDiv().style('display: flex; background:rgba(25, 135, 84, 0); color: black');

  // labels
  var optionsTitles = createDiv().parent(options);
  createP('Stroke Color').parent(optionsTitles);
  createP('Background Color').parent(optionsTitles);
  createP('Stroke Width').parent(optionsTitles);

  // color pickers
  var optionsValues = createDiv().parent(options).style('margin: 10px 30px; width: 50px');


  strokeColor = createColorPicker('#ffffff').parent(optionsValues).style('border-radius: 5px')
  bgColor = createColorPicker('#1e1e1e1e').parent(optionsValues).style('margin-top: 10px; border-radius: 5px')
  strokeWidth = createSelect(false).parent(optionsValues).style('margin-top: 10px;')
  strokeWidth.option('24')
  strokeWidth.option('12')
  strokeWidth.option('8')

  strokeWidth.selected('8')

  clearBut = createButton('Clear Canvas').parent(options).style('width: 100px; background:rgba(25, 135, 84, 0); color: black; border-radius: 20px')
  undoBut = createButton('Undo').parent(options).style('width: 100px; background: rgba(25, 135, 84, 0); color: black; border-radius: 20px')
  
  // Button actions
  clearBut.mousePressed(function() {
    lines = [];
    saveState(); // Save state after clearing
  });

  undoBut.mousePressed(function() {
    undo();
  });

  saveState(); // Save initial empty state
  
}


function draw() {
  background(bgColor.value())

  clearBut.mousePressed(function() {
    lines = []
  })

  if (mouseIsPressed) {
    var line = new MyLine(strokeColor.value(), strokeWidth.value())
    lines.push(line)
    saveState();
  }

  for (var line of lines) {
    line.show();

  }

}
function mouseReleased() {
  saveState(); // Save state when the mouse is released
}

function saveState() {
  canvasStates.push([...lines]); // Save a copy of the current lines array
  currentStateIndex = canvasStates.length - 1;
}

function undo() {
  if (canvasStates.length > 1) {
    canvasStates.pop(); // Remove the last saved state
    lines = [...canvasStates[canvasStates.length - 1]]; // Restore the previous state
  }
}

