// JavaScript Document

//create an action for the "Find food now" button
let btn = document.getElementById('cta-btn');
let overlay = document.getElementById('overlay');

btn.addEventListener('click', () => {
	overlay.style.display = 'grid';
	overlay.classList.add('animate-overlay');
})