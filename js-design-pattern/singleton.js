const Singleton = (function () {
  let instance;
  let secret = "URL 혹은 중요한 녀석";
  function init() {
    return {
      foo: function () {
        console.log(secret);
      },
      publicProp: "single value",
    };
  }
  return {
    getInstance: function () {
      if (!instance) instance = init();
      return instance;
    },
  };
})();

let test = Singleton.getInstance();
let test2 = Singleton.getInstance();
console.log(test === test2);
// -> true
console.log(test);

const a = {
  test: 1,
};

const b = a;
const c = b;

console.log(a === b);
console.log(b === c);
console.log(a === c);
// true

//몽고 디비 패턴 예시

Mongoose.prototype.connect = function (uri, options, callback) {
  const _mongoose = this instanceof Mongoose ? this : mongoose;
  const conn = _mongoose.connection;
  return _mongoose._promiseOrCallback(callback, (cb) => {
    conn.openUri(uri, options, (err) => {
      if (err != null) {
        return cb(err);
      }
      return cb(null, _mongoose);
    });
  });
};
// 메인 모듈
const mysql = require("mysql");
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "example.org",
  user: "kundol",
  password: "secret",
  database: "승철이디비",
});
pool.connect();
// 모듈 A
pool.query(query, function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results[0].solution);
});
// 모듈 B
pool.query(query, function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results[0].solution);
});
