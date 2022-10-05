let pass = "password1234";
let userInput = "";

for (i = 0; i < 3; i++) {
  userInput = prompt("Enter password, " + (3 - i) + " tries left!");
  if (userInput == pass) {
    console.log("Congratulations!");
    break;
  }
}
