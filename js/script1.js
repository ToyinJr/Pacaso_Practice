var disp = document.getElementById("dropdown");
var dropdown_content = document.getElementById("dropdown-content");

// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
  // dropdown_content.style.display = "block";

  if(dropdown_content.style.display == "block"){
    dropdown_content.style.display = "none";
  }
  else {
    dropdown_content.style.display = "block";
  }

});



var splide;

splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 2,
    perMove: 1,
    breakpoints: {
      800: {
        type: "loop",
        perPage: 1,
        perMove: 1,
      },
    }
  } );
  

splide.mount();







  

