//menu header
const headerMenu = document.querySelector('.header_menu');
const headerColumn = document.querySelector('.header_column');
const headerButton = document.querySelector('.header_button');

window.addEventListener('resize', function () {
	if (window.innerWidth <= 750) {
		headerMenu.insertAdjacentElement('beforeend', headerColumn);
		headerMenu.insertAdjacentElement('beforeend', headerButton);
	}
	else {
		headerMenu.insertAdjacentElement('afterend', headerButton);
		headerMenu.insertAdjacentElement('afterend', headerColumn);
	}

})
window.addEventListener('DOMContentLoaded', function () {
	if (window.innerWidth <= 750) {
		headerMenu.insertAdjacentElement('beforeend', headerColumn);
		headerMenu.insertAdjacentElement('beforeend', headerButton);
	}
	else {
		headerMenu.insertAdjacentElement('afterend', headerButton);
		headerMenu.insertAdjacentElement('afterend', headerColumn);
	}
})


//header burger
const burger = document.querySelector('.menu_burger');
burger.addEventListener('click', function () {
	this.classList.toggle('active');
	headerMenu.classList.toggle('active');
});

//header scroll
const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
	if (window.scrollY < 1) {
		header.classList.remove('active');
	} else {
		header.classList.add('active');
	}

})

// history parallax
const historyImg = document.querySelector('.history_img');
const historyImage = historyImg.querySelector("img");

historyImg.addEventListener('mousemove', function () {
	if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

		let historyWidth = this.scrollWidth;
		let historyHeight = this.scrollHeight;

		let historyY = (historyHeight / 2) - (event.clientY - this.getBoundingClientRect().top);
		let historyX = (historyWidth / 2) - (event.clientX - this.getBoundingClientRect().left);

		historyImage.style.transform = ` translate(${historyX / 100}%, ${historyY / 100}%) rotate3d(${-historyY / 100}, ${historyX / 100}, 0, 10deg)`

	}
})

//menu slider
new Swiper('.menu_items', {
	slidesPerView: 1,
	spaceBetween: 30,
	breakpoints: {
		700: {
			slidesPerView: 2,
		},
		1100: {
			slidesPerView: 3,
		},
	}
})

//comments slider
new Swiper('.comment_items', {
	pagination: {
		el: ".comment_pagination",
	},
})