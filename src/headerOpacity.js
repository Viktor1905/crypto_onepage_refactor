const header = document.getElementById('header');

const updateHeaderOpacity = () => {
    const scrollOpacity = window.scrollY > 50 ? 0.35 : 1;
    header.style.opacity = scrollOpacity;
};

window.addEventListener('scroll', updateHeaderOpacity);

header.addEventListener('mouseover', () => header.style.opacity = 1);
header.addEventListener('mouseout', () => {
    header.style.opacity = window.scrollY > 50 ? 0.35 : 1;
});

updateHeaderOpacity();