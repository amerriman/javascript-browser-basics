window.onload = function(){
var name = prompt("Who are you?");
var age = prompt("Hello " + name + ". How old are you?");

if (age < 21) {alert("Woah! You're such a baby!");}
else if (isNaN(age)) {prompt("That's not a number! You need to try again.");}
else  alert("Jeez, you are soooooo old!");
};
