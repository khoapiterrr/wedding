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
});
const getTime = (time) => {
  return time >= 10 ? time : '0' + time;
};
