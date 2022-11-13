const header = document.querySelector("header");

window.addEventListener('scroll', function() {
    let scroll = window.scrollY;
    if (scroll > 200) {
        header.style.position = 'sticky';
        header.style.transition = 'all .3s';
        header.style.transform = 'translateY(203px)';
        header.style.top = '-203px';
    } else {
        header.style.position = 'static';
        header.style.transition = 'all .5s';
        header.style.transform = 'translateY(0)';
        header.style.top = '0';
    }
});

function myToggle() {

    let menu = document.getElementById("menu");
    
    menu.classList.toggle("mobile-menu");
}