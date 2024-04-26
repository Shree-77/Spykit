$('#myCarousel').carousel({
    interval: 5000
})

$('#myCarousel .carousel-item').each(function() {
    var minPerSlide = 4;
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});
var containerEl = document.querySelector('[data-ref~="mixitup-container"]');

    var mixer = mixitup(containerEl, {
    selectors: {
        target: '[data-ref~="mixitup-target"]'
    }
});
 // Boolean variable to track login status
 let isLoggedIn = false;
    
 // Function to hide the login link and show the logout link
 function hideLoginLink() {
     document.getElementById('login-link').style.display = 'none';
 }

 // Check if the user is logged in
 function checkLogin() {
     if (isLoggedIn) {
         hideLoginLink();
     }
 }

 // Function to set login status to true
 function login() {
     isLoggedIn = true;
     hideLoginLink();
 }

 // Event listener for the login button click
 document.getElementById('login-button').addEventListener('click', function(event) {
     // Prevent the default action of the button
     event.preventDefault();
     // Perform login
     login();
     // Redirect to index.html
     window.location.href = 'index.html';
 });