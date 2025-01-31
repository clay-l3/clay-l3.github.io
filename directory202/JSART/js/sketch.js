function setup() {
  createCanvas(900, 900);
}

function draw() {
  background(133, 198, 255);
  fill("orange")
  quad(150, 140, 0, 140, 0, 450, 150, 450)
  //balloon
  fill("black")
  circle(450, 410, 29)
  fill("white")
  quad(465, 320, 435, 320, 435, 410, 465, 410)
  line(465, 410, 435, 320)
  line(435, 410, 465, 320)
  fill("red");
  circle(450, 250, 150);
  line(465, 410, 465, 530)
  fill("black")
  circle(465, 530, 10)




  //background
  fill("rgb(92,23,23)");
  quad(0, 450, 0, 800, 230, 800, 230, 450);
  fill("yellow");
  quad(350, 650, 350, 450, 150, 450, 150, 650);
  fill("rgb(66,16,16)");
  quad(300, 650, 420, 650, 420, 800, 300, 800);
  fill("green")
  quad(300, 650, 230, 650, 230, 800, 300, 800);
  fill("red")
  triangle(230, 650, 230, 600, 300, 650)
  fill("pink")
  quad(490, 650, 420, 650, 420, 800, 490, 830);
  fill("purple")
  triangle(490, 650, 490, 600, 420, 650)
  fill("blue")
  quad(0, 900, 0, 800, 420, 800, 700, 900);
  //rightside
  fill("rgb(136,75,44)")
  quad(900, 0, 900, 900, 770, 900, 770, 310)
  fill("red")
  quad(770, 900, 770, 750, 700, 750, 700, 900);
  fill("green")
  quad(770, 750, 770, 620, 850, 620, 850, 750)
  fill("yellow")
  quad(770, 480, 770, 620, 680, 620, 680, 480);
  fill("yellow")
  quad(770, 480, 770, 420, 825, 420, 825, 480)
  fill("black")
  quad(770, 360, 770, 420, 720, 420, 720, 360)
}

