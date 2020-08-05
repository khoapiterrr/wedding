document.addEventListener('DOMContentLoaded', (e) => {
  const btnMusic = document.getElementById('btn-music');
  const iframeMusic = document.getElementById('iframeMP3');
  btnMusic.onclick = function () {
    iframeMusic.classList.toggle('ishidden');
  };
});
