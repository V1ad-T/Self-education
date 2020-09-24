/* написать код который будет проверять число "X" на делители без остатка
1. +запрос числа у пользователя
2. проверка на числа на 0
3. +проверка числа на string( реализовано преобразование)
4. провкрка числа на undefind
5. +вычисление делителей
6. +вывод результата*/

function doChek() {
console.log("Start");
let x = putInNamber();
let  arreyD = [];


if ( x ) {
  console.log("GO");
  calculet(x);
} else {
    console.log('vasya');
    putInNamber();
};

function putInNamber() {
  let n = +prompt('Введите число для поиска', 12);
  return n;
};

function calculet(x) {
  for ( let i = 1; i <= x; i++) {
    if ( x % i === 0 ) {
      arreyD.push(i);
    }
  }

};

console.log(arreyD);
alert(arreyD);
};