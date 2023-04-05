const navBurger = document.getElementById('nav-btn');
const nav = document.querySelector('dialog');
const navLinks = document.querySelectorAll('.nav-link');
const donateQRBtn = document.getElementById('qr-code-wrapper');

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', () => {
        nav.close();
        navBurger.classList.toggle('is-active');
    });
}

function toggleQRCode() {
    donateQRBtn.classList.toggle('is-active');
}

donateQRBtn.addEventListener('click', toggleQRCode);

navBurger.addEventListener('click', () => {
    navBurger.classList.toggle('is-active');
    navBurger.classList.contains('is-active')
        ? (nav.show(), navBurger.setAttribute('aria-label', 'Close Navigation'))
        : (nav.close(), navBurger.setAttribute('aria-label', 'Open Navigation')); 
});