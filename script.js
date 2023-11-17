// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//this is the main function that generates the password
function generatePassword() {
  //choose pass length
  let length = window.prompt("Enter a password length between 8 and 128")
  //ensures password is between 8 and 128 characters
  if (length > 128 || length <8) {
    window.alert("that is not within the range length, please try again");
    return;
  }
  //tried to do a checkbox prompt but couldnt figure out how :( intstead confirm = yes/true and cancel = no/false
  var uppercase = confirm("Would you like to use uppercase letters? Press confirm for yes, and cancel for no");
  var lowercase = confirm("Would you like to use lowercase letters? Press confirm for yes, and cancel for no");
  var symbols = confirm("Would you like to use symbols? Press confirm for yes, and cancel for no");
  var numbers = confirm("Would you like to use numbers? Press confirm for yes, and cancel for no");
 //these are all the characters available for the generator to use + a "combined" for later which will allow me to combine 
 //variables together into 1 mega variable
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var special ="!@#$%^&*()?.<>";
  var numerics = "1234567890"
  var combined = [];
  //ensures that if no options are picked, the function terminates
if (uppercase === false && lowercase === false && symbols === false && numbers === false) {
  window.alert("you need at least one character type for your password, please try again");
return;
}
//this adds the destinct variables into the mega variable "combined" if the option was selected earlier
if (uppercase === true) {combined += upper};
if (lowercase === true) {combined += lower};
if (symbols === true) {combined += special};
if (numbers === true) {combined += numerics};
//starting with a blank passwork, and looping for the length chosen before, 
//generate a random number (math floor rounding it) assigned to one of the values in the combined mega string
//add this to password and return it as a value
let pass = ""
for (let x = 0; x < length; x++) {
  let rndm =[Math.floor(Math.random() * combined.length)];
  pass = pass + combined[rndm];
}
return pass
}
//new function to put generated password in textbox
  function writePassword(){
    //set password to returned value from the generatePassword function
  let password = generatePassword();
  var passwordText = document.querySelector("#password");
  //replace text with password
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
