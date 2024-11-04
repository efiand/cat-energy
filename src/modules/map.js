window.ymaps.ready(() => {
  const mapElement = document.querySelector(".map");
  const template = mapElement.querySelector("template").innerHTML;
  const pictureElement = mapElement.querySelector("picture");

  const map = new window.ymaps.Map(mapElement, {
    center: [59.9387165, 30.3230474],
    controls: [],
    zoom: 16,
  });

  map.geoObjects.add(
    new window.ymaps.Placemark(map.getCenter(), null, {
      iconLayout: window.ymaps.templateLayoutFactory.createClass(template),
    }),
  );
  map.behaviors.disable("scrollZoom");

  pictureElement.remove();
});
