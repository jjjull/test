const luckyButton = document.querySelector('.search-buttons button:nth-child(2)');
const logo = document.getElementById('logo'); 


luckyButton.addEventListener('click', () => {
   
    logo.src = 'images/odditytech_logo.jpeg'; 
    logo.alt = 'Oddity'; 
});



// Повернення до  логотипу Google
logo.alt = 'Google';
const searchButton = document.querySelector('.search-buttons button:first-child'); 

searchButton.addEventListener('click', () => {
    logo.src = 'images/googlelogo.png'; 
    logo.alt = 'Google';
});


