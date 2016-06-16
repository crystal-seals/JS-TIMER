test('testing the testing environment', function(assert) {
  var actual = 1
  var expected = 1
  assert.equal(actual, expected, 'test environment is set up correctly')
});

test('time is initialised to zero', function(assert) {
  var time = document.getElementById('results').innerHTML;
  assert.equal(time, '0.00');
});

test('start triggers timer', function(assert) {
  var done = assert.async();
  var start_button = document.getElementById("start_button");

  start_button.click();
  setTimeout(function() {
    var time = document.getElementById('results').innerHTML;
    assert.notEqual(time, '0.00');

    done();
  }, 300);
});

test('stop pauses timer', function(assert) {
  var done = assert.async();

  var start_button = document.getElementById("start_button");
  var stop_button = document.getElementById("stop_button");

  start_button.click();
  setTimeout(function() {
    stop_button.click();
    var time1 = document.getElementById('results').innerHTML;

    setTimeout(function() {
      var time2 = document.getElementById('results').innerHTML;
      assert.equal(time1, time2);

      done();
    }, 300);
  }, 300);
});

test('reset sets a paused timer back to zero', function(assert) {
  document.getElementById('results').innerHTML = '9.45';
  reset_button.click();

  var time = document.getElementById('results').innerHTML;
  assert.equal(time, 0.00);
});

test('reset stops a running timer and sets it back to zero', function(assert) {
  var done = assert.async();

  start_button.click();

  setTimeout(function() {
    reset_button.click();
    var time = document.getElementById('results').innerHTML;
    assert.equal(time, 0.00);
    done();
  }, 300);
});

// test('start timer runs', function(assert) {
//   var done = assert.async();
//   var start_button = document.getElementById("start_button");
//   document.getElementById("start_button").addEventListener("click", function() {
//     var actual = tester;
//     var expected = true;
//     assert.equal(actual, expected, "the start timer runs");
//     done();
//   })
// })
//
// test('reset button injects HTML into results div', function(assert) {
//   var done = assert.async();
//   var reset_button = document.getElementById("reset _button")
//   document.getElementById("reset_button").addEventListener("click", function(){
//     var actual = document.getElementById("results").innerHTML;
//     var expected = "0.00";
//     assert.equal(actual, expected, "the reset button injects");
//     done();
//   })
// })
