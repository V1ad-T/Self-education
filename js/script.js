
//---Примитивная капча---------------------------------------

function captcha1(){
let accessAllowed;
let captcha = prompt('Сколько будет 2+2?');
if (captcha == 4){
  accessAllowed = true;
}else{
  accessAllowed = false;
};

if (accessAllowed){
  console.log('user');
  alert('welcome!');
}else{
  console.log('BOT');
alert('Are You a BOT?');
};
};
//--------------------------------------------------------------------------------------------------------------------

//---Улучшеная капча---------------------------------------

function captcha2(){
let accessAllowed;

do{
let randomNamber = randomizer(8);
let captcha = prompt('Введите цифру ' + randomNamber);

if (captcha == randomNamber){
  accessAllowed = true;
}else{
  accessAllowed = false;
};

if (accessAllowed){
    console.log('user');
    alert('welcome!');
  }else{
      console.log('BOT');
      alert('Are You a BOT?');
  };
}while(!accessAllowed);

function randomizer(max){
  return Math.floor((Math.random() * Math.floor(max)) + 1);
  };
};
//-------------------------------------------------------------------------------------------------------------------

