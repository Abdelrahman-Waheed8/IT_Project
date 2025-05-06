const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');


document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const emailValue = document.getElementById('email').value;
    const passwordValue = document.getElementById('password').value;

    localStorage.setItem('userEmail', emailValue);
    localStorage.setItem('userPassword', passwordValue);

    window.location.href = '../home/index.html';
});

const setSuccess = element => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector('.error');

	errorDisplay.innerText = '';
	inputControl.classList.add('success');
	inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const setError = (element , message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const validateInputs = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    let isValid = true;

    if (emailValue === '') {
        setError(email, 'البريد الالكتروني مطلوب');
        isValid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'ادخل بريد الكتروني صحيح ');
        isValid = false;
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'كلمة المرور مطلوبه ');
        isValid = false;
    } else if (passwordValue.length < 8) {
        setError(password, 'يجب ان تكون كلمة المرور اكثر من 8 احرف ');
        isValid = false;
    } else {
        setSuccess(password);
    }

    if (isValid) {
        window.location.href = "../home/index.html";
    }
};


