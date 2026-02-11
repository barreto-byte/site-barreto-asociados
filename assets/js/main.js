function loadComponent(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

loadComponent("navbar", "/partials/navbar.html");
loadComponent("footer", "/partials/footer.html");
