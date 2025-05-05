document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll(".btn");
    
    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const productDiv = e.target.closest("[data-id]");
            const id = productDiv.getAttribute("data-id");
            window.open(`product-pages/product${id}.html`, '_blank');
        });
    });
});

// لما المستخدم يعمل scroll يظهر الزر
window.onscroll = function() {
  let btn = document.getElementById("scrollTop");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// لما يضغط على الزر يرجع لأعلى الصفحة
document.getElementById("scrollTop").onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

function search() {
    let searchTerm = document.querySelector('.input-search').value.toUpperCase();
    let books = document.querySelectorAll('[data-id]');
    let noResultsMsg = document.querySelector('.container-dosent-search');
    
    // إخفاء رسالة عدم وجود نتائج في البداية
    noResultsMsg.style.display = "none";
    
    if (searchTerm === '') {
        books.forEach(book => {
            book.style.display = "";
        });
        return;
    }
    
    let hasResults = false;
    
    books.forEach(book => {
        let bookName = book.querySelector('#Name').textContent.toUpperCase();
        let authorName = book.querySelector('#NameWriter').textContent.toUpperCase();
        
        if (bookName.includes(searchTerm) || authorName.includes(searchTerm)) {
            book.style.display = "";
            hasResults = true;
        } else {
            book.style.display = "none";
        }
    });
    
    // عرض رسالة عدم وجود نتائج إذا لم توجد أي نتائج
    if (!hasResults) {
        noResultsMsg.style.display = "block";
    }
}