let hamburgerMenu = document.getElementById("hamlogo");

hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.innerHTML = hamburgerMenu.innerHTML === 'menu' ? 'close' :'menu';
})
    
function classToggle() {
    let navs = document.querySelectorAll('.nav-items')
    let brndText = document.querySelectorAll('.brand-title')
    let mainContentTxt = document.querySelectorAll('.main-Content')
    
    navs.forEach(nav => nav.classList.toggle('navbar-ToggleShow'));
    mainContentTxt.forEach(mainContentTxt => mainContentTxt.classList.toggle('brand-title-toggle'));
    brndText.forEach(brndText => brndText.classList.toggle('brand-title-toggle'));
}
document.querySelector('.nav-link-toggle')
.addEventListener('click', classToggle);