var home = document.getElementById("homeID");
var about = document.getElementById("aboutID");
var project = document.getElementById("projectsID");
var contact = document.getElementById("contactID");

function homee(){
  home.style.color = "white";
  about.style.color = "#A9A8A8";
  project.style.color = "#A9A8A8";
  contact.style.color = "#A9A8A8";
  window.location.href = "index.html"; 
}
function aboutt(){
  about.style.color = "white";
  home.style.color = "#A9A8A8";
  project.style.color = "#A9A8A8";
  contact.style.color = "#A9A8A8";
  window.location.href = "about.html"; 
}
function proj(){
  project.style.color = "white";
  home.style.color = "#A9A8A8";
  about.style.color = "#A9A8A8";
  contact.style.color = "#A9A8A8";
  window.location.href = "project.html"; 
}
function cont(){
  contact.style.color = "white";
  home.style.color = "#A9A8A8";
  project.style.color = "#A9A8A8";
  about.style.color = "#A9A8A8";
  window.location.href = "contact.html"; 
}

var typed = new Typed('#typeanim', {
    strings: ["Web Developer", "Cybersecurity"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

