     // Mobile Menu Toggle
     document.querySelector('.menu-btn').addEventListener('click', function() {
        document.querySelector('.menu').classList.toggle('active');
    });
   
    // Accordion
    document.querySelectorAll('.accordion-header').forEach(button => {
        button.addEventListener('click', () => {
            const accordionItem = button.parentNode;
            accordionItem.classList.toggle('active');
        });
    });