import Lenis from "@studio-freight/lenis";

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function animate(time) {
  lenis.raf(time);
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

export default lenis;
