document.addEventListener('DOMContentLoaded', function () {
    const email = localStorage.getItem('name');
    const password = localStorage.getItem('pass');

    const userEmailElement = document.querySelector('.userEmail');
    const userPasswordElement = document.querySelector('.userPassword');
    const togglePasswordButton = document.getElementById('togglePassword');
    const logoutButton = document.getElementById('logoutButton');

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

    logoutButton.addEventListener('click', function() {
        // Clear user data from localStorage
        localStorage.removeItem('name');
        localStorage.removeItem('pass');
        
        // Redirect to login page
        window.location.href = '../login/login.html';
    });
});
