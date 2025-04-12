 function setup() {
createCanvas(600, 600);
}
function draw() {

  strokeWeight(0)
  //hair 
  fill(28, 11, 1)
  ellipse(300,382,340,640)
  
  //shoulder
  fill(50 ,10 ,1 )
  triangle(200, 500, 270, 400, 430, 500);
    
  //head
  fill(184, 104, 33)
  ellipse(300,250,245,300)
  
  //neck
 fill(184, 104, 33)//darkbrown ish
 rect(260, 310, 80, 125);
 
//shoulder
  fill(250);
  ellipse(230, 250, 57, 40);
  
  //nose
  fill(166, 92, 27); // brown color
ellipse(300, 300, 24, 48); // brown circle

  //left eye
  fill(250);
  ellipse(230, 250, 57, 40);
  
  //right eye
  fill(250);
  ellipse(370, 250, 57, 40);
  
  //left iris
  fill(43, 22, 0);
  ellipse(230, 250, 30, 40);
  
  //right iris
  fill(43, 22, 0);
  ellipse(370, 250, 30, 40);
 
 //left white sparkle 
  fill(250);
  ellipse(240, 240, 10, 10);
  
  //right white sparkle
  fill(250)
  ellipse(382, 240, 10, 10);
  
  //mouth
  fill(99, 35, 16)
  arc(300, 350, 24, 50, -0.8, PI + QUARTER_PI);
 
  //shirt
  fill(110,11,3)
  // Give all corners a radius of 20.
  rect(175, 430, 250, 450, 20);
  
 
  // left curved eyebrow
  noFill();
  stroke(0);
  strokeWeight(4);
  arc(230, 205, 50, 25, PI, TWO_PI);

// right curved eyebrow
arc(370, 205, 50, 25, PI, TWO_PI);

   
  
   
  describe('A white triangle with a black outline on a gray canvas.');

}
