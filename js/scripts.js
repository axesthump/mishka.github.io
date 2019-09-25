/*Меню*/
var toggle = document.querySelector('.page-header__toggle');
var mainNav = document.querySelector('.page-header__nav');
var userNav = document.querySelector('.page-header__user-nav');

toggle.addEventListener('click', function(e) {
	e.preventDefault();
	if (mainNav.classList.contains('active')) {
		mainNav.classList.remove('active');
		userNav.classList.remove('active');
	} else {
		mainNav.classList.add('active');
		userNav.classList.add('active');
	}
})



