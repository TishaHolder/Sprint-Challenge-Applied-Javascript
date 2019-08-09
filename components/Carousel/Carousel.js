/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

/*console.log("carousel is here");

let carouselContainer = document.querySelector(".carousel-container");
carouselContainer.appendChild(carouselCreator());

function carouselCreator() {

  const divCarousel = document.createElement("div");
  divCarousel.classList.add("carousel");

  const divLeftButton = document.createElement("div");
  divLeftButton.classList.add("left-button");
  divLeftButton.textContent = "<";

  const mountainsImage = document.createElement("img");
  mountainsImage.src = "./assets/carousel/mountains.jpeg";

  const computerImage = document.createElement("img");
  computerImage.src = "./assets/carousel/computer.jpeg";

  const treesImage = document.createElement("img");
  treesImage.src = "./assets/carousel/trees.jpeg";

  const turntableImage = document.createElement("img");
  turntableImage.src = "./assets/carousel/turntable.jpeg";

  const divRightButton = document.createElement("div");
  divRightButton.classList.add("right-button");
  divLeftButton.textContent = ">";

  divCarousel.appendChild(divLeftButton);
  divCarousel.appendChild(mountainsImage);
  divCarousel.appendChild(computerImage);
  divCarousel.appendChild(treesImage);
  divCarousel.appendChild(turntableImage);
  divCarousel.appendChild(divRightButton);  

  function navigate(direction) {

    var counter = 0;
   
    var items = [mountainsImage, computerImage, treesImage, turntableImage];    

    var amount = items.length;  
    var current = items[0];

    
    counter = counter + direction;
    if (direction === -1 && 
        counter < 0) { 
      counter = amount - 1; 
    }
    if (direction === 1 && 
        !items[counter]) { 
      counter = 0;
    }
    current = items[counter];
    
  }

  
  divRightButton.addEventListener('click', function(ev) {
    navigate(1);
  });
  divLeftButton.addEventListener('click', function(ev) {
    navigate(-1);
  });
  navigate(0);

  return divCarousel;

}*/


