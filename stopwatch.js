
function stopWatch(time) {
  var i = 1;
  var timer;
  var divide = 100;
  var tester;

  // document.getElementById("start_button").addEventListener("click", function(){
  //   console.log('clicked!');
  //   document.getElementById("results").innerHTML = "The start button works";
  // });
  document.getElementById("stop_button").addEventListener("click", function(){
    document.getElementById("results").innerHTML = "The stop button works";
  });
  document.getElementById("reset_button").addEventListener("click", function(){
    document.getElementById("results").innerHTML = "The reset button works";
  });
  document.getElementById("start_button").addEventListener("click", function(){
    timer = setInterval(increment, 1000);
    function increment() {
      document.getElementById("results").innerHTML = i++;
      tester = true;
    }
  });

  // var i, timer, divide;
  //   i = 0;
  //   divide = 100;
  //   function start() {
  //       timer = setInterval('increment()',(1000 / divide)
  //     }
  //     function increment() {
  //       i++;
  //       document.getElementById('timer_out').innerHTML = (i / divide)
  //     }
}
stopWatch()
