//This is a series of events and scenes 
//As the sun sets and the moon raises you fell asleep
//You enter the dream world

let set;
let raise;
let sky;
let scene = 1; //size 
let cox = 0;
let coy = 0;
let r = 0;

function setup() { 
 createCanvas(windowWidth, windowHeight);

 set = new Sun;
raise = new Moon;

}
function draw() { 
if(scene == 1){

    sky= map(mouseY,0, 500, 255,0);
background(0,sky/2,sky);

set.displaySun();
raise.displayMoon();

if(mouseY > 400){
noStroke();
fill(255,255,0);
ellipse(random(0,windowWidth),random(0,windowHeight-200),random(0,5),random(0,5));
ellipse(random(0,windowWidth),random(0,windowHeight-200),random(0,5),random(0,5));
ellipse(random(0,windowWidth),random(0,windowHeight-200),8,8);
ellipse(random(0,windowWidth),random(0,windowHeight-200),10,10);

}
} //scene 1

//static screen effect
if(scene == 2){ 
background(0);
  noStroke();
  push();
  for (this.cox =  0;this.cox <= width; this.cox+=10) { 
    for (this.coy = 0 ;this.coy <= height ; this.coy+=10){
      pop();
          fill(random(0,255),0,0);
          rect(this.cox,this.coy,4,4);
          fill(0,0,random(0,255));
          rect(this.cox+2,this.coy+2,4,4);
          fill(0,random(0,255),0);
          rect(this.cox-2,this.coy-2,4,4);  
        }
        }
} //scene 2 

//aura
if(scene == 3){

background(0);

noStroke();
fill(145,223,178);
circle(windowWidth/2,windowHeight/2,4000); //green fill 

stroke(145,223,178,200);
strokeWeight(40);
fill(179,212,157,200);
circle(windowWidth/2,windowHeight/2,700+r); //green 

stroke(179,212,157,200);
strokeWeight(20);
fill(219,190,131,200);
circle(windowWidth/2,windowHeight/2,600+r); //green dull

stroke(219,190,131,200);
strokeWeight(20);
fill(241,154,134,200);
circle(windowWidth/2,windowHeight/2,500+r); //skin

stroke(241,154,134,70);
strokeWeight(20);
fill(243,132,138,200);
circle(windowWidth/2,windowHeight/2,400+r); //peach 

stroke(243,108,141,200);
strokeWeight(4);
fill(243,108,141);
circle(windowWidth/2,windowHeight/2,300+r); //pink center 

r = r+3;

}




} //draw loop

class Sun{
 constructor(){
    this.x = 100;
 }

displaySun(){

stroke(252,182,40,100);
fill(252,182,40,100);
circle(this.x,mouseY ,180); //yellow

stroke(230,116,28,110);
fill(230,116,28,110);
circle(this.x,mouseY,140);

stroke(230,116,28,120);
fill(230,116,28,120);
circle(this.x,mouseY,100); //orange

stroke(230,65,10,130);
fill(230,65,10,130);
circle(this.x,mouseY,60);

stroke(189,31,17,140);
fill(189,31,17,140);
circle(this.x,mouseY,20); //red

}
}

class Moon{
    constructor(){
    this.posx = windowWidth-100;
 }

displayMoon(){

stroke(255,50);
fill(255,50);
circle(this.posx, height - mouseY,180);

stroke(255,60);
fill(255,60);
circle(this.posx, height - mouseY,140);

stroke(255,70);
fill(255,70);
circle(this.posx, height - mouseY,100);

stroke(255,80);
fill(255,80);
circle(this.posx, height - mouseY,60);

stroke(255,90);
fill(255,90);
circle(this.posx, height - mouseY,20);

}

}


function mousePressed() {
 scene++;

  if (scene > 3) {
    scene = 1;
  }
}


