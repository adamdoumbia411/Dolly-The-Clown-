
var grow= 0;
var seb=300;
 
 

function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
 
 background(253,18,18); //an RGB color for the canvas' background
  //circle
  stroke(0,0,0) // an RGB color for the circle's border
  strokeWeight(4);
  fill(255,255,255,); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(250,250,300,300); // center of canvas, 20px dia

  //eyes
  fill(0,0,0);
  ellipse(180,200,30,30);
  fill(0,0,0);
  ellipse(300,200,30,30);

  //mouth
  fill(255,51,51);
  ellipse(250,330,200,40)
  fill(0,0,0);

  //nose 
  fill(255,51,51);
  strokeWeight(2);
  ellipse(250,250,grow,grow);
  
  //hair 
  fill(255,51,51);
  strokeWeight(3);
  ellipse(250,100,130,130);
  fill(145,76,213,150);
  strokeWeight(3);
  ellipse(200,110,130,130);

  //body
  fill(255,255,255);
  strokeWeight(3);
  ellipse(250,510,400,220);

  //lines on body 
  strokeWeight(2);
  arc(400, 460, 100, 200, 60, PI + QUARTER_PI, CHORD);
  

  //hat 
  fill(153,51,255);
  strokeWeight(0);
  triangle()

  //bar 
  fill(255,255,51);
  strokeWeight(0);
  rect(mouseX,450,200,50);


  
  seb=seb-2;
  fill(230,40,210);
  stroke(255,255,255);
  strokeWeight(5);
  textFont('comicsans');
  textSize(50);
  text('Dolly',200,50);

}
function mousePressed(){
  if (grow>=100) {grow=0;} else {grow=grow+15;}
   

 }


