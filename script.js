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


// -----------------------services code--------------------

