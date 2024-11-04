document.querySelectorAll(".navigation").forEach((navElement) => {
  const togglerElement = navElement.querySelector(".navigation__toggler");
  togglerElement.addEventListener("click", () => {
    navElement.classList.toggle("navigation--opened");
  });

  // Имитация реального поведения при догрузке скрипта
  setTimeout(() => navElement.classList.remove("navigation--no-js"), 1000);
});
