window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');

    if (window.scrollY > 50 ) {
      navbar.classList.add('bg-nav-scrolled');
    } else {
      navbar.classList.remove('bg-nav-scrolled');
    }
  });