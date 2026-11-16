// The three workhorses from the contact-form example:

// 1) NAME — letters and whitespace only
var regex = /^[a-zA-Z\s]+$/;
if (regex.test(name) === false) {
  printError("nameErr", "Please enter a valid name");
}

// 2) EMAIL — something@something.something
var regex = /^\S+@\S+\.\S+$/;
if (regex.test(email) === false) {
  printError("emailErr", "Please enter a valid email address");
}

// 3) MOBILE — exactly 10 digits, first digit 1–9
var regex = /^[1-9]\d{9}$/;
if (regex.test(mobile) === false) {
  printError("mobileErr", "Please enter a valid 10 digit mobile number");
}