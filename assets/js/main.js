function loadComponent(id, file, callback) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
      if (callback) callback();
    });
}
loadComponent("navbar", "/partials/navbar.html", () => {
  const navbar = document.querySelector(".navbar");
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-menu');

  menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
  window.addEventListener("scroll", () => {
    if (navLinks.classList.contains('active') && window.scrollY > 10){
      navLinks.classList.remove('active');
      menuToggle.classList.remove('open');
    }
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

loadComponent("footer", "/partials/footer.html");
