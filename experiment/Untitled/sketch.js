  var colorList = [
    '#1a2b7e',
    '#e12813',
    '#40bab9',
    '#e5e5e5',
    '#fff000',
    '#555'
    ];

function setup() {
  createCanvas(600,600);
  //line(0,0,width,height);
  
}

function draw() {
  colorMode(HSB);

  var y = 100;
  var r = 50;
  
  var myNumber = 10.32;
  var myString = "Halo";
  var myBollen = true;
  var myList = [1,2,3];

  noStroke();
  // if(i<3){ i++; }
  // if(i==3){ noLoop();}
  //noFill();
  
  // for(var i = 0; i < 15; i++){
  //   for(var j = 0; j < 15; j++){
  //     ellipse(25+j*50,25+i*50,50,50);
  //     fill(i*3+j*12,i+j,i*10+j*2);
  //   }
  // }
  
  
  //   for(var x = 25; x < width; x+=50){
  //     for(var y = 25; y < height; y+=50){
  //       var diameter = (x+y)/10;
  //       //var customHue = x /width*255;
  //       var customSatuation = y/height*255;
        
  //       ellipse(x,y,y/10);
  //       fill(x,y/height*255,diameter);
  //     }
  // }


  for(var index = 0; index<colorList.length;index++ ) {
    var colorHex = colorList[index];

    console.log(index + "" +colorList.length);
    
    fill(color(colorHex));
    
    rect(index*100,index*100,100,100);
    // line(0,index*10,300,300+index*10);
    // stroke(colorHex);
    
  }

}


