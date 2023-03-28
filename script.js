const counter = document.getElementById('counter');
const increment = document.getElementById('incrementCounter');
const decremnet = document.getElementById('decremnetCounter');
const resert = document.getElementById('resetCounter');
const decremnetCounter = () =>{
  const value = Number(counter.innerText);
  if(value > 0){
    counter.innerText = value - 1;
  }else{
    alert("Nagative value are not allwoed");
  }
}
const incrementCounter = () =>{
  const value = Number(counter.innerText);
  if(value >= 10){
    alert("10+ value are not allowd");
  }else{
    counter.innerText = value + 1;
  }
}
const resetCounter = () =>{
  counter.innerText = 0;
}
increment.addEventListener('click',incrementCounter);
decremnet.addEventListener('click',decremnetCounter);
resert.addEventListener('click',resetCounter);

