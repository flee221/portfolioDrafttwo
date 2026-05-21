export function mouseLocation(container, onMouseMove) {
  function handleMouseMove(event) {
    onMouseMove({
      x: event.clientX,
      y: event.clientY,
      //position inside browser
      pageX: event.pageX,
      pageY: event.pageY,
      //position relative to full page (in event of scrolling)
    });
  }
  function handleEnter() {
    container.addEventListener("mousemove", handleMouseMove);
    //listens for movement
  }

  function handleLeave() {
    container.removeEventListener("mousemove", handleMouseMove);
    //stops listening for movement
  }

  container.addEventListener("mouseenter", handleEnter);
  container.addEventListener("mouseleave", handleLeave);
  return () => {
    container.removeEventListener("mouseenter", handleEnter);
    container.removeEventListener("mouseleave", handleLeave);
    container.removeEventListener("mousemove", handleMouseMove);
  };
}
