// detecting button press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0;  i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",  function(){

        var buttonInnerHTML = this.innerHTML;

        buttonAnimation(buttonInnerHTML);

        switch (buttonInnerHTML) {
            case "w":
                var crash = new Audio("./sounds/crash.mp3");
                crash.play();                
                break;

            case "a":
                var kickbass = new Audio("./sounds/kick-bass.mp3");
                kickbass.play();
                break;
    

            case "s":
                var tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play();
                break;

            
            case "d":
                var snare = new Audio("./sounds/snare.mp3");
                snare.play();
                break;
            case "j":
                var tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play();
                break;

            case "k":
                var tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play();
                break;

            case "l":
                var tom4 = new Audio("./sounds/tom-4.mp3");
                tom4.play();
                break;

            default:console.log(buttonInnerHTML);
                break;
        }
        
    }); 

}


// detecting keyboard press (now keydown)

document.addEventListener("keydown", function (event) {

    buttonAnimation(event.key);


    switch (event.key) {
        case "w":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
    
        case "a":
            var kickbass = new Audio("./sounds/kick-bass.mp3");
            kickbass.play();
            break;
    

        case "s":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

            
        case "d":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "j":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;  
        
        default:console.log(event);
            break;
    }
    //or  console.log(event);

}
)


function buttonAnimation(currentKey){

    var activeButton= document.querySelector("."+currentKey);//because of the appearance of the class

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100)//after 100 miliseconds
}
/*
also:
document.querySelector("button").addEventListener("click", function(){ // anonymous function
    alert("I got clecked");
}
);

otherwise, handleClick // without ()

function handleClick(){
    alert("I got clecked");
}

//generally plays audios:
var audio = new Audio('./sounds/tom-1.mp3');
        audio.play();

//αναφέρεται στο τρέχον αντικείμενο
 this.style.color="white";
*/