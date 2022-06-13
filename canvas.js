var canvas =document.querySelector('canvas');
 var ctx= canvas.getContext('2d');


// Table creation 
class Line {
  constructor(x1,y1,x2,y2){
    this.x1 =x1;
    this.y1 =y1;
    this.x2 =x2;
    this.y2=y2;
  

  }
  drawLine = function(){
ctx.strokeStyle ="blue";
ctx.moveTo(this.x1,this.y1);
ctx.lineTo(this.x2,this.y2);
ctx.stroke()
  }

}
   var line1 =new Line(30,30,30,350);
   line1.drawLine();

   var line2 = new Line(30,30,350,30)
   line2.drawLine();

   var line3 = new Line(350,30,350,350)
   line3.drawLine();

   var line4 = new Line(30,350,350,350)
   line4.drawLine();

   var line5 = new Line(30,30,350,30)
   line5.drawLine();
    
   var line6 = new Line(30,30,350,350)
   line6.drawLine();
    
   var line7 = new Line(350,30,30,350)
   line7.drawLine();

   var line8 = new Line(190,30,190,350)
   line8.drawLine();

   var line9 = new Line(30,190,350,190)
   line9.drawLine();


 class Circle{
  constructor(x,y,r,color){
  this.x =x;
  this.y=y;
  this.r=r;
  this.color=color;
  }
   

    drawCircle=function(){
    //the fist red circle
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.r,0,Math.PI*2,false)
    ctx.fill();
 }
  
}
 // the first Red circle
  var circle1 =new Circle(30,30,15,"red");
  circle1.drawCircle();
 // the second Red circle
   var circle2 = new Circle(190,30,15,"red")
   circle2.drawCircle();
 // the three Red circle
   var circle3 = new Circle(350,30,15,"red")
   circle3.drawCircle();
   //the first green circle
   var circle4 = new Circle(30,350,15,"green")
   circle4.drawCircle();
 // the second green circle
   var circle4 = new Circle(190,350,15,"green")

   //the three green circle
   circle4.drawCircle();
   var circle4 = new Circle(350,350,15,"green")
   circle4.drawCircle();

 

 