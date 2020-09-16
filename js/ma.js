function startWork(){
let size1 = prompt("Укажите количество символов!");

function clunk(times) {
  var num = times;
  while (num > 0) {
  display("clunk");
  num = num - 1;
  }
 }
 function thingamajig(size) {
  var facky = 1;
  clunkCounter = 0;
  if (size == 0) {
  display("clank");
  } else if (size == 1) {
  display("thunk");
  } else {
  while (size > 1) {
  facky = facky * size;
  size = size - 1;
  }
  clunk(facky);
  }
 }
 function display(output) {
  console.log(output);
  clunkCounter = clunkCounter + 1;
 }
 var clunkCounter = 0;
 thingamajig(size1);
 console.log(clunkCounter);

 alert("Количество вариантов " + clunkCounter);
};

idTimer = setTimeout(function(){document.getElementById('info').innerHTML = 'Машина считающая количиство комбинаций елементов из учебника по JavaScript';}, 5000);