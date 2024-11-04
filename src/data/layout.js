export default (page) => {
  return {
    contacts: {
      alter: page === "index",
      map: {
        alt: "Мы на карте",
        desktopHeight: 400,
        desktopWidth: 1440,
        height: 362,
        name: "map",
        tabletHeight: 400,
        tabletWidth: 768,
        width: 320,
      },
      pin: {
        alt: "Метка адреса на карте",
        className: "map__pin",
        height: 53,
        name: "map-pin",
        tabletHeight: 106,
        tabletWidth: 113,
        width: 57,
      },
    },
    menu: [
      {
        id: "index",
        title: "Главная",
      },
      {
        id: "catalog",
        title: "Каталог продукции",
      },
      {
        id: "programs",
        title: "Подбор программы",
      },
    ],
    social: {
      className: "main-footer__social",
      items: [
        {
          id: "vkontakte",
          title: "Вконтакте",
          url: "https://vk.com/htmlacademy",
        },
        {
          id: "youtube",
          title: "Ютуб",
          url: "https://www.youtube.com/@HTMLAcademyTV",
        },
        {
          id: "telegram",
          title: "Телеграмм",
          url: "https://t.me/htmlacademy",
        },
      ],
    },
  };
};
