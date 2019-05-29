var time = 1;
var minutes = 0;
var int;
var clear;
var disableStart = document.getElementById('startBtn');
var disableStop = document.getElementById('stopBtn');
var disableReset = document.getElementById('resetBtn');

disableStop.setAttribute("disabled", true);
disableReset.setAttribute("disabled", true);
function start(){
  disableStart.setAttribute("disabled", true);
  disableStop.removeAttribute("disabled", false);
  disableReset.removeAttribute("disabled", false);
  int = setInterval(function(){
  document.getElementById('seconds').innerHTML = time;
  time++;
  if (time === 11) {
    document.getElementById('tenSeconds').innerHTML = "";
  }else if (time === 60) {
    time = 0;

  }else if (time === 1){
    document.getElementById('tenSeconds').innerHTML = 0;
    minutes++
    document.getElementById('minutes').innerHTML = minutes;
  }
}, 1000);
}
function stop(){
  disableStart.removeAttribute("disabled", false);
    clear = setTimeout(function(){
      clearTimeout(int);
    }, 0);
}
function reset(){
    time = 1;
    minutes = 0;
    document.getElementById('seconds').innerHTML = 0;
    document.getElementById('tenSeconds').innerHTML = 0;
    document.getElementById('minutes').innerHTML = 0;
}
