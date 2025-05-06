document.addEventListener('DOMContentLoaded', function () {
    const email = localStorage.getItem('userEmail');
    const password = localStorage.getItem('userPassword');

    const userEmailElement = document.querySelector('.userEmail');
    const userPasswordElement = document.querySelector('.userPassword');
    const togglePasswordButton = document.getElementById('togglePassword');

    userEmailElement.textContent = email || 'لا يوجد بريد الكتروني لديك';
    userPasswordElement.textContent = '********';

    togglePasswordButton.addEventListener('click', function () {
        if (userPasswordElement.textContent === '********') {
            userPasswordElement.textContent = password; 
            togglePasswordButton.textContent = 'إخفاء';
        } else {
            userPasswordElement.textContent = '********';
            togglePasswordButton.textContent = 'عرض'; 
        }
    });
});
