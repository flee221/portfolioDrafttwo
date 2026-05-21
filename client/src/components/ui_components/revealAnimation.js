import { mouseLocation } from "./mouseLocation.js";

export function revealAnimation(container, overlay) {
  const trailLength = 80;
  const size = 80;

  let trailData = [];
  let animationStart = false;

  function updateTrail(mouse) {
    trailData.unshift({ x: mouse.x, y: mouse.y });

    if (trailData.length > trailLength) {
      trailData.pop();
    }
    if (!animationStart) {
      animationStart = true;
      animateRun();
    }
  }

  function animateRun() {
    let maskLayers = trailData.map((point, index) => {
      const circlesize = size - index * 8;
      const opacity = 1 - index / trailLength;

      return `radial-gradient(
        circle 80px at ${point.x}px ${point.y}px,
        rgba(0,0,0,${opacity}) 0%,
        transparent 100%
      )`;
    });

    overlay.style.mask = maskLayers.join(",");
    overlay.style.webkitMask = overlay.style.mask;

    requestAnimationFrame(animateRun);
  }

  const stopMouse = mouseLocation(container, updateTrail);

  return () => {
    stopMouse();
  };
}
