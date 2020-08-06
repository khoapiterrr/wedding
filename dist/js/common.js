document.addEventListener('DOMContentLoaded', (e) => {
  //add muscic to page
  const btnMusic = document.getElementById('btn-music');
  const iframeMusic = document.getElementById('iframeMP3');
  btnMusic.onclick = function () {
    iframeMusic.classList.toggle('ishidden');
  };
  // interval time
  const months = document.getElementById('months');
  const days = document.getElementById('days');
  const hours = document.getElementById('hours');
  const minutes = document.getElementById('minutes');
  const seconds = document.getElementById('seconds');
  setInterval(() => {
    const weddingDate = new Date('2020/02/14');
    let time = Date.now() - weddingDate.getTime();
    const secms = 1000;
    const minms = 1000 * 60;
    const hourms = minms * 60;
    const dayms = hourms * 24;
    const monthms = dayms * 30;

    let month = Math.floor(time / monthms);
    time %= monthms;
    let day = Math.floor(time / dayms);
    time %= dayms;
    let hour = Math.floor(time / hourms);
    time %= hourms;
    let min = Math.floor(time / minms);
    time %= minms;
    let sec = Math.floor(time / secms);
    time %= secms;
    months.innerText = getTime(month);
    days.innerText = getTime(day);
    hours.innerText = getTime(hour);
    minutes.innerText = getTime(min);
    seconds.innerText = getTime(sec);
  }, 1000);
  // reponsive
  document.getElementById('isTable').onclick = function () {
    document.getElementById('sideNav').classList.toggle('isActive');
  };
});

const getTime = (time) => {
  return time >= 10 ? time : '0' + time;
};
//mosanry
window.onload = function () {
  var grid = document.querySelector('.grid-moment-wedding');
  const listFilter = document.getElementsByClassName('filter-photos-item');

  var msnry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true,
    fitWidth: true,
    transitionDuration: 0,
    // stagger: 500,
  });

  Array.from(listFilter).map((element) => {
    element.onclick = function () {
      if (element.classList.contains('isActive')) {
        return;
      }
      clearActive(listFilter);
      element.classList.add('isActive');
      const filterClassName = `.grid-item:not(.${element.dataset.filterPhoto})`;
      const listGrid = document.getElementsByClassName('grid-item');
      const res = document.querySelectorAll(filterClassName);

      if (element.dataset.filterPhoto === 'all') {
        clearActive(listGrid);
        msnry.layout();
      } else {
        clearActive(listGrid);
        Array.from(res).map((x) => {
          x.classList.add('isActive');
        });
        msnry.layout();
        // setTimeout(() => msnry.layout(), 1000);
      }
    };
  });
};
