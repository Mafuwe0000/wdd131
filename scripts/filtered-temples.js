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
    templeName:"Recife Brazil Temple",
    location:"Recife, Brazil",
    dedicated:"2000, December, 15",
    area:19800,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/recife-brazil/400x250/recife-brazil-temple-lds-700211-wallpaper.jpg"
  },
  {
    templeName:"Dallas Temple",
    location:"Texas, USA",
    dedicated:"1984, October, 19",
    area:44207,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/dallas-texas/2018/400x250/Dallas-Texas-Temple06.jpg"

  },
  {
    templeName:"Kinshasa Democratic Republic of the Congo Temple",
    location:"Kinshasa, Congo",
    dedicated:"2019, April, 14",
    area:10900,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kinshasa-democratic-republic-of-congo/400x250/01-Kinshasa-DRCongo-Temple-2208932.jpg"
  }


  // Add more temple objects here...
];
/*
const container =document.getElementById("templos");

  const cards = temples.map(item =>{
    return `
    <div class="card">
        <h2>${item.templeName}</h2>
        <p>${item.location}</p>
        <p>${item.dedicated}</p>
        <p>${item.area}</p>
        <img src="${item.imageUrl}" alt="${item.templeName}" loading="lazy"/>
        
    </div>
    `
  }).join("");//join() converts array of strings into a single string
  
  container.innerHTML =cards;*/
  
  createTempleCard(temples);

  function createTempleCard(){
    temples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML =`<span class="label">Location: </span> ${temple.location}`;
        dedication.innerHTML=`<span class="label">Dedicated: </span> ${temple.dedicated}`;
        area.innerHTML=`<span class="label"> Size: </span> ${temple.area} sq ft`;

        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName}Temple`);
        img.setAttribute("loading","lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".templos").appendChild(card);
    });
    }
  


const oldTempleButton = document.querySelector("#oldTemples");
oldTempleButton.addEventListener("click", ()=>{
    createTempleCard(temples.filter(temple=> temple.dedicated > 1900));
})

 function createTempleCard(filteredTemples){
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML =`<span class="label">Location: </span> ${temple.location}`;
        dedication.innerHTML=`<span class="label">Dedicated: </span> ${temple.dedicated}`;
        area.innerHTML=`<span class="label"> Size: </span> ${temple.area} sq ft`;

        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName}Temple`);
        img.setAttribute("loading","lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".templos").appendChild(card);
    });
    }
