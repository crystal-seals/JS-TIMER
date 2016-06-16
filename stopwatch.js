var i = 1;
var timer;
var divide = 100;

function startButton() {
  document.getElementById("start_button").addEventListener("click", function(){
    timer = setInterval(increment, 10);
    function increment() {
      i+=10;
      document.getElementById("results").innerHTML = (i / 1000).toFixed(2);
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
    clearInterval(timer);
    document.getElementById("results").innerHTML = "0.00";
    document.getElementById("start_button").disabled = false;
  });
}


// function countdownButton() {
//   document.getElementById("countdown_button").addEventListener("click", function(){
//     timer = setInterval(increment, 10);
//     function increment() {
//       i-=10;
//       document.getElementById("countdown_results").innerHTML = i;
//     }
//       document.getElementById("countdown_button").disabled = true;
//   });
// }

// function resetCountdownButton() {
//     document.getElementById("reset_button").addEventListener("click", function(){
//     document.getElementById("countdown_results").innerHTML = "10.00";
//     document.getElementById("start_button").disabled = false;
//   });
// }

startButton();
stopButton();
resetButton();

// countdownButton()
// resetCountdownButton();
