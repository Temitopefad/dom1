const header = document.querySelector( "header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky",  window.scrollY > 0) ;// adding event listener for scroll
    
})

const hearts = document.querySelectorAll('.heart');

hearts.forEach(heart => {
    heart.addEventListener('click', function() {
        this.classList.toggle('liked');  // Only this specific heart gets toggled
    });
});


