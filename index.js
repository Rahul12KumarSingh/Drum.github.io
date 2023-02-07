//Detecting the keyboard press
document.addEventListener("keypress", function(event){
       var x = event.key ;
       
       animation(x);
       func(x);
       
});



//deteching the mouse click
var len = document.querySelectorAll("button").length;

for (var i = 0; i <= len; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function(){
         var x = this.innerHTML ;

         
         animation(x);
         func(x);
         
    });
}


function func(x){
   switch (x) {
       case 'w':
           var tom1 = new Audio("sounds/tom-1.mp3");
           tom1.play();
           break;

       case 'a':
           var tom2 = new Audio("sounds/tom-2.mp3");
           tom2.play();
           break;

       case 's':
           var tom3 = new Audio("sounds/tom-3.mp3");
           tom3.play();
           break;

       case 'd':
           var tom4 = new Audio("sounds/tom-4.mp3");
           tom4.play();
           break;

       case 'j':
           var crash = new Audio("sounds/crash.mp3");
           crash.play();
           break;

       case 'k':
           var kick = new Audio("sounds/kick-bass.mp3");
           kick.play();
           break;

       case 'l':
           var snare = new Audio("sounds/snare.mp3");
           snare.play();
           break;

       default: alert("javascript is working !!! ");
           break;
   }

}

function animation(key) {
    // alert("new class is added");
    document.querySelector("." + key).classList.add("pressed");

    setInterval(function() {
        document.querySelector("." + key).classList.remove("pressed");
    } , 100);
   
}







//Example of the constructer
//with the help of the constructer we can constuct the object
//contstructor nmae should start with the  capital letter

// function Func(num, emailId, regNumber, cgpa){
//     this.name = num ,
//     this.emailId = emailId ,
//     this.regNumber = regNumber ,
//     this.cgpa = cgpa;
// };

// var x = new Func("Rahul Kumar Singh" , "2021ugec091@nitjsr.ac.in" , "2021ugec091", 8.55);
