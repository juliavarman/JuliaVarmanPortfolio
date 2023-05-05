
function setup() {
  createCanvas(1000, 1000);
  background("MediumSpringGreen");
}

function planet() {


     fill("purple");
  ellipse(mouseX, mouseY, 400, 110);
  
    
  
     fill("green");
  ellipse(mouseX, mouseY, 340, 75);
   
  
  
     fill("purple");
  ellipse(mouseX, mouseY, 270, 50);
  
  
    fill("purple");
  ellipse(mouseX, mouseY, 155, 155);
  
   fill("green");
  ellipse(mouseX, mouseY, 220, 30);
  


}

function mousePressed() {

  planet();
  
    
}