var name;
var humaswitch;

name = prompt("WELCOME TO GAME OF VEGANS!\n\nPlease type your first name to start the game");

alert("You have woken up in an open corn field.\n\nYou hear footsteps approching...");
alert("You slowly look behind you");
alert("You see a dark figure standing over you...");
alert("You slowly open your eyes and see...");

humaswitch = prompt("OH NO!... IT'S THE HUMAS WITCH!!!\n\nAre you a vegan? Answer me NOW with YES or NO?!\n\nOr I will turn you into a toad " + name);


if (humaswitch === "No" || humaswitch === "no") {

alert("You have been converted to veganism!\nTime for your lettace!");

}


if (name === "Aiden" || name === "aiden") {

alert("CRUNCH!\n\nYou have been eaten by a broccoli monster!\n(But on the plus side.. At least there is one less vegan in the world!)\n\nGAME OVER!");

} else {

alert("YOU WIN!\n\nYou get to go home and eat a medium rare steak,\nthen get to slap a vegan in the face with a beef buger!");

}