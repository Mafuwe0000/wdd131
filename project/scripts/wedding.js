// Get current year
const currentYear = new Date().getFullYear();

// Insert it into the <span id="year">
document.getElementById("currentYear").textContent = currentYear;


const lastModified = document.lastModified; //this gets the last modified date of the document

document.getElementById("lastModified").textContent = lastModified;

const mainnav=document.querySelector('.nav');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show'); /*toggles nav visibility*/ 
    hambutton.classList.toggle('show');/*change the icon from = to x */
});

 // Select the element that contains all the images
  const slides = document.querySelector('.slides');

  // Select all the <img> elements inside the slides container
  const images = document.querySelectorAll('.slides img');

  // Keep track of which image is currently being shown
  let index = 0;

  // This function moves to the next slide
  function showNextSlide() {
    // Increase the index by 1 to show the next image
    index++;

    // If we’ve reached the last image, go back to the first one
    if (index >= images.length) {
      index = 0;
    }

    /* 
      Move the whole `.slides` container to the left.
      For example:
      - When index = 0 → translateX(0px)
      - When index = 1 → translateX(-600px)
      - When index = 2 → translateX(-1200px)
      
      This creates the sliding effect.
      The width (600px) must match the image width set in your CSS.
    */
    slides.style.transform = `translateX(${-index * 600}px)`;
  }

  // Call showNextSlide() every 5 seconds (5000 milliseconds)
  setInterval(showNextSlide, 5000);

 
const products = [
  {
    id: "1888",
    name: "Irmao",
    averagerating: 4.5
  },
  {
    id: "2050",
    name: "Irma",
    averagerating: 4.7
  },
  {
    id: "4987",
    name: "Primos",
    averagerating: 3.5
  },
  {
    id: "2000",
    name: "Tios",
    averagerating: 3.9
  },
  {
    id: "1969",
    name: "Pais",
    averagerating: 5.0
  }
];
const select = document.getElementById("productName");
products.forEach(product =>{
  const option=document.createElement("option"); //create<option>
  option.value = product.id;
  option.textContent=product.name;
  select.appendChild(option);
})