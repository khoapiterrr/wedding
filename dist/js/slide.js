document.addEventListener('DOMContentLoaded', (e) => {
  const sliders = document.getElementById('sliders').children;
  const nextSlider = document.getElementsByClassName('next-slide-item');
  let slidersInterval = setIntervalSlider(sliders, nextSlider, 3000);
  //setOnclick next slider
  Array.from(nextSlider).map((element) => {
    element.onclick = function () {
      const indexClick = parseInt(element.dataset.sliderId);
      if (indexClick !== getIndexOfSliderActive(sliders)) {
        //clear and add active to slider and node
        clearActive(sliders);
        clearActive(nextSlider);

        addActive(sliders, indexClick);
        addActive(nextSlider, indexClick);

        //update interval time
        clearInterval(slidersInterval);
        slidersInterval = setIntervalSlider(sliders, nextSlider, 3000);
        console.log(slidersInterval, 'slidersInterval id');
      }
    };
  });
});

const getIndexOfSliderActive = (sliders) => {
  for (let i = 0; i < sliders.length; i++) {
    const element = sliders[i];
    if (element.classList.contains('isActive')) {
      return i;
    }
  }
  return 0;
};

const clearActive = (sliders) => {
  for (let item of sliders) {
    item.classList.remove('isActive');
  }
};
const addActive = (sliders, index = 0) => {
  for (let i = 0; i < sliders.length; i++) {
    const element = sliders[i];
    if (i === index) {
      element.classList.add('isActive');
    }
  }
};

const setIntervalSlider = (sliders, nextSlider, ms) => {
  return setInterval(() => {
    let slidersIndex = getIndexOfSliderActive(sliders);
    clearActive(sliders);
    clearActive(nextSlider);

    if (slidersIndex < 2) {
      addActive(sliders, slidersIndex + 1);
      addActive(nextSlider, slidersIndex + 1);
    } else {
      addActive(sliders, 0);
      addActive(nextSlider, 0);
    }
  }, ms);
};
