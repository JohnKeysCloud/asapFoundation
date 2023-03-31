const navBurger = document.getElementById('nav-btn');
const nav = document.querySelector('dialog');
const navLinks = document.querySelectorAll('.nav-link');


for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', () => {
        nav.close();
        navBurger.classList.toggle('is-active');
    });
}


navBurger.addEventListener('click', () => {
    nav.showModal();
    navBurger.classList.toggle('is-active');
});
