// Origin Massage — progressive enhancements (menu, scroll reveal, WhatsApp bubble)

document.documentElement.classList.add('js');

// mobile menu
var menuBtn = document.getElementById('menu-btn');
var navLinks = document.getElementById('nav-links');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', function () {
    var open = navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  navLinks.addEventListener('click', function (e) {
    if (e.target.closest('a')) {
      navLinks.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

// scroll reveal
var revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(function (el) { io.observe(el); });
} else {
  revealEls.forEach(function (el) { el.classList.add('in-view'); });
}

// WhatsApp bubble
var waBtn = document.getElementById('wa-btn');
var waMenu = document.getElementById('wa-menu');
if (waBtn && waMenu) {
  waBtn.addEventListener('click', function () {
    var open = waMenu.classList.toggle('open');
    waBtn.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.wa-fab')) {
      waMenu.classList.remove('open');
      waBtn.setAttribute('aria-expanded', 'false');
    }
  });
}
