// nav on desktops like viummm slime 
const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
	header.classList.toggle ("heads", window.scrollY > 100);
});

/// responsive nav

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');


menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};

var stop = "am siteze tu shexvalt arc araferi! ! ! ! ! ! !  ! !";

console.log(stop);