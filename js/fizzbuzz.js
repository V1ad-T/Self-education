      // Императивные варианты
//    Структурное программирование

for (let i = 1; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if ( i % 5 === 0) {
     console.log('Buzz');
  } else {
    console.log(i)
  }
}


//Программирование с флагами

// function isFizz(n) {
//   if ( n % 3 === 0 ) {
//     return true;
//   }
//   return false;
// }
// function isBuzz(n) {
//   if ( n % 5 === 0 ) {
//     return true;
//   }
//   return false;
// }

// function isFizzBuzz(n) {
//   if ( n % 3 === 0 && n % 5 === 0) {
//     return true;
//   }
//   return false;
// }

// for ( let i = 1; i < 100; i++) {
//   switch(true){
//     case isFizzBuzz(i):
//       console.log('FizzBuzz');
//       break;
//     case isFizz(i):
//       console.log('Fizz');
//       break;
//     case isBuzz(i):
//       console.log('Buzz');
//       break;
//     default:
//       console.log(i);
//   }
// }

//       Декларативний вариант
//   Функциональное программирование

// const gen = (n, w) => (num) => num % n === 0 ? w : '';
// const fizz = gen(3, 'Fizz');
// const buzz = gen(5, 'Buzz');
// [...Array(99).keys()].map( i => i+1).forEach(i => console.log(fizz(i)+buzz(i) || i));



// OOП 

// const MAX_NUM = 100;

// class Tag /* Implements Value */ {
//   constructor(_value) {
//     this.value = _value;
//   }
// }

// class Printer {
//   constructor(_context) {
//     this.context = _context;
//   }
//   print() {
//     console.log(this.context.value);
//   }
// }

// class DivCondition /*impliments Condition, Truthy*/ {
//   constructor(_divider) {
//     this.divider = _divider;
//   }
//   isTruthy(num){
//     return num % this.divider === 0;
//   }
// }

// class AndStrategy /*Impliments strategy, Truthy */{
//   constructor(_conditionіOrStrategys) {
//     this.conditions = _conditionіOrStrategys;
//   }
//   isTruthy(num) {
//     for(let i in this.conditions) {
//       if (!this.conditions[i].isTruthy(num)) {
//         return false;
//       }
//     }
//     return true;
//   }
// }

// class TagNumRule /* inplimentts Rule */ {
//   constructor(_tag, _strategy) {
//     this.strategy = _strategy;
//     this.tag = _tag;
//   }
//   isSuccess(num) {
//     return this.strategy.isTruthy(num);
//   }
// }

// class TagNumRulesCollection /* Implements collection */ {
//   constructor(_tags) {
//     this.tags =_tags;
//   }
//   find(num, defaultValue) {
//     for(let i in this.tags) {
//       if (this.tags[i].isSuccess(num)) {
//         return this.tags[i].tag;
//       }
//     }
//     return defaultValue;
//   }
// }

// const numTags = new TagNumRulesCollection([
//   new TagNumRule(new Tag('FizzBuzz'), new AndStrategy([new DivCondition(3), new DivCondition(5)])),
//   new TagNumRule(new Tag('Fizz'), new AndStrategy([new DivCondition(3)])),
//   new TagNumRule(new Tag('Buzz'), new AndStrategy([new DivCondition(5)])),
  
// ]);

// for(let i = 1; i < MAX_NUM; i++) {
// new Printer(numTags.find(i, new Tag(i))).print();
// };

//----------------------------------------------------------------------
// Из Ютуба не выводит каждое значение в отдельной строке.

// console.log(...[...Array(99).keys()].map(i=>(++i%3==0?"Fizz":'')+(i%5==0?"Buzz":'') || i))