var form=document.getElementById('form');
var user_name=document.getElementById('email');
var user_pass=document.getElementById('password');
var confirm_pass=document.getElementById('password2');

form.addEventListener('submit',function(a){
	a.preventDefault();
	if(user_name.value && user_pass.value && confirm_pass.value){
		if(user_pass.value===confirm_pass.value){
			if(user_pass.value.length>=8){
				localStorage.setItem('name',user_name.value);
				localStorage.setItem('pass',user_pass.value);
				alert('تم التسجيل بنجاح');
				window.location.href='login.html';
			}else{
				alert('يجب ان تكون كلمة المرور اكثر من 8 احرف');
			}
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

const setError = (element, message) => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector('.error');

	errorDisplay.innerText = message;
	inputControl.classList.add('error');
	inputControl.classList.remove('success');
}

const validateInputs = () => {
	const emailValue = user_name.value.trim();
	const passwordValue = user_pass.value.trim();
	const passwordValue2 = confirm_pass.value.trim();
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

	if (passwordValue2 === '') {
		setError(confirm_pass, 'الرجاء تأكيد كلمة المرور الخاصه بك');
		isValid = false;
	} else if (passwordValue2 !== passwordValue) {
		setError(confirm_pass, 'كلمة المرور غير مطابقة ');
		isValid = false;
	} else {
		setSuccess(confirm_pass);
	}

	if (isValid) {
		window.location.href = "../home/index.html";
	}
};


