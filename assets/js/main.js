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
  const links = document.querySelectorAll('.nav-menu a');

  // 🔹 MENÚ HAMBURGUESA
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('open');
  });

  // 🔹 SCROLL
  window.addEventListener("scroll", () => {

    if (navLinks.classList.contains('active') && window.scrollY > 10){
      navLinks.classList.remove('active');
      menuToggle.classList.remove('open');
    }

    if (window.scrollY > 80) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

  });

  // 🔹 ACTIVE AUTOMÁTICO
  const currentPath = window.location.pathname;

  links.forEach(link => {
    const linkPath = new URL(link.href).pathname;

    if (
      currentPath === linkPath ||
      (currentPath === "/" && linkPath.includes("index.html"))
    ) {
      link.classList.add("active");
    }
  });

});

loadComponent("footer", "/partials/footer.html");
