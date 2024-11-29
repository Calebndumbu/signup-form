const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.getElementById("#confirm-password");
const submit = document.querySelector("button[type='submit']");
const formContent = document.querySelector(".form-content");
const form = document.querySelector(".form-section form");
const passwordLabel = document.querySelector("label[for='password']");
const inputs = formContent.querySelectorAll("input");

form.addEventListener("submit", (e) => {
  e.preventDefault;

  let valid = true;
  let password = "";
  let confirmPassword = "";

  [...inputs].forEach((input) => {
    if (!input.checkValidity()) {
      valid = false;
      input.classList.add("invalid");
    } else {
      if (input.id === "password") {
        password = input.value;
      }
      if (input.id === "confrim-passwprd") {
        confirmPassword = input.value;
      }

      input.classList.remove("invalid");
    }
  });

  if (
    password !== "" &&
    confirmPassword !== " " &&
    password === confirmPassword
  ) {
    passwordLabel.classList.remove("password-error");
    passwordInput.classList.remove("invalid");
    confirmPasswordInput.classList.remove("invalid");
  } else {
    valid = false;

    passwordLabel.classList.add("password-error");
    passwordInput.classList.add("invalid");
    confirmPasswordInput.classList.add("invalid");
  }

  if (valid) {
    form.submit();
  }
});
