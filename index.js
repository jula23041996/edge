'use strict'
// CONTACT US
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
if (btn) {
  btn.onclick = function() {
    modal.style.display = "block";
  }
}
if (span) {
  span.onclick = function() {
    modal.style.display = "none";
  }
}
window.onclick = function(event) {
  if (modal && event.target === modal) {
    modal.style.display = "none";
  }
}

//SWIPER HOMEPAGE
//Swiper1
let myImageSlider1 = new Swiper('#swiper-container1', {
	
	// Стрелки
	navigation: {
		nextEl: '.next',
		prevEl: '.previous'
	},

	simulateTouch: true,
	touchRatio: 1,
	touchAngle: 45,
	grabCursor: true,
	slideToClickedSlide: false,
	hashNavigation: {
		watchState: true,
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	mousewheel: {
		sensitivity: 1,
	},
	autoHeight: false,
	slidesPerView: 3,
	watchOverflow: true,
	spaceBetween: 30,
	slidesPerGroup: 1,
	centeredSlides: true,
	initialSlide: 1,
	slidesPerColumn: 1,
	loop: false,
	loopedSlides: 0,
	freeMode: true,
	speed: 800,
	direction: 'horizontal',
	effect: 'slide',
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 1.5,
		},
		992: {
			slidesPerView: 1.75,
		},
		1315: {
			slidesPerView: 3,
		}
	},
	preloadImages: false,

	lazy: {
		loadOnTransitionStart: false,
		loadPrevNext: false,
	},
	watchSlidesProgress: true,
	watchSlidesVisibility: true,
	zoom: {
		maxRatio: 5,
		minRatio: 1,
	},
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
});
// Swiper4
let myImageSlider4 = new Swiper('#swiper-container4', {
	simulateTouch: true,
	touchRatio: 1,
	touchAngle: 45,
	grabCursor: true,
	slideToClickedSlide: false,
	hashNavigation: {
		watchState: true,
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	mousewheel: {
		sensitivity: 1,
	},
	autoHeight: false,
	slidesPerView: 3,
	watchOverflow: true,
	spaceBetween: 30,
	slidesPerGroup: 1,
	centeredSlides: false,
	initialSlide: 1,
	slidesPerColumn: 1,
	loop: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	loopedSlides: 0,
	freeMode: true,
	speed: 800,
	direction: 'horizontal',
	effect: 'slide',
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 1.75,
		},
		992: {
			slidesPerView: 2.25,
		},
		1024: {
			slidesPerView: 3,
		}
	},
	preloadImages: false,
	lazy: {
		loadOnTransitionStart: false,
		loadPrevNext: false,
	},
	watchSlidesProgress: true,
	watchSlidesVisibility: true,
	zoom: {
		maxRatio: 5,
		minRatio: 1,
	},
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
});

// Fixed navbar
const sidenav = document.getElementById("mySidenav");
const heroImage = document.querySelector(".hero-image__container");
const footer = document.querySelector(".footer__container");
const heroImageHeight = heroImage.offsetHeight;
const sidenavTop = sidenav.offsetTop;
const sidenavBottom = sidenav.offsetBottom;
const sidenavHeight = sidenav.offsetHeight;
const footerTop = footer.offsetTop;
const distanceToFooter = footerTop - sidenavBottom;

window.addEventListener("scroll", function() {
  if (window.pageYOffset >= heroImageHeight) {
    sidenav.classList.add("fixed");
    sidenav.style.top = "0";
    sidenav.style.webkitTransform = "translateZ(0)";
  } else {
    sidenav.classList.remove("fixed");
    sidenav.style.top = sidenavTop - heroImageHeight + "px";
  }
  if (window.pageYOffset + sidenavHeight >= footerTop) {
    const newTop = footerTop - distanceToFooter;
    sidenav.style.top = newTop + "px";
  }
});

//Toggling for divs
const toggleDivs = document.querySelectorAll('.stage');

function toggleDisplay() {
  const targetDiv = this.firstElementChild;
  const targetDiv2 = this.lastElementChild;
  if (targetDiv.style.display === 'none') {
    targetDiv.style.display = 'block';
    targetDiv2.style.display = 'none';
  } else {
    targetDiv.style.display = 'none';
    targetDiv2.style.display = 'block';
  }
}

if (window.matchMedia('(max-width: 1024px)').matches) {
  toggleDivs.forEach(function(part) {
    part.addEventListener('click', toggleDisplay);
    part.removeEventListener('mouseenter', toggleDisplay);
    part.removeEventListener('mouseleave', toggleDisplay);
  });
} else {
  toggleDivs.forEach(function(part) {
    part.removeEventListener('click', toggleDisplay);
    part.addEventListener('mouseenter', toggleDisplay);
    part.addEventListener('mouseleave', toggleDisplay);
  });
}
const dropdownButtons2 = document.querySelectorAll('.item__subtitle');
dropdownButtons2.forEach(function(button) {
  button.addEventListener('click', function() {
    const dropdownContent = button.nextElementSibling;
    dropdownContent.classList.toggle('show');
  });
});

// Swiper2
let myImageSlider2 = new Swiper('#swiper-container2', {

	navigation: {
		nextEl: '.next2',
		prevEl: '.previous2'
	},


	simulateTouch: true,
	touchRatio: 1,
	touchAngle: 45,
	grabCursor: true,
	slideToClickedSlide: false,
	hashNavigation: {
		watchState: true,
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},

	mousewheel: {
		sensitivity: 1,
	},
	autoHeight: false,
	slidesPerView: 3,
	watchOverflow: true,
	spaceBetween: 30,
	slidesPerGroup: 1,
	centeredSlides: true,
	initialSlide: 1,
	slidesPerColumn: 1,
	loop: false,
	loopedSlides: 0,
	freeMode: true,
	speed: 800,
	direction: 'horizontal',
	effect: 'slide',	
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 1.25,
		},
		992: {
			slidesPerView: 2.25,
		},
		1024: {
			slidesPerView: 3,
		},
	},
	preloadImages: false,
	lazy: {
		loadOnTransitionStart: false,
		loadPrevNext: false,
	},
	watchSlidesProgress: true,
	watchSlidesVisibility: true,
	zoom: {
		maxRatio: 5,
		minRatio: 1,
	},
	observer: true,
	observeParents: true,
	observeSlideChildren: true,

});

let myImageSlider3 = new Swiper('#swiper-container3', {
	navigation: {
		nextEl: '.next3',
		prevEl: '.previous3'
	},
	simulateTouch: true,
	touchRatio: 1,
	touchAngle: 45,
	grabCursor: true,
	slideToClickedSlide: false,
	hashNavigation: {
		watchState: true,
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,

		pageUpDown: true,
	},
	mousewheel: {

		sensitivity: 1,

	},
	autoHeight: false,
	slidesPerView: 3,
	watchOverflow: true,
	spaceBetween: 30,
	slidesPerGroup: 1,
	centeredSlides: true,
	initialSlide: 1,
	slidesPerColumn: 1,
	loop: false,
	loopedSlides: 0,
	freeMode: true,
	speed: 800,
	direction: 'horizontal',
	effect: 'slide',	
	direction: 'horizontal',
	effect: 'slide',	
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 1.25,
		},
		992: {
			slidesPerView: 2.25,
		},
		1024: {
			slidesPerView: 3,
		},
	},
	preloadImages: false,
	lazy: {
		loadOnTransitionStart: false,
		loadPrevNext: false,
	},
	watchSlidesProgress: true,
	watchSlidesVisibility: true,
	zoom: {
		maxRatio: 5,
		minRatio: 1,
	},
	observer: true,
	observeParents: true,
	observeSlideChildren: true,

});

