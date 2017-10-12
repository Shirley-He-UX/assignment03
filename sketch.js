var colorList=[
  '#f39e52',
  '#f0d589',
  '#dc647f',
  '#6fa3d7',
  '#1386ad',
  '#3d5575',
  '#6aad68',
  '#997aa3',
  '#fbe2e5',
  '#3162ad'
  ]

function setup() {
  createCanvas(300,440);
  
  frameRate(1);
  
}

function draw(){
  noStroke();
  
  for(var x=0; x<width; x+=50 ){
    for(var y =0; y<=height*1.1; y+=40){
      quad(x,y,x+50,y-60,x+50,y-20,x,y+40);
      fill(color(random(colorList)));
    }
  }
  
  if(frameCount==10){
    noLoop();
  }
  
}

