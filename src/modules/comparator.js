import { handleMoving } from "../lib/moving";

document.querySelectorAll(".comparator").forEach((comparatorElement) => {
  const buttonElement = comparatorElement.querySelector(".comparator__button");

  let fullWidth = 0;
  let width = 0;

  handleMoving({
    element: buttonElement,
    onMove({ x }) {
      width += x;
      const position = Math.max(Math.min((width / fullWidth) * 100, 100), 0);
      comparatorElement.style.setProperty("--position", `${position}%`);
    },
    onStart() {
      const position = parseInt(
        comparatorElement.style.getPropertyValue("--position"),
        10,
      );
      fullWidth = comparatorElement.clientWidth;
      width = (fullWidth * position) / 100;
    },
  });
});
