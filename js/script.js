document.addEventListener('DOMContentLoaded', function () {
        // Function to toggle the menu
        function toggleMenu() {
                const menu = document.querySelector('.menu');
                menu.classList.toggle('show'); // Toggle the menu visibility
        }

        // Function to close the menu when clicking outside
        function closeMenu(event) {
                const menu = document.querySelector('.menu');
                const menuToggle = document.querySelector('.menu-toggle');
                if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
                menu.classList.remove('show'); // Hide menu if clicked outside
                }
        }

        // Create a menu toggle button
        const menuToggle = document.createElement('div');
        menuToggle.innerHTML = '☰'; // Hamburger icon
        menuToggle.classList.add('menu-toggle'); // Add a class for styling
        menuToggle.style.cursor = 'pointer'; // Change cursor to pointer
        menuToggle.style.fontSize = '24px'; // Adjust icon size

        // Insert the menu toggle button before the menu
        const header = document.querySelector('header');
        const menu = document.querySelector('.menu');
        header.insertBefore(menuToggle, menu); // Insert before the menu

        // Event listeners
        menuToggle.addEventListener('click', toggleMenu); // Toggle menu on click
        window.addEventListener('click', closeMenu); // Close menu on outside click
        });