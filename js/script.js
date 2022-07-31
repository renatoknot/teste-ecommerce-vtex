$(document).ready(function () {
  $(".grid-middle").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    arrows: true,
    centerMode: true,
    centerPadding: "40px",
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: "unslick",
      },
    ],
  });
});

const renderElements = (products) => {
  const listProducts = document.querySelector(".list-products");

  products.map((product) => {
    const li = document.createElement("li");
    li.className = "product-item";

    const img = document.createElement("img");
    img.setAttribute("src", product.items[0].images[0].imageUrl);
    img.setAttribute("alt", product.productName);

    const productName = document.createElement("p");
    productName.appendChild(document.createTextNode(product.productName));
    productName.className = "product-name";

    const productPrice = document.createElement("p");
    productPrice.appendChild(
      document.createTextNode(
        product.items[0].sellers[0].commertialOffer.Price.toLocaleString(
          "pt-br",
          { style: "currency", currency: "BRL" },
        ),
      ),
    );
    productPrice.className = "product-price";

    li.appendChild(img);
    li.appendChild(productName);
    li.appendChild(productPrice);

    listProducts.appendChild(li);
  });
};

const getProducts = () =>
  fetch("./products.json")
    .then((response) => response.json())
    .then((products) => renderElements(products));

getProducts();

setTimeout(() => {
  $(".list-products").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    arrows: true,
    centerMode: true,
    centerPadding: "60px",
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          // dots: true,
          // infinite: true,
          // arrows: true,
          // centerMode: true,
          // centerPadding: "60px",
          // adaptiveHeight: true,
        },
      },
    ],
  });
}, 1000);
