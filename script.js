// window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

//  Typed.js code
var typed = new Typed('.multiple-text', {
    strings:['Java Developer', 'Software Developer Engineer Intern', 'Competitive Programmer'],
    typeSpeed:50,
    backSpeed:50,
    backDelay:1000,
    loop:true,
});

// about me section code
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");

    document.getElementById(tabname).classList.add("active-tab");
}

document.getElementById("leetcode").addEventListener("mouseover", ()=>{
    document.getElementById("leetcode").style.fill = "aqua";
});
document.getElementById("leetcode").addEventListener("mouseout", ()=>{
    document.getElementById("leetcode").style.fill = "#ababab";
});



// -----------------------navbar code--------------------

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}

window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// document.getElementById("home").addEventListener("onclick", ()=>{
//     document.getElementById("navbar").style.background = "black";
//     document.getElementById("navbar").style.color = "white";
//     document.querySelector('h1').style.margin-top = "200px";
// });


// -----connecting google form---------------
const scriptURL = 'https://script.google.com/macros/s/AKfycbyilqqJnBHYm0iIQoDOwYbrLGnMxTjHwVKSw0iLLqEO_61ChJfMXHBw6B0ujjSoG9Q8fQ/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
            msg.innerHTML = "Message sent successfully!";
            setTimeout(function(){
                msg.innerHTML = "";
            }, 5000);
            form.reset();
      })
      .catch(error => console.error('Error!', error.message));
  })


//   slider code
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// ---home button----
function home() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }