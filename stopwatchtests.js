var start_button = document.getElementById("stopwatch_start_button");
var stop_button = document.getElementById("stopwatch_stop_button");
var reset_button = document.getElementById("stopwatch_reset_button");

var countdown_start_button = document.getElementById("countdown_start_button");


test('testing the testing environment', function(assert) {
  var actual = 1
  var expected = 1
  assert.equal(actual, expected, 'test environment is set up correctly')
});

test('time is initialised to zero', function(assert) {
  var time = document.getElementById('results').innerHTML;
  assert.equal(time, '0.00', 'time is initialised to zero');
});

test('start stopwatch button triggers timer', function(assert) {
  var done = assert.async();
  stopwatch_start_button.click();

  setTimeout(function() {
    var actual = document.getElementById('results').innerHTML;
    assert.ok(actual > 0.00, 'start stopwatch button triggers timer');
    done();
  }, 300);
});

test('stop stopwatch button pauses timer', function(assert) {
  var done = assert.async();
  stopwatch_start_button.click();

  setTimeout(function() {
    stopwatch_stop_button.click();
    var time1 = document.getElementById('results').innerHTML;

    setTimeout(function() {
      var time2 = document.getElementById('results').innerHTML;
      assert.equal(time1, time2), 'stop stopwatch button pauses timer';

      done();
    }, 300);
  }, 300);
});

test('reset stopwatch button sets a paused timer back to zero', function(assert) {
  document.getElementById('results').innerHTML = '9.45';
  stopwatch_reset_button.click();
  var time = document.getElementById('results').innerHTML;
  assert.equal(time, 0.00), 'reset stopwatch button sets a paused timer back to zero';
});


test('reset stopwatch button stops a running timer and sets it back to zero', function(assert) {
  var done = assert.async();
  stopwatch_start_button.click();
  setTimeout(function() {
    stopwatch_reset_button.click();
    var time = document.getElementById('results').innerHTML;
    assert.equal(time, 0.00), 'reset stopwatch button stops a running timer and sets it back to zero';
    done();
  }, 300);
});

test('start countdown button starts countdown going', function(assert) {
  var done = assert.async();
  countdown_reset_button.click();

  setTimeout(function() {
    var time = document.getElementById('countdown_results').innerHTML;
    assert.notEqual(time, '10.00', "countdown button starts countdown going");
    done();
  }, 300);
});

test('stop countdown button stops countdown', function(assert) {
  var done = assert.async();
  countdown_start_button.click();

  setTimeout(function() {
    countdown_stop_button.click();
    var time1 = document.getElementById('countdown_results').innerHTML;

    setTimeout(function() {
      var time2 = document.getElementById('countdown_results').innerHTML;
      assert.equal(time1, time2, "stop button stops countdown");
      done();
    }, 300);
  }, 300);
});


test('reset countdown button resets countdown timer', function(assert) {
  document.getElementById('countdown_results').innerHTML = '5.00';
  countdown_reset_button.click();
  var time2 = document.getElementById('countdown_results').innerHTML;
  assert.equal(time2, "0.00", "countdown button is set back to 0");
});

// test('check to see if modal has been triggered', function(assert) {
//   var done = assert.async();
//   countdown_start_button.click();
//   setTimeout(function() {
//       var a = document.getElementById('countdown_finished_modal').style.display;
//       assert.equal(a, "block", "var a equals block");
//       done();
//   }, 10000);
// });
