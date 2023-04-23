const shoesFactory = (brand, name) => {
  return [brand, name];
};

console.log(shoesFactory("Nike", "Jordan"));
// [ 'Nike', 'Jordan' ]
console.log(shoesFactory("Converse", "Chuck Taylor"));
// [ 'converse', 'Chuck Taylor' ]

const shoesMethodFactory = (shoeData) => {
  const brand = shoeData[0];
  const name = shoeData[1];

  if (brand === "Nike") {
    console.log("This Shoes is discounting !");
  } else if (name === "Chuck Taylor") {
    console.log("Chuck Taylor is out of stock...");
  }
  return [brand, name];
};

const jordanShoes = shoesFactory("Nike", "Jordan");
const chuckShoes = shoesFactory("Converse", "Chuck Taylor");

shoesMethodFactory(jordanShoes);
shoesMethodFactory(chuckShoes);
