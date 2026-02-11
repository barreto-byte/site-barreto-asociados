function loadComponent(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav");

  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

loadComponent("navbar", "/partials/navbar.html");
loadComponent("footer", "/partials/footer.html");
