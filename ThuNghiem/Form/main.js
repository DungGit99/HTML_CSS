const images = ["fall.jpeg", 'leaf.jpeg', 'flowerPlant.jpeg'];


function changeBackground() {
  var ramdomNumber = Math.floor(Math.random() * images.length)
  document.body.style.backgroundImage = `url(img/${images[ramdomNumber]})`;
}

// document.addEventListener('click', changeBackground);

window.onload = changeBackground;