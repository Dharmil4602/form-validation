console.log(`Hello`);

const name = document.getElementById(`name`);
const email = document.getElementById(`email`);
const phone = document.getElementById(`phone`);
let validName = false;
let validPhone = false;
let validEmail = false;

name.addEventListener(`blur`, () => {
    // console.log(`Name Is Blurred`);

    // Validate Name Here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){0,10}/;
    let str = name.value;
    console.log(regex, str);

    if (regex.test(str)) {
        console.log(`You Entered ${str}`);
        name.classList.remove(`is-invalid`);
        validName = true;
    }
    else {
        console.log(`You Entered Wrong String`);
        name.classList.add(`is-invalid`);
        // validName = false;
    }
})

email.addEventListener(`blur`, () => {
    // console.log(`Email Is Blurred`);
    // Validate Email Here
    let regex = /^([_\.\-0-9a-zA-Z]+)@([_\.\-0-9a-zA-Z]+)\.([a-zA-Z])/;
    let str = email.value;
    console.log(regex, str);

    if (regex.test(str)) {
        console.log(`You Entered ${str}`);
        email.classList.remove(`is-invalid`);
        validEmail = true;
    }
    else {
        console.log(`You Entered Wrong Email`);
        email.classList.add(`is-invalid`);
        // validEmail = false;
    }
})

phone.addEventListener(`blur`, () => {
    // console.log(`Phone Is Blurred`);
    // Validate Phone Here
    let regex = /^([0-9a-zA-Z]){10}/;
    let str = phone.value;
    console.log(regex, str);

    if (regex.test(str)) {
        console.log(`You Entered ${str}`);
        phone.classList.remove(`is-invalid`);
        validPhone = true;
    }
    else {
        console.log(`You Entered Wrong Phone Number`);
        phone.classList.add(`is-invalid`);
        // validPhone = false;
    }
})

let submit = document.getElementById(`submit`);
submit.addEventListener(`click`, (e) => {
    e.preventDefault(); // prevents the reload which is by default

    console.log(`You Clicked Submit`);
    console.log(validName, validEmail, validPhone);

    if (validEmail && validName && validPhone) {
        console.log(`Phone, Name And Email Are Valid. Submitting The Form`);
        let success = document.getElementById(`success`);
        success.classList.add(`show`);
    }
    else {
        console.log(`Something is wrong, please check the form.`);
        let failure = document.getElementById(`failure`);
        failure.classList.add(`show`);
    }
})
