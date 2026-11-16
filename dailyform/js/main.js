document.querySelectorAll('#mainNav .nav-link').forEach(function (link) {
  link.addEventListener('click', function () {
    const menu = document.getElementById('mainNav');
    if (menu.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});