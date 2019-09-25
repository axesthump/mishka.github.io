var btn = document.querySelector('.popup-btn');
var popup = document.querySelector('.modal');
var modal = document.querySelector('.modal-add');

btn.addEventListener('click', function(e) {
	e.preventDefault();
	popup.classList.add('active-popup');
})

document.addEventListener('click', function(e) {
  if (e.target.classList.value === 'modal active-popup') {
    popup.classList.remove('active-popup');
  }
})
