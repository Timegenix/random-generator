var student;
var ran;
function setup()
{
  createCanvas(windowWidth, windowHeight)

  var foo = new p5.Speech(); 
foo.speak('TIME GENIX WELCOMES YOU'); 
  
  
  setTimeout(function select()
  { 
    student= Math.round(random(1,5))
    textSize(100)
    fill("white")
    stroke("red")
    strokeWeight(3)
    text("Student: " + student, windowWidth/3,windowHeight/2+40)
  }, 3000);
  setTimeout(function rand()
  { 
     if(student)
    {
      var foo2 = new p5.Speech(); 
foo2.speak('STUDENT SELECTED IS' + student); 
    }
    }, 3500);
  
  
}
function draw()
{
  background("crimson")
  
  
  ran=Math.round(random(1,10))
  if(!student)
  {
    textSize(120)
    fill("teal")
    stroke("black")
    strokeWeight(8)
    text("TIMEGENIX",windowWidth/3-100, windowHeight/3 -50)
    
    fill("black")
    stroke("white")
    strokeWeight(5)
    textSize(100)
    text("Student: " + ran, windowWidth/3,windowHeight/2+40)
  }
  else
  {
    background("teal")
    
    textSize(120)
    fill("crimson")
    stroke("black")
    strokeWeight(7)
    text("TIMEGENIX",windowWidth/3-100, windowHeight/3 -50)
    
    textSize(100)
    fill("white")
    stroke("black")
    strokeWeight(7)
    text("Student: " + student, windowWidth/3,windowHeight/2+40)
    //var foo2= new p5.SpeechRec();
   // foo2.continuous('STUDENT SELECTED IS' + student)
   
    //foo2.stop()
  }
  
 
  
}
