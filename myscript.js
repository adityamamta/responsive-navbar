"use strict"

const menuBtn = document.querySelector(".menu-btn");
const menuIcon = document.querySelectorAll(".menu-icon")
const navigationWrapper = document.querySelector(".navigation-wrapper");
const navigation = navigationWrapper.querySelector(".navigation");
const dropdown = document.querySelector(".dropdown");
const dropdownBtn = document.querySelector(".resources");
const dropdownWrapper = dropdown.querySelector(".dropdown-list-wrapper");

let menuOpen = false; 
let dropdownOpen = false; 

// Toggle mobile menu
menuBtn.addEventListener("click", () => {
    const navigationHeight = navigation.offsetHeight;
    menuBtn.classList.toggle("rotate");

    menuIcon.forEach((icon) => {
        icon.classList.toggle("hidden");
    })

    if (!menuOpen) {
        navigationWrapper.style.height = `${navigationHeight}px`;
        menuOpen = true;
    } else {
        navigationWrapper.style.height = "0px";
        menuOpen = false;
    }
});

// Toggle dropdown
dropdownBtn.addEventListener("mouseenter", () => {
    const dropdownHeight = dropdownWrapper.scrollHeight;
    dropdownWrapper.style.height = `${dropdownHeight}px`;
    dropdownOpen = true;

    // Adjust mobile menu height if it's open
    if (menuOpen) {
        navigationWrapper.style.height = `${navigation.offsetHeight + dropdownHeight}px`;
    }
});

dropdown.addEventListener("mouseleave", () => {
    dropdownWrapper.style.height = "0px";
    dropdownOpen = false;

    // Reset mobile menu height if it's open
    if (menuOpen) {
        navigationWrapper.style.height = `${navigation.offsetHeight}px`;
    }
});

// Reset styles on viewport resize
window.addEventListener("resize", () => {
    if (window.innerWidth > 991) { 
        // Desktop view
        navigationWrapper.style.height = ""; // Remove inline height styling
        dropdownWrapper.style.height = ""; // Remove inline height styling
        menuOpen = false;
        dropdownOpen = false;
    } else {
        // Mobile view
        if (!menuOpen) {
            navigationWrapper.style.height = "0px"; // Keep menu closed initially in mobile view
        }
    }
});



