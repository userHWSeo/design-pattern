const shoesBrand = (arr) => {
  console.log(`${arr[0]} 브랜드의 ${arr[1]} 제품을 원하시는군요 !`);
  console.log(`감사합니다 손님 좋은 하루 되세요 ~`);
};

const nikeShoes = () => {
  console.log("이건 세일 중이에요 !");
  return ["Nike", "Jordan"];
};

const vansShoes = () => {
  console.log("260 사이즈는 품절이에요 ㅠ");
  return ["Vans", "Old School"];
};

shoesBrand(nikeShoes());
shoesBrand(vansShoes());
