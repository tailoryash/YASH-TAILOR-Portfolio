window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

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