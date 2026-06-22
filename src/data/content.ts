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
	'Morir Soñando',
	'¡Buen Provecho!',
	'Authentic Dominican',
	'Somerville, MA',
	'Homemade Every Day',
];

export const highlights = {
	feature: {
		name: 'Regular Lunch',
		desc: 'The Dominican flag: rice, beans, chicken or pork',
		price: '$12.99',
		img: '/img/feature-chimichurri.jpg',
		alt: 'Dominican plato — yellow rice, roast chicken and fried plantain with an orchid garnish',
	},
	cards: [
		{
			name: 'Chimi',
			desc: 'Butter-soft Pork or Chicken Sandwich',
			price: '$7.99',
			img: '/img/chimi.png',
			alt: 'Dominican street-food chimi',
		},
		{
			name: 'Empanadas',
			desc: 'Cheese, Double Cheese, Ham & Cheese, Vegetables, Beef, Chicken, Corn',
			price: '$5.80',
			img: '/img/empanadas.png',
			alt: 'Empanadas',
		},
		{
			name: 'Chicharron',
			desc: 'Basket of fried pork, fried cheese and tostones with lime',
			price: '$14.99',
			img: '/img/card-tresgolpes.jpg',
			alt: 'Basket of fried pork, fried cheese and tostones with lime',
		},
	],
};

export type MenuItem = { name: string; note?: string; price?: string };
export type MenuCategory = { title: string; icon: string; items: MenuItem[] };

export const menuLeft: MenuCategory[] = [
	{
		title: 'With Bread',
		icon: 'ri-bread-line',
		items: [
			{ name: 'Chicken Sandwich', note: 'shredded chicken, tomato, onion, lettuce, ketchup, mayo', price: '$9.99' },
			{ name: 'Ham & Cheese Sandwich', note: 'pork, ham, cheddar, tomato, onion, lettuce, ketchup, mayo', price: '$9.99' },
			{ name: 'Sandwich Completo', note: 'beef, chicken, pork, cheddar + the works', price: '$14.99' },
			{ name: 'Club Sandwich', note: 'shredded chicken, tomato, onion, lettuce, ketchup, mayo', price: '$16.99' },
			{ name: 'Derretido de Queso', note: 'butter, cheddar, tomato, onion, lettuce, ketchup, mayo', price: '$6.99' },
			{ name: 'Double Cheese', note: 'butter, white/yellow/cheddar, tomato, onion, lettuce', price: '$8.99' },
			{ name: 'Cuban Sandwich', note: 'pork, swiss, ham, pickles, mustard, ketchup', price: '$14.99' },
		],
	},
	{
		title: 'Fried Meats',
		icon: 'ri-restaurant-2-line',
		items: [
			{ name: 'Wings · with a side', price: '$14.99' },
			{ name: 'Chicken Tenders · with a side', price: '$14.99' },
			{ name: 'Smoked Pork Chop · with a side', price: '$14.99' },
			{ name: 'Chicharrón (pork) · with a side', price: '$14.99' },
			{ name: 'Fried Carnitas (beef) · with a side', price: '$14.99' },
			{ name: 'Dominican Sausage · with a side', price: '$11.99' },
		],
	},
	{
		title: 'Yaroa',
		icon: 'ri-bowl-line',
		items: [
			{ name: 'Yaroa — Small', note: 'chicken, pork or beef · plantains or fries, cheese, ketchup, mayo', price: '$7.99' },
			{ name: 'Yaroa — Large', note: 'chicken, pork or beef · plantains or fries, cheese, ketchup, mayo', price: '$14.99' },
		],
	},
	{
		title: 'Lunch Special',
		icon: 'ri-calendar-todo-line',
		items: [{ name: 'Regular Lunch', note: 'rice, beans, chicken, pork (extra for beef, oxtail or goat)', price: '$12.99' }],
	},
	{
		title: 'Empanadas',
		icon: 'ri-pie-chart-2-line',
		items: [
			{ name: 'Cheese', note: 'Small $3 / Large', price: '$5.80' },
			{ name: 'Ham & Cheese', note: 'Small $3 / Large', price: '$5.80' },
			{ name: 'Double Cheese', note: 'Small $3 / Large', price: '$5.80' },
			{ name: 'Vegetables', note: 'Small $3 / Large', price: '$5.80' },
			{ name: 'Beef', note: 'Small $3 / Large', price: '$5.80' },
			{ name: 'Chicken', note: 'Small $3 / Large', price: '$5.80' },
			{ name: 'Corn', note: 'Small $3 / Large', price: '$5.80' },
		],
	},
];

export const menuRight: MenuCategory[] = [
	{
		title: 'Antojos',
		icon: 'ri-restaurant-line',
		items: [
			{ name: 'Canasticas', note: 'fried green plantain baskets + veg, pork/chicken/beef', price: '$11.99' },
			{ name: 'Shredded Pork on a Plate', note: 'cabbage, green pepper, onion, cheese, mayo, ketchup', price: '$12.99' },
			{ name: 'Grilled Chicken Breast', price: '$15.99' },
			{ name: 'Salchipapa', note: 'fries, sausage, melted cheese, ketchup, mayo, mustard · Sm $6.99', price: '$10.99' },
			{ name: 'Mofongo', note: 'plantains, garlic, butter, fried pork', price: '$15.99' },
			{ name: 'Patacón', note: 'fried green plantain stuffed with meat, lettuce, tomato, onion', price: '$13.99' },
		],
	},
	{
		title: 'In the Corner',
		icon: 'ri-fire-line',
		items: [
			{ name: 'Chimichurri', note: 'bread, beef, cabbage, onion, tomato, ketchup, mayo', price: '$12.99' },
			{ name: 'Chicken Chimi', price: '$11.99' },
			{ name: 'Pork Chimi', price: '$11.99' },
			{ name: 'Hamburger', note: 'beef, bacon, lettuce, onion, tomato, ketchup, mayo', price: '$12.99' },
			{ name: 'Chicken Hamburger', price: '$11.99' },
			{ name: 'Hot Dog DR', note: 'sausage, cabbage, corn, melted cheese, chips', price: '$7.99' },
		],
	},
	{
		title: 'Breakfast',
		icon: 'ri-sun-line',
		items: [
			{ name: 'Tres Golpes / Mangú', note: 'mashed plantains, onion, fried cheese, fried salami, fried eggs', price: '$13.99' },
			{ name: 'Cassava / Yuca', note: 'boiled cassava, onion, fried cheese, fried salami, fried eggs', price: '$12.99' },
			{ name: 'Bacon Egg Cheese', price: '$5.99' },
		],
	},
	{
		title: 'Natural Juices',
		icon: 'ri-goblet-line',
		items: [
			{ name: '16oz / 20oz / 24oz', note: 'with milk +$1', price: '$4.99' },
			{ name: 'Flavors', note: 'Lemon · Orange · Morir Soñando · Passion Fruit · Tamarindo · Guava · Acerola · Guanábana' },
		],
	},
	{
		title: 'Sides',
		icon: 'ri-leaf-line',
		items: [
			{ name: 'Each $3.99', note: 'Green/Yellow Plantains · Boiled/Fried Cassava · Fries · Green Banana · Rice · Beans' },
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
			{ name: 'Soda $1.25 · Country Club $2.60 · Jarrito $2.60' },
			{ name: 'Gatorade $2.50 · Malta $2.99 · Water $0.99' },
			{ name: 'Red Bull $2.99 · Hot Chocolate $2.50 · Coffee $1.99' },
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
	{ img: '/img/gallery-5.jpg', alt: 'Mangú con los tres golpes — mashed plantains with fried salami, cheese and egg' },
	{ img: '/img/gallery-2.jpg', alt: 'Carne guisada — stewed beef served with white rice' },
	{ img: '/img/gallery-3.jpg', alt: 'Sancocho — hearty Dominican meat and root-vegetable stew' },
	{ img: '/img/gallery-4.jpg', alt: 'Chimi-style burgers with bacon, lettuce, cheese and pink sauce' },
];
