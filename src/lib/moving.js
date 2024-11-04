const getCoordsObject = (event) => {
  const coordsObject = event.changedTouches?.[0] || event;
  return {
    x: coordsObject.clientX,
    y: coordsObject.clientY,
  };
};

export const handleMoving = ({ element, onMove, onStart }) => {
  const startHandler = (event) => {
    event.preventDefault();

    const coords = getCoordsObject(event);

    onStart(coords);

    const moveHandler = (dropEvent) => {
      dropEvent.preventDefault();

      const { x, y } = getCoordsObject(dropEvent);
      const shifts = {
        x: x - coords.x,
        y: y - coords.y,
      };

      coords.x = x;
      coords.y = y;

      onMove(shifts);
    };

    const stopHandler = (upEvent) => {
      upEvent.preventDefault();

      document.removeEventListener("mousemove", moveHandler);
      document.removeEventListener("touchmove", moveHandler);
      document.removeEventListener("mouseup", stopHandler);
      document.removeEventListener("touchend", stopHandler);
    };

    // Добавление обработчиков перемещения мышью либо тачем
    if (event.changedTouches) {
      document.addEventListener("touchmove", moveHandler, {
        passive: false,
      });
      document.addEventListener("touchend", stopHandler, { passive: false });
    } else {
      document.addEventListener("mousemove", moveHandler);
      document.addEventListener("mouseup", stopHandler);
    }
  };

  element.addEventListener("mousedown", startHandler);
  element.addEventListener("touchstart", startHandler, { passive: false });
};
