const products = [
  { name: "Solar Panel A" },
  { name: "Inverter B" },
  { name: "Battery C" },
  { name: "Controller D" },
];

const grid = document.getElementById("productGrid");

products.forEach((product) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<h3>${product.name}</h3>`;
  grid.appendChild(card);
});
