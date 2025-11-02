const header = document.getElementById('header');
const mobileMenuOpacity = document.getElementById('mobile-menu');
const currentScroll = window.scrollY || document.documentElement.scrollTop;

const updateHeaderOpacity = () => {
    if(!mobileMenuOpacity.classList.contains('hidden')){
        mobileMenuOpacity.style.opacity = currentScroll > 50 ? 0.35 : 1;
    } else {
       header.style.opacity = currentScroll > 50 ? 0.35 : 1
    }
};

window.addEventListener('scroll', updateHeaderOpacity);

header.addEventListener('mouseover', () => {
    if(!mobileMenuOpacity.classList.contains('hidden')){
        mobileMenuOpacity.style.opacity = 1;
    } else {
        header.style.opacity = 1
    }
});
header.addEventListener('mouseout', () => {
    if(!mobileMenuOpacity.classList.contains('hidden')){
        mobileMenuOpacity.style.opacity = currentScroll > 50 ? 0.35 : 1;
    } else {
        header.style.opacity = currentScroll > 50 ? 0.35 : 1
    }
});

updateHeaderOpacity();