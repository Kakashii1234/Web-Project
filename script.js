function displayDate(){

  document.getElementById("currentDate").innerHTML = new Date().toLocaleDateString();
}

window.onload = function() {
  displayDate();
}

const carousels = document.querySelectorAll('.carousel');

carousels.forEach((carousel) => {

  const track = carousel.querySelector('.carousel-track');
  const products = Array.from(track.children);


  const prevButton = carousel.querySelector('.arrow.left');
  const nextButton = carousel.querySelector('.arrow.right');

  let currentIndex = 0;


  function updateCarousel() {
    const productWidth = products[0].offsetWidth; 
    track.style.transform = `translateX(-${currentIndex * productWidth}px)`;
  }

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) currentIndex--;
    updateCarousel();
  });

  nextButton.addEventListener('click', () => {
    if (currentIndex < products.length - 1) currentIndex++;
    updateCarousel();
  });
});
