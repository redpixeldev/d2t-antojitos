/**
 * Central content for the Antojitos site.
 * Menu, prices, hours and reviews are taken from the project brief
 * (real Antojitos data). Reviewer names are illustrative.
 */

export const site = {
	name: 'Antojitos',
	tagline: 'Dominican Grub · Somerville',
	phone: '617-764-2131',
	phoneHref: 'tel:+16177642131',
	cateringUrl: 'https://www.ezcater.com/catering/pvt/antojitos-3',
	address: {
		street: '507 Medford St',
		city: 'Somerville, MA 02145',
		mapsUrl: 'https://maps.google.com/?q=507+Medford+St+Somerville+MA+02145',
	},
	social: {
		instagram: 'https://www.instagram.com/antojitossomerville/',
	},
};

export const nav = [
	{ label: 'Menu', href: '#menu' },
	{ label: 'About', href: '#about' },
	{ label: 'Catering', href: '#catering' },
	{ label: 'Visit', href: '#visit' },
];

export const hours = [
	{ days: 'Monday – Friday', time: '9:00 AM – 8:00 PM' },
	{ days: 'Saturday', time: '10:00 AM – 8:00 PM' },
	{ days: 'Sunday', time: 'Closed', closed: true },
];

export const tickerItems = [
	'Santo Domingo',
	'Somerville, MA',
	'Dominican Grub',
	'Made Fresh Daily',
	'507 Medford St',
];

export const highlights = {
	feature: {
		name: 'Chimichurri',
		desc: 'The Dominican street burger — beef, cabbage, onion, tomato, pink sauce on toasted pan.',
		price: '$12.99',
		img: '/img/feature-chimichurri.jpg',
		alt: 'Dominican plato — yellow rice, roast chicken and fried plantain with an orchid garnish',
	},
	cards: [
		{
			name: 'Yaroa',
			desc: 'Loaded plantains or fries',
			price: '$7.99',
			img: '/img/card-yaroa.jpg',
			alt: 'Dominican street-food stall with fried plantains, fries and skewers',
		},
		{
			name: 'Mofongo',
			desc: 'Plantains, garlic & fried pork',
			price: '$15.99',
			img: '/img/card-mofongo.jpg',
			alt: 'Takeout box of fried chicken, plantains and cassava',
		},
		{
			name: 'Tres Golpes',
			desc: 'The Dominican breakfast',
			price: '$13.99',
			img: '/img/card-tresgolpes.jpg',
			alt: 'Basket of fried pork, fried cheese and tostones with lime',
		},
	],
};

export type MenuItem = { name: string; note?: string; price: string };
export type MenuCategory = { title: string; icon: string; items: MenuItem[] };

export const menuLeft: MenuCategory[] = [
	{
		title: 'With Bread',
		icon: 'ri-sandwich-line',
		items: [
			{ name: 'Chicken Sandwich', note: 'shredded chicken, lettuce, tomato', price: '$9.99' },
			{ name: 'Ham & Cheese Sandwich', note: 'pork, ham, cheddar', price: '$9.99' },
			{ name: 'Sandwich Completo', note: 'beef, chicken, pork, cheddar', price: '$14.99' },
			{ name: 'Club Sandwich', note: 'shredded chicken, lettuce, tomato', price: '$16.99' },
			{ name: 'Derretido de Queso', note: 'butter, cheddar, veg', price: '$6.99' },
			{ name: 'Double Cheese', note: 'white, yellow & cheddar', price: '$8.99' },
			{ name: 'Cuban Sandwich', note: 'pork, swiss, ham, pickles', price: '$14.99' },
		],
	},
	{
		title: 'Fried Meats',
		icon: 'ri-restaurant-2-line',
		items: [
			{ name: 'Wings', note: 'with a side', price: '$14.99' },
			{ name: 'Chicken Tenders', note: 'with a side', price: '$14.99' },
			{ name: 'Smoked Pork Chop', note: 'with a side', price: '$14.99' },
			{ name: 'Chicharrón (Pork)', note: 'with a side', price: '$14.99' },
			{ name: 'Fried Carnitas (Beef)', note: 'with a side', price: '$14.99' },
			{ name: 'Dominican Sausage', note: 'with a side', price: '$11.99' },
		],
	},
	{
		title: 'Yaroa',
		icon: 'ri-bowl-line',
		items: [
			{ name: 'Yaroa', note: 'chicken, pork or beef · small', price: '$7.99' },
			{ name: 'Yaroa', note: 'plantains or fries, cheese · large', price: '$14.99' },
		],
	},
	{
		title: 'Lunch Special',
		icon: 'ri-calendar-todo-line',
		items: [{ name: 'Regular Lunch', note: 'rice, beans, chicken & pork', price: '$12.99' }],
	},
	{
		title: 'Empanadas',
		icon: 'ri-pie-chart-2-line',
		items: [
			{ name: 'Cheese', price: '$3 / $5.80' },
			{ name: 'Ham & Cheese', price: '$3 / $5.80' },
			{ name: 'Double Cheese', price: '$3 / $5.80' },
			{ name: 'Vegetables', price: '$3 / $5.80' },
			{ name: 'Beef', price: '$3 / $5.80' },
			{ name: 'Chicken', price: '$3 / $5.80' },
			{ name: 'Corn', price: '$3 / $5.80' },
		],
	},
];

export const menuRight: MenuCategory[] = [
	{
		title: 'Antojos',
		icon: 'ri-fish-line',
		items: [
			{ name: 'Canasticas', note: 'plantain baskets + meat', price: '$11.99' },
			{ name: 'Shredded Pork on a Plate', note: 'cabbage, pepper, onion', price: '$12.99' },
			{ name: 'Grilled Chicken Breast', price: '$15.99' },
			{ name: 'Salchipapa', note: 'small / large', price: '$6.99 / $10.99' },
			{ name: 'Mofongo', note: 'plantains, garlic, fried pork', price: '$15.99' },
			{ name: 'Patacón', note: 'stuffed green plantain', price: '$13.99' },
		],
	},
	{
		title: 'In the Corner',
		icon: 'ri-hamburger-line',
		items: [
			{ name: 'Chimichurri', note: 'beef, cabbage, onion, tomato', price: '$12.99' },
			{ name: 'Chicken Chimi', price: '$11.99' },
			{ name: 'Pork Chimi', price: '$11.99' },
			{ name: 'Hamburger', note: 'beef, bacon, lettuce', price: '$12.99' },
			{ name: 'Chicken Hamburger', price: '$11.99' },
			{ name: 'Hot Dog DR', note: 'cabbage, corn, cheese, chips', price: '$7.99' },
		],
	},
	{
		title: 'Breakfast',
		icon: 'ri-sun-line',
		items: [
			{ name: 'Tres Golpes / Mangú', note: 'plantains, cheese, salami, eggs', price: '$13.99' },
			{ name: 'Cassava / Yuca', note: 'cheese, salami, eggs', price: '$12.99' },
			{ name: 'Bacon Egg Cheese', price: '$5.99' },
		],
	},
	{
		title: 'Natural Juices',
		icon: 'ri-goblet-line',
		items: [
			{ name: 'Morir Soñando', note: '16 / 20 / 24 oz', price: '$4.99+' },
			{ name: 'Passion Fruit', price: '$4.99+' },
			{ name: 'Tamarindo', price: '$4.99+' },
			{ name: 'Guanábana', price: '$4.99+' },
			{ name: 'Orange · Lemon', price: '$4.99+' },
			{ name: 'Guava · Acerola', price: '$4.99+' },
		],
	},
	{
		title: 'Sides',
		icon: 'ri-leaf-line',
		items: [
			{ name: 'Fried Plantains', note: 'green or yellow', price: '$3.99' },
			{ name: 'Boiled / Fried Cassava', price: '$3.99' },
			{ name: 'French Fries', price: '$3.99' },
			{ name: 'Green Banana', price: '$3.99' },
			{ name: 'Rice', price: '$3.99' },
			{ name: 'Beans', price: '$3.99' },
		],
	},
	{
		title: 'Dessert',
		icon: 'ri-cake-3-line',
		items: [
			{ name: 'Flan', price: '$4.99' },
			{ name: 'Tres Leches', price: '$6.99' },
			{ name: 'Rice Pudding', price: '$3.99' },
		],
	},
	{
		title: 'Drinks',
		icon: 'ri-cup-line',
		items: [
			{ name: 'Soda', price: '$1.25' },
			{ name: 'Country Club', price: '$2.60' },
			{ name: 'Jarrito', price: '$2.60' },
			{ name: 'Malta Morena', price: '$2.99' },
			{ name: 'Water', price: '$0.99' },
			{ name: 'Coffee', price: '$1.99' },
		],
	},
];

export const reviews = [
	{
		quote:
			'It was my first time visiting Antojitos. I had the “3 golpes” breakfast and a “morir soñando” juice! Perfection! The place is cozy and meticulously clean. I loved it here!',
		name: 'Maria R.',
		source: 'Google Review',
	},
	{
		quote:
			'This place is a hidden gem in Magoun Square. All the food is homemade and great quality. They also have a lunch special you cannot beat around here. A must stop if you’re around Medford.',
		name: 'Jonathan C.',
		source: 'Google Review',
	},
	{
		quote:
			'Fantastic. The best Dominican food, besides my mother’s, that I’ve had in Somerville. I’ll be coming back. Thank you Cesar y la Doña.',
		name: 'Carlos M.',
		source: 'Google Review',
	},
	{
		quote:
			'Loved stopping by this hole-in-the-wall. Everyone was super friendly and the food was so delicious! We felt cared for and will definitely be back again!',
		name: 'Daniela G.',
		source: 'Google Review',
	},
];

export const gallery = [
	{ img: '/img/gallery-1.jpg', alt: 'Dominican rice with stewed meat and sweet plantains' },
	{ img: '/img/gallery-2.jpg', alt: 'Glass of fresh natural fruit juice' },
	{ img: '/img/gallery-3.jpg', alt: 'Golden sweet fried plantains (maduros)' },
	{ img: '/img/gallery-4.jpg', alt: 'Crispy fried green plantains (tostones)' },
];
