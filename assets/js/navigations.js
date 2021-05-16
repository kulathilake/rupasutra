var toggle = document.getElementById('nav-toggle');
var icon = document.getElementById('nav-toggle-icon');
var navItems = document.getElementById('nav-items');

toggle.onclick = toggleHandler;

function toggleHandler(){
    // toggle.classList.toggle('animate__rotateOut');
    toggle.classList.toggle('animate__rotateIn');
    // icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-window-close')

    if(navItems.style.display==='none'){
        navItems.style.display = 'flex'
        navItems.classList.add('navigation-mobile');
        navItems.style.height = '100vh'
    } else {
        navItems.style.display = 'none';
        navItems.classList.remove('navigation-mobile');
        navItems.style.height = '0vh'
    }
};