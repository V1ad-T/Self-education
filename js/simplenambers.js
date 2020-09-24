const namber = 100;
let arreqOfSimpleNambers = [1, 2, 3, 5, 7];
for (let i = 10; i < namber; i ++) {
  if (i % 1 === 0 && i % i === 0) {
    if (i % 2  === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0) continue;
    arreqOfSimpleNambers.push(i);
  }
};
console.log(arreqOfSimpleNambers);