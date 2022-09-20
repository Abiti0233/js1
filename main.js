const time = document.getElementById('time');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let startTime;
let stopTime = 0;
let timeoutID;

function displayTime(){
  const currentTime = new Date(Date.now() - startTime + stopTime);
  const h = String(currentTime.getHours()-9)
  const m = String(currentTime.getMinutes())
  const s = String(currentTime.getSeconds())
  const ms = String(currentTime.getMilliseconds())

  time.textContent = `${h} : ${m} : ${s} : ${ms}`;
  timeoutID = setTimeout(displayTime, 10);
}

function eventA(){
  start.disabled = true;
  stop.disabled = false;
  reset.disabled = true;
  startTime = Date.now();
  displayTime();
}


function eventB(){
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = false;
  clearTimeout(timeoutID);
  stopTime += (Date.now() -startTime);
}

function eventC(){
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = true;
  time.textContent = '0 : 0 : 0 : 0';
  stopTime = 0;
}


