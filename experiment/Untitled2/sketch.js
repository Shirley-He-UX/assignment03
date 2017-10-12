var colorList = [
    '#1a2b7e',
    '#e12813',
    '#40bab9',
    '#e5e5e5',
    '#fff000',
    '#555'
    ];
    
function setup() {
  createCanvas(400,400);
  frameRate(1);
}

var interior = 0;
function draw() {
  noStroke();
  // for(x=25;x<width;x+=25){
  //   for(y=25;y<height;y+=25){
  //     if(random()<0.5){
  //       // var index = floor(random()*colorList.length);
  //       // fill(colorList[index] );
        
  //       // colorMode(HSB);
  //       // fill(random(0,255),random(200,255),random(170,200));
        
  //       fill(random(colorList)) ;

  //     }else{fill('#363798');}
  //     ellipse(x,y,25);
  //   }
  // }
  
  
  for(x=0;x<width;x+=50){
    for(y=0;y<height;y+=50){
      quad(x,y,x+50,y+50,x+50,y+150,x,y+150);
      fill(random(colorList)) ;
    }
  }
  
  

  // interior ++;
  
  // var y = noise(interior/100)*height;
  // var x = noise(interior/100+219003)*height;
  // ellipse(x,y,10);
  
}