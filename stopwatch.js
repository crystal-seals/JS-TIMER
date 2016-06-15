function stopWatch(time) {
  document.getElementById("start_button").addEventListener("click", function(){
    console.log('clicked!');
    document.getElementById("results").innerHTML = "The start button works";
  });
  document.getElementById("stop_button").addEventListener("click", function(){
    document.getElementById("results").innerHTML = "The stop button works";
  });
  document.getElementById("reset_button").addEventListener("click", function(){
    document.getElementById("results").innerHTML = "The reset button works";
  });
}
stopWatch()
