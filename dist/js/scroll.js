var header = document.getElementById('nav-header');
var sticky = header.offsetTop;
window.onscroll = function () {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};
