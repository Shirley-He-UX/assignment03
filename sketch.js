var colorList=[
  '#1E3140',
  '#19515C',
  '#10736F',
  '#2C9677',
  '#60B773',
  '#A1D668',
  '#EEEF61'
  ]
var i = 5;
function setup() {
  createCanvas(500,500);
  frameRate(4);
}

function draw(){
  translate(-16*i, -16*i);
  strokeWeight(1);
  stroke(color(0,0,0,40));
  for(var x=0; x<width*2; x+=16*i ){
    for(var y =0; y<=height*2; y+=16*i){
        beginShape()
        vertex(7*i+x,0+y);
        vertex(9*i+x,1*i+y);
        vertex(10*i+x,4*i+y);
        vertex(9*i+x,6*i+y);
        vertex(10*i+x,10*i+y);
        vertex(11*i+x,11*i+y);
        vertex(12*i+x,9*i+y);
        vertex(11*i+x,9*i+y);
        vertex(11*i+x,7*i+y);
        vertex(13*i+x,6*i+y);
        vertex(13*i+x,11*i+y);
        vertex(15*i+x,12*i+y);
        vertex(16*i+x,10*i+y);
        vertex(15*i+x,10*i+y);
        vertex(15*i+x,7*i+y);
        vertex(17*i+x,4*i+y);
        vertex(17*i+x,6*i+y);
        vertex(19*i+x,5*i+y);
        vertex(22*i+x,5*i+y);
        vertex(20*i+x,10*i+y);
        vertex(17*i+x,12*i+y);
        vertex(16*i+x,14*i+y);
        vertex(18*i+x,15*i+y);
        vertex(19*i+x,14*i+y);
        vertex(18*i+x,14*i+y);
        vertex(19*i+x,13*i+y);
        vertex(20*i+x,14*i+y);
        vertex(17*i+x,18*i+y);
        vertex(17*i+x,20*i+y);
        vertex(15*i+x,23*i+y);
        vertex(15*i+x,26*i+y);
        vertex(16*i+x,26*i+y);
        vertex(15*i+x,28*i+y);
        vertex(13*i+x,27*i+y);
        vertex(13*i+x,22*i+y);
        vertex(11*i+x,23*i+y);
        vertex(11*i+x,25*i+y);
        vertex(12*i+x,25*i+y);
        vertex(11*i+x,27*i+y);
        vertex(10*i+x,26*i+y);
        vertex(9*i+x,22*i+y);
        vertex(10*i+x,20*i+y);
        vertex(9*i+x,17*i+y);
        vertex(7*i+x,16*i+y);
        vertex(7*i+x,17*i+y);
        vertex(2*i+x,19*i+y);
        vertex(3*i+x,21*i+y);
        vertex(1*i+x,22*i+y);
        vertex(1*i+x,18*i+y);
        vertex(4*i+x,14*i+y);
        vertex(3*i+x,13*i+y);
        vertex(2*i+x,14*i+y);
        vertex(3*i+x,14*i+y);
        vertex(2*i+x,15*i+y);
        vertex(0+x,14*i+y);
        vertex(1*i+x,12*i+y);
        vertex(4*i+x,10*i+y);
        vertex(6*i+x,5*i+y);
        vertex(3*i+x,5*i+y);
        vertex(2*i+x,3*i+y);
        vertex(7*i+x,1*i+y);
        endShape(CLOSE);
      fill(color(random(colorList)));
    }
  }
}
