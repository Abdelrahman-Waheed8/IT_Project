var form=document.getElementById('form');
var user_name=document.getElementById('email');
var user_pass=document.getElementById('password');

form.addEventListener('submit',function(a){
a.preventDefault();
var stored_name=localStorage.getItem('name');
var stored_pass=localStorage.getItem('pass');

if(user_name.value && user_pass.value){
if(user_name.value===stored_name && user_pass.value===stored_pass){
alert('تم تسجيل الدخول بنجاح');
window.location.href='../home/index.html';
}else{
alert('كلمة المرور غير مطابقة');
}
}else{
alert('البريد الالكتروني مطلوب');
}
});

const setSuccess = element => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector('.error');

	errorDisplay.innerText = '';
	inputControl.classList.add('success');
	inputControl.classList.remove('error');
};

const setError = (element , message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const validateInputs = () => {
    const emailValue = user_name.value.trim();
    const passwordValue = user_pass.value.trim();
    let isValid = true;

    if (emailValue === '') {
        setError(user_name, 'البريد الالكتروني مطلوب');
        isValid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(user_name, 'ادخل بريد الكتروني صحيح ');
        isValid = false;
    } else {
        setSuccess(user_name);
    }

    if (passwordValue === '') {
        setError(user_pass, 'كلمة المرور مطلوبه ');
        isValid = false;
    } else if (passwordValue.length < 8) {
        setError(user_pass, 'يجب ان تكون كلمة المرور اكثر من 8 احرف ');
        isValid = false;
    } else {
        setSuccess(user_pass);
    }

    if (isValid) {
        window.location.href = "../home/index.html";
    }
};


