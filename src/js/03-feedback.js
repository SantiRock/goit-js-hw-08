import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");

let saveInput = localStorage.getItem("feedback-form-state");
console.log(saveInput);

if (saveInput !== null ) {
    let parceInput = JSON.parse(saveInput);
    form.email.value = parceInput.email;
    form.message.value = parceInput.message;
} else {
    form.email.value = "";
    form.message.value = "";
};

let throFun = throttle (function() {
    const feedbackFormState = {
        email: form.email.value,
        message: form.message.value
    } ;
    localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormState));   
}, 500);

form.addEventListener("input", throFun);

form.addEventListener("submit", (event)=> {
    event.preventDefault();
    /*const {
        elements: { login, password }
      } = event.currentTarget; */
    localStorage.removeItem("feedback-form-state");
    const values = {email: form.email.value, message: form.message.value };
    console.log(values);
    //form.email.value = "";
    //form.message.value = "";
    //event.currentTarget.reset();
    form.reset();
});





