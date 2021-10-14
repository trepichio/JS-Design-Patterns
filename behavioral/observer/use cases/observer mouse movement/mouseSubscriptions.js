import { MousePositionObservable } from "./MousePostitionObservable.js";

const mousePositionObservable = new MousePositionObservable();

mousePositionObservable.subscribe(
  (x, y) => {
    const circle = document.querySelector('.circle');
    window.setTimeout(() => {
      circle.style.transform = `translate(${x}px, ${y}px)`;
    }, 1 * 1000)
  });

// Update mouse position container to show the mouse position values
mousePositionObservable.subscribe(
  (x, y) => {
    const board = document.querySelector('.mouse-position .position');
    board.innerHTML = `
      <div>
        <div>ClientX: ${x}</div>
        <div>ClientY: ${y}</div>
      </div>
    `;
  });
