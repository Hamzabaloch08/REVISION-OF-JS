// alert("hello world")

// var userInput = prompt("enter any number and alphabate")

// document.write(userInput)

var userInput = +prompt("Enter your age");

if (userInput < 18) {
  document.write("you are under age");
} else if (userInput >= 18 && userInput <= 30) {
  document.write("your eligible for this program");
} else if (userInput > 30){
    document.write("You are over age for this program");
}
