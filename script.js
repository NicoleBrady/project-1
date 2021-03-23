// Grab HTML elements

const burger = document.querySelector('.burger i');

const MainNav = document.querySelector('.mainNav');

const logo = document.querySelector('.logo');

const NavRight = document.querySelector('.navRight')

// Function

function toggleMainNav() {
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    MainNav.classList.toggle('mainNavActive');
    NavRight.appendChild(logo);
}

// Click event and calling function

burger.addEventListener('click', function() {
    toggleMainNav();
});

function newFunction() {
    console.log(toggleMainNav);
}
