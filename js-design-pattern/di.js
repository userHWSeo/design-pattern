// 클래스로 표현하자면
class 의존객체 {
  constructor(주입된객체) {
    주입된객체.콘솔();
  }
}

class 주입된객체 {
  콘솔() {
    console.log("나 없으면 안될껄 ?");
  }
}

const obj = new 주입된객체();
const result = new 의존객체(obj);

// 함수로 표현하자면
const funcA = (B) => {
  console.log(B);
};

const funcB = () => {
  return "B";
};

funcA(funcB());
