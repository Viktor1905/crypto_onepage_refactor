const header = document.getElementById('header');
const mobileMenuOpacity = document.getElementById('mobile-menu');
console.log(header)
const updateHeaderOpacity = () => {
    if(!mobileMenuOpacity.classList.contains('hidden')) return
    header.style.opacity = window.scrollY > 50 ? 0.35 : 1;
};

window.addEventListener('scroll', updateHeaderOpacity);

header.addEventListener('mouseover', () => header.style.opacity = 1);
header.addEventListener('mouseout', () => {
    header.style.opacity = window.scrollY > 50 ? 0.35 : 1;
});

updateHeaderOpacity();