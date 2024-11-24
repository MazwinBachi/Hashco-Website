document.getElementById('hamburger').addEventListener('click', function() {
  var navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('show');
  this.classList.toggle('fa-bars');
  this.classList.toggle('fa-times');
  this.classList.toggle('rotate'); // Add rotate class for transition
});

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('nav');
  if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled'); // Add scrolled class
  } else {
      navbar.classList.remove('navbar-scrolled'); // Remove scrolled class
  }
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".custom-nav");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
