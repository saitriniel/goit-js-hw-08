import throttle from "lodash.throttle";

let formData = {};
const FEEDBACK_KEY = "feedback-form-state";
const refs = {
    form: document.querySelector('.feedback-form'),
}

refreshedFormInput();

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);


function onFormSubmit (e) {
    e.preventDefault();

    console.log(formData);    
    e.currentTarget.reset();
    localStorage.removeItem(FEEDBACK_KEY);
    formData = {};
};

function onFormInput (e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
}

function refreshedFormInput () {
    const currentFormData = localStorage.getItem(FEEDBACK_KEY);
    
    if (!currentFormData) {
        return
    }
        try {
            formData = JSON.parse(currentFormData);

            Object.entries(formData).forEach(entry => {
                const [key, value] = entry; 
                refs.form[key].value = value;
            });
          } catch (error) {
            console.log(error);
        }
    }