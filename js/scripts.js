//day 1
var myFirst = "Robert";
var myLast = "Pearcy-German"

console.log(myFirst);
console.log(myLast);

var myHope = "Is that one day I can take all of the knowledge i've learned and use it to make a difference.";
var myHobby = "I like to learn about knew tech that is coming out lately I've be studying about augmented reality and Automated Machine Learning ask me for more information. I also like to fish and go backpacking deep into yosemite.";

console.log(myHope);
console.log(myHobby);

var firstName = prompt("What is your first name?", "Robert");
var lastName = prompt("What is your last name?", "Pearcy-German");
var birthday = new Date(prompt("What is your birthday?", "12/30/1987"))

console.log("Your first name is " + firstName);
alert("Your last name is " + lastName);

var userAnswer = confirm("Is " + birthday + " your birthday?");

if (userAnswer == true) {
    alert("Happy Birthday to you when " + birthday + " comes around!!");
} else {
    alert("Sorry wrong birthday.");
}
