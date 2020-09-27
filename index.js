
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    
    document.querySelectorAll("button")[i].addEventListener("click",function(){
    var buttonhtml = this.innerHTML;
    buttonclicked(buttonhtml);
    animated(buttonhtml);

});
}

document.addEventListener("keydown", function (event) {

    buttonclicked(event.key);
    animated(event.key);
  
});

function buttonclicked(buttonhtml) {
    
    switch (buttonhtml) {

        case 's':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'h':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case 'u':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case 'v':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 'm':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case '\'s':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();

    }

}

function animated(key)
{
    var activebutton = document.querySelector("."+key);
    //document.getElementsByClassName(activebutton).style.property=pressed;
    activebutton.classList.add("pressed");
}
//var audio = new Audio('sounds/crash.mp3');
   // audio.play();