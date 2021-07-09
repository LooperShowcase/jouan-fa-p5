function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(500, 500);
  angleMode(DEGREES)
}

function draw() {
let seconds = second()
let minutes = minute()
let hours = hour()


  // The same as doing: background(220); or --> background(220,220,220);
  background("gray");
/*textSize(30);
fill("green")
let clock = hours + ":" + minutes + ":" + seconds;
text(clock, width / 2,height / 2);*/
noFill ();
stroke(0);
strokeWeight(8);




translate (width / 2,height / 2)
rotate(-90)



//seconds
stroke(6, 214, 160)
let secArc = map(seconds, 0, 60, 0, 360)
arc(0, 0,300, 300, 0, secArc)

push();
rotate(secArc);
line(0,0,150 ,0);
pop();


// minute
stroke(255, 209, 102)
let minArc = map(minutes, 0, 60, 0, 360)
arc( 0,0, 280, 280, 0, minArc)

push();
rotate(minArc);
line(0,0,140,0) ;
pop();


// hours
stroke(239, 71, 111)
let hArc = map(hours % 12, 0, 12,0, 360)
arc ( 0,0,260, 260, 0, hArc)

push();
rotate(hArc);
line(0,0,130,0);
pop();

rotate(90)
strokeWeight(1)
text(12,0,-160)

text(9,-170,0)

text(6,0,190)

text(3,170,0)

textSize(30)

fill("black")
text("jouan", -20,-210 )












}