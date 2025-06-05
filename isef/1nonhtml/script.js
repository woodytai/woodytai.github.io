document.addEventListener('DOMContentLoaded', function () {
	// Function to toggle the menu
	function toggleMenu() {
		document.querySelector('.menu').classList.toggle('show'); // Toggle the menu visibility
		const main = document.querySelector('main').classList.add("ExpandedMenu")

	}

	// Function to close the menu when clicking outside
	function closeMenu(event) {
		const menu = document.querySelector('.menu');
		const menuToggle = document.querySelector('.menu-toggle');
		if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
			menu.classList.remove('show'); // Hide menu if clicked outside
			const main = document.querySelector('main').classList.remove("ExpandedMenu")
		}
	}

	// Create a menu toggle button
	const menuToggle = document.createElement('div');
	menuToggle.innerHTML = '☰';
	menuToggle.classList.add('menu-toggle');
	menuToggle.style.cursor = 'pointer';
	menuToggle.style.fontSize = '24px';

	// Insert the menu toggle button before the menu
	const header = document.querySelector('header');
	const menu = document.querySelector('.menu');
	header.insertBefore(menuToggle, menu); // Insert before the menu

	// Event listeners
	menuToggle.addEventListener('click', toggleMenu);
	window.addEventListener('click', closeMenu);
	document.body.addEventListener('click', closeMenu, true);
});
// 
window.onload = function () {
	setTimeout(() => {
		fetch('https://science-direct.github.io/admin/info.json')
			.then(response => {
				if (!response.ok) {
					document.querySelector('.footer div p').textContent = " © 2024 Woody TAI "
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then(data => {
				document.querySelector('.footer div p').textContent = data
			})
	}, 300);
};



document.querySelector('.AM_dropdown').addEventListener('click', function (event) {
	event.preventDefault();
	const dropdown = document.querySelector('.dropdown-content');
	dropdown.classList.toggle('show');
});

window.addEventListener('click', function (event) {
	if (!event.target.matches('.AM_dropdown')) {
		const dropdowns = document.querySelectorAll('.dropdown-content');
		dropdowns.forEach(dropdown => {
			dropdown.classList.remove('show');
		});
	}
});