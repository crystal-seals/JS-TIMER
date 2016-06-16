var i = 1;
var j = 240000;
var timer;
var divide = 100;

function startButton() {
  document.getElementById("stopwatch_start_button").addEventListener("click", function(){
    timer = setInterval(increment, 10);
    function increment() {
      i+=10;
      document.getElementById("results").innerHTML = (i / 1000).toFixed(2);
    }
    document.getElementById("stopwatch_start_button").disabled = true;
  });
}

function stopButton() {
  document.getElementById("stopwatch_stop_button").addEventListener("click", function(){
    clearInterval(timer);
    document.getElementById("stopwatch_start_button").disabled = false;
  });
}

function resetButton() {
  document.getElementById("stopwatch_reset_button").addEventListener("click", function(){
    clearInterval(timer);
    document.getElementById("results").innerHTML = "0.00";
    document.getElementById("stopwatch_start_button").disabled = false;
  });
}


function countdownButton() {
  document.getElementById("countdown_start_button").addEventListener("click", function(){
    timer = setInterval(increment, 10);
    function increment() {
      j = j - 10;
      document.getElementById("countdown_results").innerHTML = (j / 1000).toFixed(2);
    }
      document.getElementById("countdown_start_button").disabled = true;
  });
}



function stopCountdownButton() {
  document.getElementById("countdown_stop_button").addEventListener("click", function(){
    clearInterval(timer);
    document.getElementById("countdown_start_button").disabled = false;
  });
}

function resetCountdownButton() {
    document.getElementById("countdown_reset_button").addEventListener("click", function(){
    clearInterval(timer);
    document.getElementById("countdown_results").innerHTML = "240.00";
    document.getElementById("countdown_start_button").disabled = false;



  });
}

startButton();
stopButton();
resetButton();

countdownButton()
resetCountdownButton();
stopCountdownButton();
