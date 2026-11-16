const email = document.querySelector('#email');
const error = document.querySelector('#email-error');
const form = email.form;
let flagged = false;                     // has this field failed before?

function validateEmail() {
  const ok = /^\S+@\S+\.\S+$/.test(email.value);   // Module 7 regex
  error.classList.toggle('show', !ok);
  email.classList.toggle('invalid', !ok);
  email.setAttribute('aria-invalid', String(!ok));
  return ok;
}

email.addEventListener('blur', () => {          // user left the field:
  flagged = true;                              // now it's fair to judge
  validateEmail();
});

email.addEventListener('input', () => {         // every keystroke:
  if (flagged) validateEmail();                 // re-validate ONLY if
});                                             // already flagged —
                                                // errors clear the
// FINAL GATE — never skip this one:            // instant they're fixed
form.addEventListener('submit', (e) => {
  e.preventDefault();                         // practice only: never navigate
  flagged = true;
  validateEmail();
});