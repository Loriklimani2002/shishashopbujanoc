document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));
    }

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert('Thank you for subscribing! We\'ll keep you updated on new flavors and offers.');
            this.reset();
        });
    }

    // Load products based on current page
    function loadProducts() {
        const productsContainer = document.querySelector('.products-container');
        if (!productsContainer) return;

        // Dummy data for example
        const products = [
            { name: "Chocolate Delight", price: "$4.99", img: "chocolate.jpg" },
            { name: "Vanilla Swirl", price: "$3.99", img: "vanilla.jpg" },
            { name: "Strawberry Dream", price: "$4.49", img: "strawberry.jpg" },
        ];

        products.forEach(product => {
            const productEl = document.createElement('div');
            productEl.classList.add('product');
            productEl.innerHTML = `
                <img src="images/${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
            `;
            productsContainer.appendChild(productEl);
        });
    }

    loadProducts();

    // Language switcher
    function setLanguage(lang) {
        const elements = document.querySelectorAll('.lang');
        elements.forEach(el => {
            el.style.display = (el.dataset.lang === lang) ? 'inline' : 'none';
        });
        localStorage.setItem('preferredLanguage', lang);
    }

    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(savedLang);

    // Optional: you can add language switch buttons event listeners here
});
