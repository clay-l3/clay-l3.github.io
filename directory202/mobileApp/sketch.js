var lines = []
var strokeColor;
var bgColor;
var strokeWidth;



function setup() {
  createCanvas(windowWidth, windowHeight - 200);
  background(30);
  var options = createDiv().style('display: flex; background: #5e3b31; color: white');

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

  clearBut = createButton('Clear Canvas').parent(options).style('width: 100px; background: #5e3b31; color: white; border-radius: 20px')

}


function draw() {
  background(bgColor.value())

  clearBut.mousePressed(function() {
    lines = []
  })

  if (mouseIsPressed) {
    var line = new MyLine(strokeColor.value(), strokeWidth.value())
    lines.push(line)
  }

  for (var line of lines) {
    line.show()
  }
}

