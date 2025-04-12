function setup() {
  createCanvas(600,600);
  background(250);

}


function draw() {

    strokeWeight(0);
  //head
  fill(125, 75, 35);
  ellipse(300, 300, 300, 350);
  
  //head two
    fill(217, 167, 144);
  ellipse(300, 350, 300, 350);
  
  //left eye
  fill(250);
  ellipse(230, 320, 80, 45);
  
//right eye
  fill(250);
  ellipse(370, 320, 80, 45);
  
  //pupil left
   fill(0);
  ellipse(230, 320, 50, 45);
  
  //pupil right
    fill(0);
  ellipse(370, 320, 50, 45);


}
  
  
