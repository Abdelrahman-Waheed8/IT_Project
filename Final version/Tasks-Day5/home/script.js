
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
    let morebtn = document.querySelector('.more-btn');
    let footer = document.querySelector('.foot-container');

    let hasResults = false;

    noResultsMsg.style.display = "none";
    footer.style.display = "block";
    morebtn.style.display = "block";

    if (searchTerm === '') {
        books.forEach(book => {
            book.style.display = "";
        });
        return;
    }

    books.forEach(book => {
        let bookName = book.querySelector('#Name').textContent.toUpperCase();
        let authorName = book.querySelector('#NameWriter').textContent.toUpperCase();

        if (bookName.includes(searchTerm) || authorName.includes(searchTerm)) {
            book.style.display = "";
            morebtn.style.display = "none";
            hasResults = true;
        } else {
            book.style.display = "none";
        }
    });

    if (!hasResults) {
        noResultsMsg.style.display = "block";
        footer.style.display = "none";
        morebtn.style.display = "none";
    }
}
