import Swiper from 'swiper';
import { Navigation, Pagination, A11y, Keyboard, Autoplay } from 'swiper/modules';
// Swiper core CSS is imported globally in src/styles/main.css so it survives the
// production build (CSS imported inside client <script> is dropped by Astro here).

export function initReviews() {
	const init = () => {
		new Swiper('.reviews-swiper', {
			modules: [Navigation, Pagination, A11y, Keyboard, Autoplay],
			slidesPerView: 1,
			spaceBetween: 24,
			grabCursor: true,
			keyboard: { enabled: true },
			autoplay: { delay: 6000, disableOnInteraction: true, pauseOnMouseEnter: true },
			navigation: { prevEl: '.reviews-prev', nextEl: '.reviews-next' },
			pagination: { el: '.reviews-pagination', clickable: true },
			a11y: {
				prevSlideMessage: 'Previous review',
				nextSlideMessage: 'Next review',
				paginationBulletMessage: 'Go to review {{index}}',
			},
			breakpoints: {
				640: { slidesPerView: 2 },
				1024: { slidesPerView: 3 },
			},
		});
	};

	if (document.readyState !== 'loading') init();
	else document.addEventListener('DOMContentLoaded', init);
}
