let zSpacing = -1600;
let xSpacing = 0;
const frames = document.getElementsByClassName("frame");
const array = Array.from(frames);

window.scrollTo(0, 1);
window.document.onscroll = function () {
  const top = document.documentElement.scrollTop;
  let delta = top;
  array.forEach((n, i) => {
    const zval = i * zSpacing + delta * 4;
    const opacity = zval < -600 || zval >= 800 ? 0.2 : 1;
    const transform = `translate3d(0, 0, ${zval}px)`;
    frames[i].setAttribute(
      "style",
      `transform: ${transform}; opacity: ${opacity}`
    );
  });
};

let current = 0;
const slides = document.querySelectorAll('.slider > img');
const slidesCount = Array.from(slides).length;

const updateSlides = () => {
  slides.forEach((slide, index) => {
    if(index === current){
      slide.style.display = 'block';
    }else{
      slide.style.display = 'none';
    }
  });
};

document.querySelectorAll('.prev-slide').forEach((p) => {
  p.addEventListener('click', () => {
    current = current === 0 ? slidesCount - 1 : current -= 1;
    updateSlides();
  })
});

document.querySelectorAll('.next-slide').forEach((p) => {
  p.addEventListener('click', () => {
    current = current === slidesCount - 1 ? 0 : current += 1;
    updateSlides();
  })
});

updateSlides();