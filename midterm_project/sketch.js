//This is a series of events and scenes 
//As the sun sets and the moon raises you fall asleep
//You enter the dream world

let set;
let raise;
let sky;
let scene = 1; //size 
let cox = 0;
let coy = 0;
let r = 0;
let y = 0;
let h = 0;
let ih = 900;
let color1;
let color2;
let fluff;



function setup() { 
 createCanvas(windowWidth, windowHeight);

 color1= color(18,28,61);
 color2= color(61,88,159);

 set = new Sun;
raise = new Moon;
fluff = new Cloud;

}
function draw() { 
if(scene == 1){

    sky= map(y,0, 500, 255,0);
background(0,sky/2,sky);

set.displaySun();
raise.displayMoon();

y=y+1;

if(y > 400){
noStroke();
fill(255,255,0);
ellipse(random(0,windowWidth),random(0,windowHeight),random(0,5),random(0,5));
ellipse(random(0,windowWidth),random(0,windowHeight),random(0,5),random(0,5));
ellipse(random(0,windowWidth),random(0,windowHeight),8,8);
ellipse(random(0,windowWidth),random(0,windowHeight),10,10);

}
} //scene 1

//static screen effect
if(scene == 2){ 
background(255);

noStroke();
fill(0);
rect(0,0,windowWidth,h);
h = h+5;

if(h> windowHeight){
 h = windowHeight;
 noStroke();

push();
  for (this.cox =  0;this.cox <= width; this.cox+=10) { 
    for (this.coy = 0 ;this.coy <= height ; this.coy+=10){
pop();
          
          fill(0,255,0, random(100,255));
          rect(this.cox,this.coy,4,4);
          fill(0,0,255, random(100,255));
          rect(this.cox+4,this.coy+2,4,4);
          fill(255,0,0, random(100,255));
          rect(this.cox-4,this.coy-2,4,4);  
        }   
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

r = r+2;

if(r>800){
 r = 0;
}

}

if(scene == 4){


  for(let y=0; y<height; y++){
    n = map(y,0,height,0,1);
    let sky = lerpColor(color1, color2, n); //lerpColor blends two colors 
    stroke(sky);
    line(0,y,width, y);
  }

fluff.moveCloud(0,0);


}









} //draw loop

class Sun{
 constructor(){
    this.x = 100;
 }

displaySun(){

stroke(252,182,40,100);
fill(252,182,40,100);
circle(this.x, y ,180); //yellow

stroke(230,116,28,110);
fill(230,116,28,110);
circle(this.x,y,140);

stroke(230,116,28,120);
fill(230,116,28,120);
circle(this.x,y,100); //orange

stroke(230,65,10,130);
fill(230,65,10,130);
circle(this.x,y,60);

stroke(189,31,17,140);
fill(189,31,17,140);
circle(this.x,y,20); //red

y= y+1;

if(this.y > windowHeight){
 this.y = windowHeight;
 }

}
}

class Moon{
    constructor(){
    this.posx = windowWidth-100;
 }

displayMoon(){

stroke(255,50);
fill(255,50);
circle(this.posx, height - y,180);

stroke(255,60);
fill(255,60);
circle(this.posx, height - y,140);

stroke(255,70);
fill(255,70);
circle(this.posx, height - y,100);

stroke(255,80);
fill(255,80);
circle(this.posx, height - y,60);

stroke(255,90);
fill(255,90);
circle(this.posx, height - y,20);

y=y+1;

if(y > windowHeight){
 y = windowHeight;
}

}
}

class Cloud{

constructor(x1,y1){
this.x1 = 0;
this.y1 = 0;
}

moveCloud(x1,y1){
stroke(255);
strokeWeight(5);
noFill();
beginShape();
curveVertex(this.x1+37.81,this.y1+299.26);
curveVertex(this.x1+41.39,this.y1+292.8);
curveVertex(this.x1+51.5,this.y1+282.5);
curveVertex(this.x1+66.5,this.y1+277.5);
curveVertex(this.x1+76.01,this.y1+278.42);
endShape();

beginShape();
curveVertex(this.x1+76.01,this.y1+278.42);
curveVertex(this.x1+71.5,this.y1+269.5);
curveVertex(this.x1+72.5,this.y1+258.5);
curveVertex(this.x1+81.5,this.y1+250.5);
curveVertex(this.x1+98.5,this.y1+249.5);
curveVertex(this.x1+110.73,this.y1+255.85);
endShape();

beginShape();
curveVertex(this.x1+110.73,this.y1+255.85);
curveVertex(this.x1+109.5,this.y1+248.5);
curveVertex(this.x1+113.5,this.y1+241.5);
curveVertex(this.x1+122.5,this.y1+238.5);
curveVertex(this.x1+130.7,this.y1+241.96);
endShape();

beginShape();
curveVertex(this.x1+130.7,this.y1+241.96);
curveVertex(this.x1+125.06,this.y1+235.23);
curveVertex(this.x1+123.5,this.y1+228.5);
curveVertex(this.x1+126.5,this.y1+220.5);
curveVertex(this.x1+129.83,this.y1+216.78);
endShape();

}

}



function mousePressed() {
 scene++;

  if (scene > 4) {
    scene = 1;
  }
}


