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

let carouselContainer = document.querySelector(".carousel-container");
carouselContainer.appendChild(carouselCreator());

function carouselCreator() {

  const divCarousel = document.createElement("div");
  divCarousel.classList.add("carousel");

  const divLeftButton = document.createElement("div");
  divLeftButton.classList.add("left-button");
  divLeftButton.textContent = "<";
  divCarousel.appendChild(divLeftButton);

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
  divRightButton.textContent = ">";
  divCarousel.appendChild(divRightButton); 

  let items = [mountainsImage, computerImage, treesImage, turntableImage];  
  let counter = 0;
  let arrayLength = items.length;
  let current = items[counter];

  //add the first item in the array to the carousel
  divCarousel.appendChild(current);

  //when right button is clicked
  divRightButton.addEventListener('click', function(ev) {  
    
    //increase the counter by 1
    counter++;

    //if counter is greater than the number of items in the array, reset it to 0
    if (counter > arrayLength) {
      counter = 0;
    }

    //add the current image to the carousel
    divCarousel.appendChild(items[counter]);  
    

  });
  
  //add event listener to the left button
  divLeftButton.addEventListener('click', function(ev) {
    counter--;

    //if counter is less than the first index in the array, change the pointer/cursor to the last picture in the array
    if (counter < 0) {
       counter = arrayLength-1;
    }

    //add the current image to the carousel
    divCarousel.appendChild(items[counter]);

  });  

  return divCarousel;

}





