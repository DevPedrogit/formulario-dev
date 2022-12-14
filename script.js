function invalidatedName () {
    let validateInputName = document.querySelector('#name');
    validateInputName.style.borderBottom = '2px solid red';

    let spanValidate = document.querySelector('.spanValidateName');
    spanValidate.style.display = 'block';

}
function validateName () {
    let validateInputName = document.querySelector('#name');
    validateInputName.style.borderBottom = '2px solid black';

    let spanValidate = document.querySelector('.spanValidateName');
    spanValidate.style.display = 'none';
}

function validationName () {
    let inputName = document.querySelector('#name').value;
    
    if (inputName.length < 3) {
        invalidatedName();
    } else {
        validateName();
    }
}

// Validation email

function invalidatedEmail () {
    let validateInputEmail = document.querySelector('#email');
        validateInputEmail.style.borderBottom = '2px solid red';

    let spanValidateEmail = document.querySelector('.spanValidateEmail');
    spanValidateEmail.style.display = 'block';
}
function validateEmail () {
    let validateInputEmail = document.querySelector('#email');
        validateInputEmail.style.borderBottom = '2px solid black';

    let spanValidateEmail = document.querySelector('.spanValidateEmail');
    spanValidateEmail.style.display = 'none';
}

function validationEmail () {
    let inputEmail = document.querySelector('#email').value;
    const emailRegex = /\S+@\S+\.\S+/;

     if (!emailRegex.test(inputEmail)) {
        invalidatedEmail();
     } else {
        validateEmail();
     }
  };
