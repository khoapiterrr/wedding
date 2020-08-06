var header = document.getElementById('nav-header');
var sticky = header.offsetTop;
const groomInfo = document.getElementById('groom-info');
const brideInfo = document.getElementById('bride-info');
const aboutGroomImg = document.getElementById('aboutGroomImg');
const aboutGroomText = document.getElementById('aboutGroomText');
const aboutBrideImg = document.getElementById('aboutBrideImg');
const aboutBrideText = document.getElementById('aboutBrideText');
const partyWhen = document.getElementById('partyWhen');
const partyWhere = document.getElementById('partyWhere');
const gridMoment = document.getElementById('gridMoment');
const blog1 = document.getElementById('blog1');
const blog2 = document.getElementById('blog2');
const blog3 = document.getElementById('blog3');
const stackLoad = [
  groomInfo,
  brideInfo,
  aboutGroomImg,
  aboutGroomText,
  aboutBrideImg,
  aboutBrideText,
  partyWhen,
  partyWhere,
  gridMoment,
  blog1,
  blog2,
  blog3,
];

window.onscroll = function () {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }

  for (const item of stackLoad) {
    if (
      !checkExitedAnimated(item) &&
      window.pageYOffset + screen.height >= getOffset(item).top
    ) {
      item.classList.add('animated');
      item.classList.remove('animate');
    }
  }
};

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
}
const checkExitedAnimated = (e) => e.classList.contains('animated');
