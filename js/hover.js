var hovers = document.querySelectorAll('.form__label-name');

document.addEventListener('mouseover', function(e) {
	hovers.forEach( function(elem) {
		if (elem == e.target) {
			var circle = elem.previousSibling.previousSibling;
			circle.style.border = '2px solid #62d1ba';
		}
	})
})

document.addEventListener('mouseout', function(e) {
	hovers.forEach( function(elem) {
		if (elem == e.target) {
			var circle = elem.previousSibling.previousSibling;
			circle.style.border = '2px solid #000';
		}
	})
})

