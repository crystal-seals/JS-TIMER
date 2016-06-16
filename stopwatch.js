var i = 1;
var j = 240000;
var countdown_timer;
var stopwatch_timer;
var divide = 100;
var modal = document.getElementById("modal");

function startButton() {
  document.getElementById("stopwatch_start_button").addEventListener("click", function(){
    stopwatch_timer = setInterval(increment, 10);
    function increment() {
      i+=10;
      document.getElementById("results").innerHTML = (i / 1000).toFixed(2);
    }
    document.getElementById("stopwatch_start_button").disabled = true;
  });
}

function stopButton() {
  document.getElementById("stopwatch_stop_button").addEventListener("click", function(){
    clearInterval(stopwatch_timer);
    document.getElementById("stopwatch_start_button").disabled = false;
  });
}

function resetButton() {
  document.getElementById("stopwatch_reset_button").addEventListener("click", function(){
    clearInterval(stopwatch_timer);
    i = 0;
    document.getElementById("results").innerHTML = "0.00";
    document.getElementById("stopwatch_start_button").disabled = false;
  });
}


function countdownButton() {
  document.getElementById("countdown_start_button").addEventListener("click", function(){
    countdown_timer = setInterval(increment, 10);
    function increment() {
      j=j-10;
      if (j < 235000) {
        j = 0;
        document.getElementById("modal").style.display= "block";
        clearInterval(countdown_timer);
        j = 240000;
        document.getElementById("countdown_results").innerHTML = "240.00";
        document.getElementById("countdown_start_button").disabled = false;
      };
      document.getElementById("countdown_results").innerHTML = (j / 1000).toFixed(2);
    }
      document.getElementById("countdown_start_button").disabled = true;
  });
}



function stopCountdownButton() {
  document.getElementById("countdown_stop_button").addEventListener("click", function(){
    clearInterval(countdown_timer);
    document.getElementById("countdown_start_button").disabled = false;
  });
}

function resetCountdownButton() {
    document.getElementById("countdown_reset_button").addEventListener("click", function(){
    clearInterval(countdown_timer);
    j = 240000;
    document.getElementById("countdown_results").innerHTML = "240.00";
    document.getElementById("countdown_start_button").disabled = false;



  });
}

startButton();
stopButton();
resetButton();

countdownButton()
stopCountdownButton();
resetCountdownButton();
