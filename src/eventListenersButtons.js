const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileBurger = document.getElementById('mobile-left-nav');
const burgerCloseBtn = document.getElementById('burger-close');
mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.remove('hidden');
    document.documentElement.style.overflow = 'hidden';
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    if (burgerCloseBtn.contains(event.target) || event.target.tagName === 'A') {
        mobileMenu.classList.add('hidden');
        document.documentElement.style.overflow = '';
    }
});

// Handle mobile left nav opacity on scroll
let lastScrollPosition = 0;
window.addEventListener('scroll', function() {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    if(!mobileMenu.classList.contains('hidden')) return
    // If scrolled down more than 50px, make it transparent
    if (currentScrollPosition > 50) {
        mobileBurger.style.opacity = '0.15';
    } else {
        mobileBurger.style.opacity = '1';
    }

    lastScrollPosition = currentScrollPosition;
});

// Handle program description toggle
const toggleButtons = document.querySelectorAll('.program-toggle-btn');
toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
        const container = this.parentElement.parentElement;
        const shortDesc = container.querySelector('.program-short-desc');
        const fullDesc = container.querySelector('.program-full-desc');
        // Toggle visibility
        shortDesc.classList.toggle('hidden');
        fullDesc.classList.toggle('hidden');

        // Update button text
        if (fullDesc.classList.contains('hidden')) {
            this.textContent = 'Full Program';
            syncHeights('.program-short-desc');
        } else {
            this.textContent = 'Show Less';
            syncHeights('.program-full-desc:not(.hidden)');
        }
    });
});