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
  assert.equal(time, '0.00');
});

test('start triggers timer', function(assert) {
  var done = assert.async();
  stopwatch_start_button.click();

  setTimeout(function() {
    var actual = document.getElementById('results').innerHTML;
    assert.ok(actual > 0.00);
    done();
  }, 300);
});

test('stop pauses timer', function(assert) {
  var done = assert.async();
  stopwatch_start_button.click();

  setTimeout(function() {
    stopwatch_stop_button.click();
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
  stopwatch_reset_button.click();
  var time = document.getElementById('results').innerHTML;
  assert.equal(time, 0.00);
});


test('reset stops a running timer and sets it back to zero', function(assert) {
  var done = assert.async();
  stopwatch_start_button.click();
  setTimeout(function() {
    stopwatch_reset_button.click();
    var time = document.getElementById('results').innerHTML;
    assert.equal(time, 0.00);
    done();
  }, 300);
});

test('countdown button starts countdown going', function(assert) {
  var done = assert.async();
  countdown_reset_button.click();

  setTimeout(function() {
    var time = document.getElementById('countdown_results').innerHTML;
    assert.notEqual(time, '10.00', "countdown button starts countdown going");
    done();
  }, 300);
});

test('stop button stops countdown', function(assert) {
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


test('reset button resets countdown timer', function(assert) {
  document.getElementById('countdown_results').innerHTML = '5.00';
  countdown_reset_button.click();
  var time2 = document.getElementById('countdown_results').innerHTML;
  assert.equal(time2, 240.00, "gets set back to 240.00");
});
