let submitBtn = document.querySelector(".email-btn").addEventListener("click", emailValidator);
let inputEmail = document.querySelector(".input-email");
let emailvalidatorText = document.querySelector(".email-validation");
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


function emailValidator() {
  let currentEmail = inputEmail.value;
  if (currentEmail !== '') {
    if (emailRegex.test(currentEmail)) {
      successCall();
    } else {
      failureCall();
    }
  }
  else{
    failureCall();
  }
}

function successCall() {
  emailvalidatorText.textContent = "Successfully registered";
  emailvalidatorText.style.color = "green"; // Assuming success color is green
}

function failureCall() {
  emailvalidatorText.textContent = "Invalid email";
  emailvalidatorText.style.color = "red";
  inputEmail.style.border = "1.5px solid red";
}


let submitBtnTwo = document.querySelector(".email-btn-2").addEventListener("click", emailValidatorOne);
let inputEmailTwo = document.querySelector(".input-email-2");
let emailvalidatorTextTwo = document.querySelector(".emailvalid-2");


function emailValidatorOne() {
  let inputEmailValue = inputEmailTwo.value;
  console.log(inputEmailValue)
  if (inputEmailValue !== '') {
    if (emailRegex.test(inputEmailValue)) {
      successCallTwo();
    } else {
      failureCallTwo();
    }
  }
  else{
    failureCallTwo();
  }
}

function successCallTwo() {
  emailvalidatorTextTwo.textContent = "Successfully registered";
  emailvalidatorTextTwo.style.color = "white";
  inputEmailTwo.style.border = "1.5px solid green";
}

function failureCallTwo() {
  emailvalidatorTextTwo.textContent = "Invalid email";
  emailvalidatorTextTwo.style.color = "red";
  inputEmailTwo.style.border = "1.5px solid red";

}