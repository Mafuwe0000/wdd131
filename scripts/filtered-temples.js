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


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName:"Natal Brazil Temple",
    location:"Nova Parnamirim, Brazil",
    dedicated:"2025, May, 2025",
    area:19800,
    imageUrl:
    "https://churchofjesuschristtemples.org/natal-brazil-temple/photographs/#Official"
  },
  {
    templeName:"Dallas Texas Temple",
    location:"Texas, USA",
    dedicated:"1983, January, 22",
    area:44207,
    imageUrl:
    "https://churchofjesuschristtemples.org/dallas-texas-temple/photographs/#Gallery-21"

  },
  {
    templeName:"Kaohsiung Taiwan Temple",
    location:"Kaohsiung, Taiwan",
    dedicated:"2023, November, 25",
    area:10900,
    imageUrl:
    "https://churchofjesuschristtemples.org/kaohsiung-taiwan-temple/photographs/#Official"
  }


  // Add more temple objects here...
];
const container =document.getElementById("templos");

  const cards = temples.map(item =>{
    return `
    <div class="card">
        <h2>${item.templeName}</h2>
        <p>${item.location}</p>
        <p>${item.dedicated}</p>
        <p>${item.area}</p>
        <img src="${imageUrl}" alt="temple image"/>
    </div>
    `
  }).join("");//join() converts array of strings into a single string
  
  container.innerHTML =cards;