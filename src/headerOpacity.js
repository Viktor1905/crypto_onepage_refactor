const header = document.getElementById('header');
const mobileMenu = document.getElementById('mobile-menu');

const updateHeaderOpacity = () => {
    if(!mobileMenu.classList.contains('hidden')) return
    header.style.opacity = window.scrollY > 50 ? 0.35 : 1;
};

window.addEventListener('scroll', updateHeaderOpacity);

header.addEventListener('mouseover', () => header.style.opacity = 1);
header.addEventListener('mouseout', () => {
    header.style.opacity = window.scrollY > 50 ? 0.35 : 1;
});

updateHeaderOpacity();