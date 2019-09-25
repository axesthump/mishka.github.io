var back = document.querySelector('.reviews__btn--back');
var forward = document.querySelector('.reviews__btn--forward');
var first = document.querySelector('.reviews__item--1');
var second = document.querySelector('.reviews__item--2');
var third = document.querySelector('.reviews__item--3');

back.addEventListener('click', function(e) {
	e.preventDefault();
	if (third.classList.contains('active')) {
		third.classList.remove('active');
		second.classList.add('active');
	}else if (second.classList.contains('active')) {
		second.classList.remove('active');
		first.classList.add('active');
	}else if (first.classList.contains('active')) {
		first.classList.remove('active');
		third.classList.add('active');
	}
})

forward.addEventListener('click', function(e) {
	e.preventDefault();
	if (third.classList.contains('active')) {
		third.classList.remove('active');
		first.classList.add('active');
	} else if (second.classList.contains('active')) {  
		second.classList.remove('active');
		third.classList.add('active');
	} else if (first.classList.contains('active')) {
		first.classList.remove('active');
		second.classList.add('active');
	}
})