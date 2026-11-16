// Reading the browser's verdict on one field
const input = document.querySelector('#email');
const form = input.form;
input.setCustomValidity('');

if (input.validity.valueMissing) {
  input.setCustomValidity('We need your email to reply.');
} else if (input.validity.typeMismatch) {
  input.setCustomValidity('Try a format like name@example.com.');
} else {
  input.setCustomValidity('');   // clear any previous message
}

// Run the whole form's checks on demand (returns true/false,
// and fires invalid events on every failing control):
if (form.checkValidity()) {
  // declared checks pass; a real server must still validate
}