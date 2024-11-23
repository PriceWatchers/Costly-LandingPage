document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.navbar a, .btn').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const facebookLink = document.getElementById('facebook');
const twitterLink = document.getElementById('twitter');
const linkedinLink = document.getElementById('linkedin');
const appStoreLink = document.getElementById('appStore');
const googlePlayLink = document.getElementById('googlePlay');

facebookLink.addEventListener('click', () => {
    window.location.href = 'https://www.facebook.com/'; // Cambia la URL por la del perfil de Facebook
});
    
twitterLink.addEventListener('click', () => {
    window.location.href = 'https://twitter.com/'; // Cambia la URL por la del perfil de Twitter
});
  
linkedinLink.addEventListener('click', () => {
    window.location.href = 'https://linkedin.com/'; // Cambia la URL por la del perfil de Twitter
});
  
appStoreLink.addEventListener('click', () => {
    window.location.href = 'https://tiktok.com/'; // Cambia la URL por la del perfil de Twitter
});

googlePlayLink.addEventListener('click', () => {
    window.location.href = 'https://www.instagram.com/'; // Cambia la URL por la del perfil de Instagram
});
