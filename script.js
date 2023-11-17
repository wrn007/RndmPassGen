// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  let length = window.prompt("Enter a password length between 8 and 128")
  if (length > 128 || length <8) {
    window.alert("that is not within the range length, please try again");
    return;
  }
  var uppercase = confirm("Would you like to use uppercase letters? Press confirm for yes, and cancel for no");
  var lowercase = confirm("Would you like to use lowercase letters? Press confirm for yes, and cancel for no");
  var symbols = confirm("Would you like to use symbols? Press confirm for yes, and cancel for no");
  var numbers = confirm("Would you like to use uppercase letters? Press confirm for yes, and cancel for no");

  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var special ="!@#$%^&*()?.<>\|=+:;,[-_]";
  var numerics = "1234567890"
  var combined = [];

if (uppercase === false && lowercase === false && symbols === false && numbers === false) {
  window.alert("you need at least one character type for your password, please try again");
return;
}

if (uppercase === true) {combined += upper};
if (lower === true) {combined += lower};
if (symbols === true) {combined += special};
if (numbers === true) {combined += numerics};

let pass = ""
for (let x = 0; x < length; x++) {
  let rng =[Math.floor(Math.random() * combined.length)];
  pass = pass + combined[rng];
}
return pass



  }
  function writePassword(){
  let password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;










}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
