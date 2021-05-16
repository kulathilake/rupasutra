var toggle = document.getElementById('nav-toggle');
var icon = document.getElementById('nav-toggle-icon');
var navItems = document.querySelector('.navigation ul');

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    console.log(navItems.style);
});

toggle.onclick = toggleHandler;

function toggleHandler(){;
    toggle.classList.toggle('animate__rotateIn');
    icon.classList.toggle('fa-window-close')
    navItems.classList.toggle('animate__fadeIn')
    navItems.classList.toggle('animate__fadeOut')
    if(navItems.style.height==='0vh' || navItems.style.height===''){
        navItems.style.display = 'flex'
        navItems.style.height = '100vh'
        navItems.classList.add('navigation-mobile');
        navItems.classList.add('animate__fadeIn')
        navItems.classList.remove('animate__fadeOut')
    } else {
        navItems.style.height = '0vh';
        navItems.classList.remove('animate__fadeIn')
        navItems.classList.add('animate__fadeOut')
        
    }
};