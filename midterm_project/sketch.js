

let albert;
let sally;
let han;



function setup(){
  createCanvas (800,800);
  background(128,79,79);
  noStroke();
  
albert = new Mushroom1();
sally = new Mushroom2();
han = new Mushroom3();


}

function draw(){
  background(128,79,79);
  drawDirt();
  drawMycelium();
  drawMycelium();
  drawLight();

  sally.display(0,0);
  han.display(0,0);
  
}

function drawMycelium(){
  
  stroke(240,220,213);
  strokeWeight(2);
  
  //Mushroom1
  line(230,265,218,320);
  line(218,320,180,310);
  line(218,320,170,340);
  line(218,320,220,380);
  line(170,340,185,360);
  line(170,340,165,375);
  line(220,380,200,395);
  line(220,380,240,440);
  line(220,380,250,405);
  
  //Mushroom2
  line(83.5,376.5,100,400);
  line(100,400,75,450);
  line(100,400,125,415);
  line(125,415,160,380);
  line(125,415,140,435);
  line(75,450,55,460);
  line(75,450,105,510);
  line(125,415,200,420);
  
  //Mushroom3
  line(348,440,320,455);
  line(348,440,400,470);
  line(348,440,355,515);
  line(320,455,280,445);
  line(320,455,270,470);
  line(400,470,520,460);
  line(400,470,470,490);
  line(400,470,430,550);
  line(355,515,320,530);
  line(355,515,335,580);
  line(520,460,540,470);
  line(520,460,560,440);
  line(470,490,460,510);
  line(470,490,490,520);
  line(470,490,515,485);
  line(430,550,420,565);
  line(430,550,450,580);
  line(490,520,487,543);
    
}

function drawDirt(){
  beginShape();
  fill(77,51,50);
  noStroke();
  vertex(0,300);
  bezierVertex(0,300,229,150,550,425);
  vertex(550,800);
  vertex(0,800);
  endShape();
  
  beginShape();
  fill(77,51,50);
  vertex(551,426);
  vertex(800,501);
  vertex(800,800);
  vertex(400,800);
  
  endShape();
  
  beginShape();
  fill(128,79,79);
  stroke(77,51,50);
  vertex(550,425);
  bezierVertex(550,425,650,515,800,500);
  endShape();

}

function drawLight(){
  
  noStroke();
  fill(255,170,52,150);
  ellipse(35,800,125,125);
  
  fill(255,170,52,120);
  ellipse(35,800,300,300);
  
  fill(255,170,52,80);
  ellipse(35,800,575,575);
  
  fill(255,170,52,40);
  ellipse(35,800,925,925);
  
  fill(255,170,52,10);
  ellipse(35,800,1425,1425);
  
  fill(255,170,52,7);
  ellipse(35,800,1950,1950);
  
}

class Mushroom1{

constructor(x,y){
  this.x = x;
  this.y = y;
}



 display(){
//undercap1B
  beginShape();
  fill(186,122,102);
  noStroke();
  vertex(130,140);
  bezierVertex(130,140,170,160,205,167);
  vertex(210,150);
  endShape();
  
  beginShape();
  vertex(260,160);
  vertex(262,174);
  bezierVertex(262,174,300,180,340,173);
  endShape();
  
  //stem1
  beginShape();
  fill(181,125,110);
  noStroke();
  vertex(200,260);
  bezierVertex(200,260,170,240,210,150);
  vertex(260,160);
  bezierVertex(260,160,275,230,260,269);
  vertex(260,269);
  endShape();
 
  //cap1
  beginShape();
  fill(122,64,68);
  noStroke();
  vertex(130,140);
  bezierVertex(110,140,260,0,340,170);
  vertex(340,173);
  endShape();
 
  stroke(186,122,102);
  strokeWeight(2);
  line(132,140,338,173);
  
  //undercap1A
  beginShape();
  fill(186,122,102);
  noStroke();
  vertex(130,140);
  bezierVertex(110,140,240,120,340,170);
  vertex(340,173);
  endShape();

  //gill1A
  fill(235,180,162);
  noStroke();
  curve(110,120,130,139,208,156,220,140);
 
  //gill1B
  curve(120,140,170,157,207,158,220,140);
 
  //gill1C
  stroke(235,180,162);
  strokeWeight(1.5);
  curve(162,128,165,136.5,212,155,225,158);

  //gill1D
  curve(210,130,200,137,215,155,220,160);
 
  //gill1E
  curve(220,130,225,139,225,156,217,160);

  //gill1F
  curve(245,132,250,142.5,240,158,227,162);
  
  //gill1G
  curve(265,140,275,147,255,160,245,165);
  
  //gill1H
  curve(330,150,312,158,258,161,250,158);
  
  //gill1I
  curve(360,160,340,172,260,163,250,150);

  //gill1J
  curve(240,150,262,168,300,175.5,330,170);
}

