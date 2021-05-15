var toggle = document.getElementById('nav-toggle');
var closer = document.getElementById('nav-close');
var navItems = document.getElementById('nav-items');

toggle.onclick = toggleHandler;
closer.onclick = toggleHandler;

function toggleHandler(){
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