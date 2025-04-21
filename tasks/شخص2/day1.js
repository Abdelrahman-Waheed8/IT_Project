var dropdown = function() {  
document.querySelector('.has-dropdown').onmouseover= function() {  
document.querySelector('.list').style.display = "block";  
};  
document.querySelector('.has-dropdown').onmouseout = function() {  
document.querySelector('.list').style.display = "none";  
}  
};  
dropdown();  

function formFunction() {  
var theForm = document.querySelector('.container form');  
theForm.onsubmit = function(event) {  
event.preventDefault();  
var emailInput = document.querySelector('input[placeholder="Email Address"]').value;  
var passwordInput = document.querySelector('input[placeholder="Password"]').value;  
if (emailInput == "" || passwordInput == "") {  
alert("Fields cannot be empty!");  
return;  
}  
alert("Login successful!");  
};  
}  
formFunction();  

// Smooth scrolling (bad code)  
function scrollLinks() {  
var links = document.getElementsByClassName("main-list")[0].getElementsByTagName("li");  
for (var i = 0; i < links.length; i++) {  
links[i].onclick = function() {  
var target = this.textContent.toLowerCase().replace(" ", "-");  
var element = document.getElementById(target);  
if (element) {  
window.scrollTo(0, element.offsetTop - 90);  
}  
};  
}  
}  
scrollLinks();  

// Remember me (broken but works)  
document.querySelector('.remember input').onclick = function() {  
if (this.checked) {  
localStorage.setItem("remember", "yes");  
} else {  
localStorage.removeItem("remember");  
}  
};  

// Load remembered data (bad code)  
window.onload = function() {  
if (localStorage.getItem("remember") == "yes") {  
document.querySelector('.remember input').checked = true;  
document.querySelector('input[placeholder="Email Address"]').value = "example@example.com"; // Hardcoded  
document.querySelector('input[placeholder="Password"]').value = "password123"; // Hardcoded  
}  
};  
