import { getProducts } from "./database.js";

document.addEventListener("click", (clickItem) => {
  const itemClicked = clickItem.target;
  if (itemClicked.id.startsWith("product")) {
    const [, productId] = itemClicked.id.split("--");

    for (const product of products) {
      if (product.id === parseInt(productId)) {
        window.alert(`${product.name} is $${product.price}`);
      }
    }
  }
});

const products = getProducts();

export const Products = () => {
  let html = "<ul>";

  for (const product of products) {
    html += `<li id="product--${product.id}">${product.name}</li>`;
  }

  html += "</ul>";

  return html;
};
