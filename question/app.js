// 基礎編　問題
// Q1　変数
let nickname = '萌'
let age = 28

console.log('私のニックネームは'+ nickname + 'です。年齢は' + age + '歳です。');

// Q2 配列
let languages = [ 'JavaScript', 'PHP', 'Ruby', 'Python', 'Go' ];

console.log('私の好きな言語は' + languages[0] + 'です。次は' + languages[3] + 'を勉強してみたいです。');

// Q3 オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

// Q4 配列 × オブジェクト
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1])

// Q5 四則演算
let totalAge = playerList[0].age + playerList[1].age + playerList[2].age
totalAge /= 3;

console.log(totalAge);

// Q6 関数
function sayHello(){
  console.log('Hello');
}

sayHello();

const sayWorld = function (){
  console.log('World');
}

sayWorld();

// Q7 メソッド
user.birthday = '2000-09-27'

// console.log(user);
// console.log(user.birthday);

user.sayHello = function() {
  console.log('Hello！');
}

user.sayHello();

// Q8 引数
let calc = {};

calc.add = function(x, y) {
  let sum = x + y;
  console.log(sum)
}

calc.add(2, 5);

calc.subtract = function(x, y) {
  let difference = x - y;
  console.log(difference)
}

calc.subtract(15, 5);

calc.multiply = function(x, y) {
  let product = x * y;
  console.log(product)
}

calc.multiply(7, 7);

calc.divide = function(x, y) {
  let quotient = x / y;
  console.log(quotient)
}

calc.divide(10, 2);
// console.log(calc);

// Q9 返り値
function  remainder(x, y) {
  return x % y;
}

let x = 5;
let y = 3;
let result = remainder(x, y);

console.log(x + ' を ' + y + ' で割った余りは ' + result + ' です。');

// Q10 スコープ
function foo() {
  let x = 1;
}
console.log(x);
// 関数内で定義した変数は、その関数内のみスコープが有効となります。
// よって、上記の変数xは関数fooで定義されているので、
// 関数の外から変数 x を参照しようとしても見つけることができず、エラーとなります。

// 応用編 問題
// Q1 標準組み込みオブジェクト
let randomNumber = Math.floor(Math.random() * 10);

console.log(randomNumber);

// Q2 コールバック関数
setTimeout(function() {
  console.log('Hello World!');
}, 3000);

// Q3 if
let num = 2
if (num > 0) {
   console.log('num is greater than 0')
} else if (num < 0) {
   console.log('num is less than 0')
} else if (num == 0) {
   console.log('num is 0')
}

// Q4 for
let numbers = [];
for (let i = 0; i < 100; i++) {
  numbers.push(i);
}

console.log(numbers);

// Q5 for × if
let mixed = [4, '2', 5, '8', '9', 0, 1];
for (let i = 0; i < mixed.length; i++) {
  if (typeof mixed[i] === 'number' && mixed[i] % 2 == 0) {
    console.log('even');
  } else if (typeof mixed[i] === 'number' && mixed[i] % 2 !== 0) {
    console.log('odd');
  } else {
    console.log('not number');
  }
} 