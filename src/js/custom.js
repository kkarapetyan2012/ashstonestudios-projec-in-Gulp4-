window.onscroll = function() {myFunction()};

const menu = document.getElementById("menu");

function myFunction() {
   
    if(window.pageYOffset >= 0 && window.pageYOffset < 120) {
      menu.classList.remove("sticky");
      menu.style.transition = 'all 1s';
      menu.style.opacity = 1;
      menu.style.visibility = 'visible';
      menu.style.top = 82;
    } else if (window.pageYOffset >= 120 && window.pageYOffset < 200) {
      menu.classList.remove("sticky");
      menu.style.transition = 'all 1s';
      menu.style.opacity = 0;
      menu.style.visibility = 'hidden';
    } else {
        menu.classList.add("sticky");
        menu.style.transition = 'all 1s';
        menu.style.opacity = 1;
        menu.style.visibility = 'visible';
    } 
}

function myToggle() {    
    menu.classList.toggle("mobile-menu");
}