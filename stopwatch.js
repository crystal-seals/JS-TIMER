var i = 1;
var timer;
var divide = 100;
var temp = false;



function initialiseStop() {
  document.getElementById("stop_button").addEventListener("click", function(){
    clearInterval(timer);
  });
}

document.getElementById("start_button").addEventListener("click", function(){
  temp = true;
  timer = setInterval(increment, 100);
  function increment() {
    i++
    document.getElementById("results").innerHTML = i / 100;
  }
});

function initialiseReset() {
  document.getElementById("reset_button").addEventListener("click", function(){
    i = 0;
    clearInterval(timer);
    document.getElementById("results").innerHTML = "0.00";
  });
}



initialiseStop();
initialiseReset();
//stopWatch()
