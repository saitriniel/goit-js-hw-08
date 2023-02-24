import throttle from "lodash.throttle";

let formData = {};
const FEEDBACK_KEY = "feedback-form-state";
const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
}

refreshedFormInput();

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);


function onFormSubmit (e) {
    e.preventDefault();

    console.log(localStorage.getItem(FEEDBACK_KEY));    
    e.currentTarget.reset();
    localStorage.removeItem(FEEDBACK_KEY);
};

function onFormInput (e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
}

function refreshedFormInput () {
    const currentFormData = localStorage.getItem(FEEDBACK_KEY);
    const parsedData = JSON.parse(localStorage.getItem(FEEDBACK_KEY));

    if (currentFormData) {
        try {
            console.log(currentFormData)
            refs.input.value = parsedData.email || '';
            refs.textarea.value = parsedData.message || '';
           formData.email = parsedData.email;
           formData.message = parsedData.message;
          } catch (error) {
            console.log(error);
        }
    }
}