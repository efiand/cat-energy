export default {
  additional: {
    items: [
      {
        box: "1 упаковка (100 г)",
        name: "Сахарозаменитель",
        price: 200,
      },
      {
        box: "5 литров",
        name: "Питьевая вода",
        price: 50,
      },
      {
        box: "1 литр",
        name: "Молоко",
        price: 100,
      },
      {
        box: "1 упаковка (30 г)",
        name: "Витамины",
        price: 300,
      },
    ],
  },
  catalog: {
    items: [
      {
        image: {
          alt: "Курица - 500 грамм",
          name: "product-pro-500-chicken",
        },
        name: "Cat Energy PRO 500 г",
        price: 700,
        taste: "Курица",
        weight: 500,
      },
      {
        image: {
          alt: "Курица - 1000 грамм",
          name: "product-pro-1000-chicken",
        },
        name: "Cat Energy PRO 1000 г",
        price: 1000,
        taste: "Курица",
        weight: 1000,
      },
      {
        image: {
          alt: "Рыба - 500 грамм",
          name: "product-pro-500-fish",
        },
        name: "Cat Energy PRO 500 г",
        price: 700,
        taste: "Рыба",
        weight: 500,
      },
      {
        image: {
          alt: "Рыба - 1000 грамм",
          name: "product-pro-1000-fish",
        },
        name: "Cat Energy PRO 1000 г",
        price: 1000,
        taste: "Рыба",
        weight: 1000,
      },
      {
        image: {
          alt: "Гречка - 500 грамм",
          name: "product-slim-500-buckwheat",
        },
        name: "Cat Energy SLIM 500 г",
        price: 400,
        taste: "Гречка",
        weight: 500,
      },
      {
        image: {
          alt: "Гречка - 1000 грамм",
          name: "product-slim-1000-buckwheat",
        },
        name: "Cat Energy SLIM 1000 г",
        price: 700,
        taste: "Гречка",
        weight: 1000,
      },
      {
        image: {
          alt: "Рис - 500 грамм",
          name: "product-slim-500-rice",
        },
        name: "Cat Energy SLIM 500 г",
        price: 500,
        taste: "Рис",
        weight: 500,
      },
    ].map((item) => ({
      ...item,
      className: "catalog__card",
      image: {
        ...item.image,
        desktopHeight: 210,
        desktopWidth: 169,
        height: 107,
        tabletHeight: 210,
        tabletWidth: 200,
        width: 140,
      },
    })),
    pageHeader: {
      title: "Каталог продукции",
    },
  },
  title: "Cat energy - Catalog",
};
