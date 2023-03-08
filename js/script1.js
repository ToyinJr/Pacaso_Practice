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


// var splide = new Splide( '.splide', {
//   type   : 'loop',
//   perPage: 2,
//   perMove: 1,
// } );


// var splide = new Splide( '.splide', {
//   type: 'loop',
//   direction: 'ttb',
//   height   : '30rem',
// } ); 

var splide;

splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 2,
    perMove: 1,
    breakpoints: {
      800: {
        direction: 'ttb',
        height: '31rem',
        perPage: 1
      },
    }
  } );
  

// splide = new Splide( '.splide', {
//     type: 'loop',
//     direction: 'ttb',
//     height   : '30rem',
//   } ); 

splide.mount();

var rrr = document.getElementById('rrr');

// var x = window.matchMedia("(max-width: 768px)")

// function myFunction(x) {
//     if (x.matches) {
//       rrr.setAttribute("class", "red");
//     } 
//      else {
//       rrr.setAttribute("class", "blue");
//   }
// }

//   myFunction(x) // Call listener function at run time
//   x.addListener(myFunction) // Attach listener function on state changes





  

