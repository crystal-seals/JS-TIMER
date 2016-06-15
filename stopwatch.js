var i = 1;
var timer;
var divide = 100;

function startButton() {
  document.getElementById("start_button").addEventListener("click", function(){
    temp = true;
    timer = setInterval(increment, 100);
    function increment() {
      i++
      document.getElementById("results").innerHTML = i / 100;
    }
    document.getElementById("start_button").disabled = true;
  });
}

function stopButton() {
  document.getElementById("stop_button").addEventListener("click", function(){
    clearInterval(timer);
    document.getElementById("start_button").disabled = false;
  });
}

function resetButton() {
  document.getElementById("reset_button").addEventListener("click", function(){
    i = 0;
    clearInterval(timer);
    document.getElementById("results").innerHTML = "0.00";
    document.getElementById("start_button").disabled = false;
  });
}

stopButton();
resetButton();
startButton();
