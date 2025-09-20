// Get current year
const currentYear = new Date().getFullYear();

// Insert it into the <span id="year">
document.getElementById("currentYear").textContent = currentYear;


const lastModified = document.lastModified; //this gets the last modified date of the document

document.getElementById("lastModified").textContent = lastModified;

const mainnave=document.querySelector('.nav');
const hambutton = document.querySelector('nav');

hambutton.addEventListener('click',()=>{
    mainnave.classList.toggle('show');
    hambutton.classList.toggle('show');});