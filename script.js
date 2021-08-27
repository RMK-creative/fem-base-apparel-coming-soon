const errorMsg = document.querySelector(".form-error");
const successMsg = document.querySelector(".form-success");
const errorIcon = document.querySelector(".form-error-icon");
const input = document.querySelector(".form-input");
const submit = document.querySelector(".btn");

const validateForm = (e) => {
  e.preventDefault();
  const emailRegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  errorMsg.classList.remove("active");
  errorIcon.classList.remove("active");
  successMsg.classList.remove("active");

  if (!emailRegExp.test(input.value)) {
    errorMsg.classList.add("active");
    errorIcon.classList.add("active");
  } else {
    successMsg.classList.add("active");
    input.value = "";
  }
};

function clearInput() {
  input.value = "";
  errorMsg.classList.remove("active");
  errorIcon.classList.remove("active");
  successMsg.classList.remove("active");
}

input.addEventListener("click", clearInput);
submit.addEventListener("click", validateForm);
