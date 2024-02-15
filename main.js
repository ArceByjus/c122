x = 0;
y = 0;

screen_width = 0;
screen_height = 0;

draw_apple = "";

apple = "";
speak_data = "";
to_number = 0;

function preload()
{
  apple = loadImage("apple.png");
}

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "El sistema está escuchando. Por favor, di un numero del uno al cinco. Habla.";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "Se reconoció la voz como: " + content; 
    to_number = Number(content);
    console.log(content+" es "+to_number);
    
    //if(Number.isInteger(to_number))//
    if (content == "uno")
    {
      to_number = 1
      document.getElementById("status").innerHTML = "Se empezó a dibujar una manzana."; 
      draw_apple = "set";
    }
    else if(content == "dos"){
      to_number = 2
      document.getElementById("status").innerHTML = "Se empezó a dibujar dos manzana."; 
      draw_apple = "set";
    }
    else if(content == "tres"){
      to_number = 3
      document.getElementById("status").innerHTML = "Se empezó a dibujar tres manzana."; 
      draw_apple = "set";
    }
    else if(content == "cuatro"){
      to_number = 4
      document.getElementById("status").innerHTML = "Se empezó a dibujar 4 manzana."; 
      draw_apple = "set";
    }
    else if(content == "cinco"){
      to_number = 5
      document.getElementById("status").innerHTML = "Se empezó a dibujar cinco manzana."; 
      draw_apple = "set";
    }
    else
    {
      document.getElementById("status").innerHTML = "No se reconoció un número. "; 
    }

}

function setup() {
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;

  canvas = createCanvas(screen_width, screen_height-150);
  canvas.position(0,150);
}

function draw() {
  if(draw_apple == "set")
  {
    for(var i = 1 ; i <= to_number; i++)
    {
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      image(apple, x, y, 50, 50);
    }
    document.getElementById("status").innerHTML = to_number + " manzanas dibujadas.";
    speak_data = to_number + " manzanas dibujadas.";
    speak();
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
