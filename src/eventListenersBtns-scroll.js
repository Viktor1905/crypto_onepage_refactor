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
    const currentScrollPosition = window.scrollY || document.documentElement.scrollTop;
    const homeSection = document.getElementById('home');
    const programsSection = document.getElementById('programs');
    const forWhomSection = document.getElementById('for-whom');
    const aboutSection = document.getElementById('about');

    const homeLink = document.getElementById('home-link');
    const programsLink = document.getElementById('programs-link');
    const forWhomLink = document.getElementById('for-whom-link');
    const aboutLink = document.getElementById('about-link');

    const homeSectionScroll = homeSection.getBoundingClientRect().top + currentScrollPosition
    const programsSectionScroll = programsSection.getBoundingClientRect().top + currentScrollPosition
    const forWhomSectionScroll = forWhomSection.getBoundingClientRect().top + currentScrollPosition
    const aboutSectionScroll = aboutSection.getBoundingClientRect().top + currentScrollPosition

    let activeLink = document.querySelector('.nav-hover');
    if(mobileMenu.classList.contains('hidden')) {
        if(currentScrollPosition < programsSectionScroll) {
            if(activeLink) activeLink.classList.remove('nav-hover');
            homeLink.classList.add('nav-hover');
            activeLink = homeLink
        } else if(currentScrollPosition > programsSectionScroll && currentScrollPosition < forWhomSectionScroll) {
            if(activeLink) activeLink.classList.remove('nav-hover');
            programsLink.classList.add('nav-hover');
            activeLink = programsLink
        } else if(currentScrollPosition > forWhomSectionScroll && currentScrollPosition < aboutSectionScroll) {
            if(activeLink) activeLink.classList.remove('nav-hover');
            forWhomLink.classList.add('nav-hover');
            activeLink = forWhomLink
        } else {
            if(activeLink) activeLink.classList.remove('nav-hover');
            aboutLink.classList.add('nav-hover');
            activeLink = aboutLink
        }
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