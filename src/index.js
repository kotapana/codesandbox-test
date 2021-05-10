// アロー巻数はこんな感じで使える
const func = (str) => {
  return str;
};

// 分割代入
const myP = {
  name: "kota",
  age: 23
};
const { name, age } = myP;
console.log(`僕は${name}、年は${age}です。`);

// 初期値の設定
const fn = (name = "ゲスト") => {
  console.log(`こんにちは${name}`);
};
fn();

// スプレット構文
// まとめる
const arr1 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr2] = arr1;
console.log(arr2);

// コピー & 結合
const arr3 = [1, 2];
const arr4 = [3, 4];
const arr5 = [...arr3, ...arr4];
console.log(arr5);

// map & filter
const nameArr = ["高野", "滉大", "kota"];
nameArr.map((name, index) => {
  console.log(`${index}番目は${name}です`);
});

// 三項演算子
const num = 10000;
console.log(typeof num === "number" ? num.toLocaleString() : "不正解");

// 論理演算子の詳細
// || は左側がfalseなら右側を返す
const numm = null;
console.log(numm || "nullです。");

// && は左側がtrueなら右側を返す
const numm2 = 1;
console.log(numm2 && "数値です");
