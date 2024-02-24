let zSpacing = -1600;
let xSpacing = 0;
const frames = document.getElementsByClassName("frame");
const array = Array.from(frames);
let zvals = [];

// array.forEach((f, i) => {
//   f.setAttribute("style", `transform: translate3d(0px, 0, ${i * zSpacing}px)`);
// });
window.scrollTo(0, 1);
window.document.onscroll = function () {
  const top = document.documentElement.scrollTop;
  let delta = top;
  console.log(delta);
  array.forEach((n, i) => {
    const zval = i * zSpacing + delta * 4;
    const xval = delta / 2;
    const opacity = zval < -600 || zval >= 800 ? 0.2 : 1;
    const transform = `translate3d(0px, 0, ${zval}px)`;
    frames[i].setAttribute(
      "style",
      `transform: ${transform}; opacity: ${opacity}`
    );
  });
  zvals = [];
};

document.querySelectorAll('video').forEach((t) => t.addEventListener('click', (e) => {e.target.play(); console.log(e.target)}));