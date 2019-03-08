// Phan I : Dom css ====>
//(1: set style css)
var domCSS = document.getElementById("test");
domCSS.style.color = "#4caf50";
domCSS.style.background = "yellow" ;

//(2: get style css)
alert(" style color of element is : " + domCSS.style.color);

 /*phan II: Dom event trong JS*/

 /*(1: Event Attribute)*/

 function myFunction(){
 	domCSS.style.background = "tomato";
 }

 function mOver(element){
 	element.style.background = "red"
 }

 function mOut(element){
 	element.style.background = "tomato"
}
 
function onBlur(){
	document.getElementById("fname").value = document.getElementById("fname").value.toUpperCase() ;

} 
function onFocus(element){
	element.style.background = "green"
}

//Event listener trong Javascript

document.getElementById("myBtn").addEventListener("click" , changeColor);
document.getElementById("myBtn").addEventListener("click" , alertBox);

function changeColor(){
	document.getElementById("test1").style.color = "red";
	document.getElementById("test1").style.background = "green";
}
function alertBox(){
	alert("The text has been change color by 'addEventListener' ")
}

// Remove addeventlistener



 window.addEventListener("mousemove" , random);

 function random(){
 	document.getElementById("demo").innerHTML = Math.random();
 }



function removeHandler(){
	 window.removeEventListener("mousemove" , random);

}
 
