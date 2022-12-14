function invalidated () {
    let validateInputName = document.querySelector('#name');
    validateInputName.style.borderBottom = '2px solid red';

    let spanValidate = document.querySelector('.spanValidate');
    spanValidate.style.display = 'block';
}

function validate () {
    let validateInputName = document.querySelector('#name');
    validateInputName.style.borderBottom = '2px solid black';

    let spanValidate = document.querySelector('.spanValidate');
    spanValidate.style.display = 'none';
}


function validation () {
    let inputName = document.getElementById('name').value;
    
    if (inputName.length < 3) {
        invalidated();
    } else {
        validate();
    }
}