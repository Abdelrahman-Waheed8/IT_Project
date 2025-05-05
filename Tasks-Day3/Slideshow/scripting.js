document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.book-content');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const pageBtns = document.querySelectorAll('.page-btn');

    function updateButtons() {
        // تحديث زر Previous
        prevBtn.disabled = currentSlide === 0;
        
        // تحديث زر Next
        nextBtn.disabled = currentSlide === slides.length - 1;
        
        // تحديث أزرار الترقيم
        pageBtns.forEach((btn, index) => {
            if (index === currentSlide) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    function showSlide(index) {
        // إخفاء جميع الشرائح
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // عرض الشريحة المطلوبة
        slides[index].classList.add('active');
        currentSlide = index;
        
        // تحديث حالة الأزرار
        updateButtons();
    }

    function nextSlide() {
        if (currentSlide < slides.length - 1) {
            showSlide(currentSlide + 1);
        }
    }

    function prevSlide() {
        if (currentSlide > 0) {
            showSlide(currentSlide - 1);
        }
    }

    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // إضافة event listeners لأزرار الترقيم
    pageBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            showSlide(index);
        });
    });

    // عرض الشريحة الأولى وتحديث الأزرار
    showSlide(0);
});