

for(var i =0; i<document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" , handleClick);
}

function handleClick(){
    var buttonInnerHtml = this.innerHTML;

    buttonAnimation(buttonInnerHtml);

   switch (buttonInnerHtml) {
    case "w":
          var tom1 = new Audio("tom-1.mp3");
          tom1.play();        
        break;

    case "a":
            var tom2 = new Audio("tom-2.mp3");
            tom2.play();        
          break;

    case "s":
            var tom3 = new Audio("tom-3.mp3");
            tom3.play();        
          break;

    case "d":
            var tom4 = new Audio("tom-4.mp3");
            tom4.play();        
          break;    

    case "j":
            var snare = new Audio("snare.mp3");
            snare.play();        
          break;

    case "k":
            var crash = new Audio("crash.mp3");
            crash.play();        
          break;

    case "l":
            var kick = new Audio("kick-bass.mp3");
            kick.play();        
          break;

    default:
       alert("no");
   }
}

document.addEventListener("keypress", detect);

function detect(e){
    console.log(e);
 makesound(e.key);
 buttonAnimation(e.key);
}

function makesound(token){
    switch (token) {
        case "w":
              var tom1 = new Audio("tom-1.mp3");
              tom1.play();        
            break;
    
        case "a":
                var tom2 = new Audio("tom-2.mp3");
                tom2.play();        
              break;
    
        case "s":
                var tom3 = new Audio("tom-3.mp3");
                tom3.play();        
              break;
    
        case "d":
                var tom4 = new Audio("tom-4.mp3");
                tom4.play();        
              break;    
    
        case "j":
                var snare = new Audio("snare.mp3");
                snare.play();        
              break;
    
        case "k":
                var crash = new Audio("crash.mp3");
                crash.play();        
              break;
    
        case "l":
                var kick = new Audio("kick-bass.mp3");
                kick.play();        
              break;
    
        default:
           alert("wrong key pressed");
       }
}

function buttonAnimation(currentKey){
 var activeKey =  document.querySelector("."+currentKey);

 activeKey.classList.add("pressed");

setTimeout(remAni, 100);

function remAni(){
  activeKey.classList.remove("pressed");
}
}





