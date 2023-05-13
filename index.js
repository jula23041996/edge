// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
if (btn) {
  btn.onclick = function() {
    modal.style.display = "block";
  }
}

// When the user clicks on <span> (x), close the modal
if (span) {
  span.onclick = function() {
    modal.style.display = "none";
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (modal && event.target === modal) {
    modal.style.display = "none";
  }
}

//SWIPER HOMEPAGE
// Инициализируем Swiper
let myImageSlider1 = new Swiper('#swiper-container1', {
	
	// Стрелки
	navigation: {
		nextEl: '.next',
		prevEl: '.previous'
	},

	// Скролл

	// Включение/отключение
	// перетаскивания на ПК
	simulateTouch: true,
	// Чувствительность свайпа
	touchRatio: 1,
	// Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true,

	// Переключение при клике на слайд
	slideToClickedSlide: false,

	// Навигация по хешу
	hashNavigation: {
		// Отслеживать состояние
		watchState: true,
	},

	// Управление клавиатурой
	keyboard: {
		// Включить\выключить
		enabled: true,
		// Включить\выключить
		// только когда слайдер
		// в пределах вьюпорта
		onlyInViewport: true,
		// Включить\выключить
		// управление клавишами
		// pageUp, pageDown
		pageUpDown: true,
	},

	// Управление колесом мыши
	mousewheel: {
		// Чувствительность колеса мыши
		sensitivity: 1,
		// Класс объекта на котором
		// будет срабатывать прокрутка мышью.
		//eventsTarget: ".image-slider"
	},

	// Автовысота
	autoHeight: false,

	// Количество слайдов для показа
	slidesPerView: 3,
	
	// Отключение функционала
	// если слайдов меньше чем нужно
	watchOverflow: true,

	// Отступ между слайдами
	spaceBetween: 30,

	// Количество пролистываемых слайдов
	slidesPerGroup: 1,

	// Активный слайд по центру
	centeredSlides: true,

	// Стартовый слайд.
	initialSlide: 1,

	// Мультирядность
	slidesPerColumn: 1,

	// Бесконечный слайдер
	loop: false,

	// Кол-во дублирующих слайдов
	loopedSlides: 0,

	// Свободный режим
	freeMode: true,
	// Скорость
	speed: 800,

	// Вертикальный слайдер
	direction: 'horizontal',


	// Эффекты переключения слайдов.

    //Листание
	effect: 'slide',

	
	
	// Брейк поинты (адаптив)
	// Ширина экрана
	
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 1,
		},
		992: {
			slidesPerView: 2,
		},
		1315: {
			slidesPerView: 3,
		}
	},
	
	
	
/*
	breakpoints: {
		'@0.75': {
			slidesPerView: 1,
		},
		'@1.00': {
			slidesPerView: 1,
		},
		'@1.50': {
			slidesPerView: 3,
		}
	},
*/
	

	// Отключить предзагрузка картинок
	preloadImages: false,
	// Lazy Loading
	// (подгрузка картинок)
	lazy: {
		// Подгружать на старте
		// переключения слайда
		loadOnTransitionStart: false,
		// Подгрузить предыдущую
		// и следующую картинки
		loadPrevNext: false,
	},
	// Слежка за видимыми слайдами
	watchSlidesProgress: true,
	// Добавление класса видимым слайдам
	watchSlidesVisibility: true,

	// Зум картинки
	zoom: {
		// Макимальное увеличение
		maxRatio: 5,
		// Минимальное увеличение
		minRatio: 1,
	},

	// Обновить свайпер
	// при изменении элементов слайдера
	observer: true,

	// Обновить свайпер
	// при изменении родительских
	// элементов слайдера
	observeParents: true,

	// Обновить свайпер
	// при изменении дочерних
	// элементов слайда
	observeSlideChildren: true,
});

// Fixed navbar
const sidenav = document.getElementById("mySidenav");
const heroImage = document.querySelector(".hero-image__container");
const footer = document.querySelector(".footer__container");
const heroImageRect = heroImage.getBoundingClientRect();
const sidenavRect = sidenav.getBoundingClientRect();
const footerRect = footer.getBoundingClientRect();
const heroImageHeight = heroImageRect.height;
const sidenavTop = sidenavRect.top + window.pageYOffset;
const sidenavBottom = sidenavRect.bottom + window.pageYOffset;
const sidenavHeight = sidenavRect.height;
const footerTop = footerRect.top + window.pageYOffset;
const distanceToFooter = footerTop - sidenavBottom;

window.addEventListener("scroll", function() {
  if (window.pageYOffset >= heroImageHeight) {
    sidenav.classList.add("fixed");
    sidenav.style.top = "0";
  } else {
    sidenav.classList.remove("fixed");
    sidenav.style.top = sidenavTop - heroImageHeight + "px";
  }
  if (window.pageYOffset + sidenavHeight >= footerTop) {
    const newTop = footerTop - distanceToFooter;
    sidenav.style.top = newTop + sidenavHeight + "px";
  }
});
//Toggling for divs
const toggleDivs = document.querySelectorAll('.stage');

function toggleDisplay() {
  // Get the next sibling element of the clicked div
  const targetDiv = this.firstElementChild;
  const targetDiv2 = this.lastElementChild;
  // Toggle the display of the target div
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
// Get all the dropdown buttons
const dropdownButtons2 = document.querySelectorAll('.item__subtitle');

// Loop through the dropdown buttons and add event listeners
dropdownButtons2.forEach(function(button) {
  button.addEventListener('click', function() {
    // Get the dropdown content that is next to the button
    const dropdownContent = button.nextElementSibling;

    // Toggle the display of the dropdown content
    dropdownContent.classList.toggle('show');
  });
});

// Инициализируем Swiper
let myImageSlider2 = new Swiper('#swiper-container2', {
	// Стрелки
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

	// Автовысота
	autoHeight: false,

	// Количество слайдов для показа
	slidesPerView: 3,

	// Отключение функционала
	// если слайдов меньше чем нужно
	watchOverflow: true,

	// Отступ между слайдами
	spaceBetween: 30,

	// Количество пролистываемых слайдов
	slidesPerGroup: 1,

	// Активный слайд по центру
	centeredSlides: true,

	// Стартовый слайд.
	initialSlide: 1,

	// Мультирядность
	slidesPerColumn: 1,

	// Бесконечный слайдер
	loop: false,

	// Кол-во дублирующих слайдов
	loopedSlides: 0,

	// Свободный режим
	freeMode: true,
	

	// Скорость
	speed: 800,

	// Вертикальный слайдер
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
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	},
	preloadImages: false,
	// Lazy Loading
	// (подгрузка картинок)
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

// Инициализируем Swiper
let myImageSlider3 = new Swiper('#swiper-container3', {
	// Стрелки
	navigation: {
		nextEl: '.next3',
		prevEl: '.previous3'
	},

	// Включение/отключение
	// перетаскивания на ПК
	simulateTouch: true,
	// Чувствительность свайпа
	touchRatio: 1,
	// Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true,

	// Переключение при клике на слайд
	slideToClickedSlide: false,

	// Навигация по хешу
	hashNavigation: {
		// Отслеживать состояние
		watchState: true,
	},

	// Управление клавиатурой
	keyboard: {
		// Включить\выключить
		enabled: true,
		onlyInViewport: true,

		pageUpDown: true,
	},


	mousewheel: {

		sensitivity: 1,

	},

	// Автовысота
	autoHeight: false,

	// Количество слайдов для показа
	slidesPerView: 3,

	// Отключение функционала
	// если слайдов меньше чем нужно
	watchOverflow: true,

	// Отступ между слайдами
	spaceBetween: 30,

	// Количество пролистываемых слайдов
	slidesPerGroup: 1,

	// Активный слайд по центру
	centeredSlides: true,

	// Стартовый слайд.
	initialSlide: 1,

	// Мультирядность
	slidesPerColumn: 1,

	// Бесконечный слайдер
	loop: false,

	// Кол-во дублирующих слайдов
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
			slidesPerView: 2,
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
