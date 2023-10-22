// DOM Elements
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const submit = document.querySelector('#submit');

// Navigation Functionality
function performAction(action) {
    switch(action) {
        case 'home': location.href = 'index.html'; break;
        case 'about': location.href = 'about.html'; break;
        case 'condition': location.href = 'condition.html'; break;
        case 'supplements': location.href = 'supplements.html'; break;
        case 'contact': location.href = 'contact.html'; break;
        default: console.error(`Unknown action: ${action}`);
    }
}

function navigateToLogin() {
    window.location.href = '../login/login.html';
}

// Subscribe Button Click Event Listener
document.querySelector('.subscribe button').addEventListener('click', function() {
    alert('Subscribe Button Clicked!');
});
