const tname = document.getElementById('tname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const from = document.getElementById('from');
const to = document.getElementById('to');
const date = document.getElementById('date');
const list = document.getElementById('list');
let validEmail = false;
let validPhone = false;
let validlist = false;
let Validdate = false;
let validtname = false;
let validfrom = false;
let validto = false;
$('#failure').hide();
$('#success').hide();
// console.log(email,tname,phone,from,to)
tname.addEventListener('blur', () => {
    // console.log("name is blurred");
    // Validate name here
    let regex = /([0-9a-zA-Z])/;
    let str = tname.value;
    // console.log(regex, str);
    if (regex.test(str)) {
        // console.log('Your name is valid');
        tname.classList.remove('is-invalid');
        validtname = true;
    }
    else {
        // console.log('Your name is not valid');
        tname.classList.add('is-invalid');
        validtname = false;

    }
})
date.addEventListener('blur', () => {
    // console.log("name is blurred");
    // Validate name here
    let regex = /([0-9a-zA-Z]+)([_\-])/;
    let str = date.value;
    // console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your date is valid');
        date.classList.remove('is-invalid');
        Validdate = true;
    }
    else {
        // console.log('Your name is not valid');
        date.classList.add('is-invalid');
        Validdate = false;

    }
})
list.addEventListener('blur', () => {
    // console.log("name is blurred");
    // Validate name here
    let regex = /([0-9a-zA-Z]+)([a-zA-Z]+)/;
    let str = list.value;
    // console.log(regex, str);
    if (regex.test(str)) {
        // console.log('Your name is valid');
        list.classList.remove('is-invalid');
        validlist = true;
    }
    else {
        // console.log('Your name is not valid');
        list.classList.add('is-invalid');
        validlist = false;

    }
})
email.addEventListener('blur', () => {
    // console.log('email is blured')
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    // console.log(regex,str)
    if (regex.test(str)) {
        // console.log('your email is valid')
        email.classList.remove('is-invalid');
        validEmail = true;
    } else {
        // console.log('email is not valid')
        email.classList.add('is-invalid');
        validEmail = false;
    }

})
from.addEventListener('blur', () => {
    // console.log("name is blurred");
    // Validate name here
    let regex = /([a-zA-Z]){2,10}$/;
    let str = from.value;
    // console.log(regex, str);
    if (regex.test(str)) {
        // console.log('Your name is valid');
        from.classList.remove('is-invalid');
        validfrom = true;
    }
    else {
        // console.log('Your name is not valid');
        from.classList.add('is-invalid');
        validfrom = false;

    }
})
to.addEventListener('blur', () => {
    // console.log("name is blurred");
    // Validate name here
    let regex = /([a-zA-Z]){2,10}$/;
    let str = from.value;
    // console.log(regex, str);
    if (regex.test(str)) {
        // console.log('Your name is valid');
        to.classList.remove('is-invalid');
        validto = true;
    }
    else {
        // console.log('Your name is not valid');
        to.classList.add('is-invalid');
        validto = false;

    }
})
phone.addEventListener('blur', () => {
    // console.log("phone is blurred");
    // Validate phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    // console.log(regex, str);
    if (regex.test(str)) {
        // console.log('Your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        // console.log('Your phone is not valid');
        phone.classList.add('is-invalid');
        validPhone = false;

    }
})
let submit = document.getElementById('submit')
submit.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log('you clicked submit')
    // console.log(validEmail,validtname,validfrom,validto,validPhone)
    if (validEmail && validtname && Validdate && validlist && validfrom && validto && validPhone) {
        // let failure = document.getElementById('failure');
        // console.log('phone ,email tname,from,to are valid. Submitting the from');
        let success = document.getElementById('success')
        success.classList.add('show');
        $('#failure').hide()
        $('#success').show()
        setTimeout(() => {
            let success = document.getElementById('success').remove();

        }, 4000);





    } else {
        // console.log('one of phone , email or train name are not valid. Hence not submitting the form. Please correct the errors and try again ');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        $('#failure').show();
        $('#success').hide();
        setTimeout(() => {
            let failure = document.getElementById('failure').remove();
        }, 4000);
    }

})