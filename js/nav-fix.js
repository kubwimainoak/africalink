/**
 * Navigation Dropdown Fix for Africa Link
 * This script fixes the issue with dropdown menus not expanding on mobile 
 * when the parent dropdown link is marked as active
 */

document.addEventListener('DOMContentLoaded', function() {
    // Fix for dropdown menus on mobile
    var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
    dropdownElementList.forEach(function(dropdownToggleEl) {
        dropdownToggleEl.addEventListener('click', function(e) {
            if (window.innerWidth < 992) {
                e.preventDefault();
                e.stopPropagation();
                
                // Toggle the 'show' class on the parent dropdown
                var parentDropdown = this.closest('.dropdown');
                parentDropdown.classList.toggle('show');
                
                // Toggle the 'show' class on the dropdown menu
                var dropdownMenu = this.nextElementSibling;
                dropdownMenu.classList.toggle('show');
            }
        });
    });
    
    // Close all dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth < 992 && !e.target.closest('.dropdown')) {
            var dropdowns = document.querySelectorAll('.dropdown.show');
            dropdowns.forEach(function(dropdown) {
                dropdown.classList.remove('show');
                dropdown.querySelector('.dropdown-menu').classList.remove('show');
            });
        }
    });
}); 