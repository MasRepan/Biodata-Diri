document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('header');
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      header.style.padding = '10px 40px';
      navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.4)';
    }
    else {
      header.style.padding = '20px 40px';
      navbar.style.boxShadow = '0 8px 30px rgba(255, 230, 0, 0.15)';
    }
  });
});
