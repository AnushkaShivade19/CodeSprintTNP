// script.js

function showSection(sectionId) {
    // Remove active class from all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Add active class to the selected section
    document.getElementById(sectionId).classList.add('active');

    // Scroll smoothly to top
    document.querySelector('.main-content').scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// script.js

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    document.querySelector('.main-content').scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// script.js

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    document.querySelector('.main-content').scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Theme Toggle
const toggleBtn = document.getElementById('toggle-theme');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        toggleBtn.innerText = 'Light Mode';
    } else {
        toggleBtn.innerText = 'Dark Mode';
    }
});
