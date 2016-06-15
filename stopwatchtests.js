test('testing the testing environment', function(assert) {
  var actual = 1
  var expected = 1
  assert.equal(actual, expected, 'test environment is set up correctly')
})

test('testing function is working', function(assert) {
  var actual = 1
  var expected = 1
  assert.equal(actual, expected, 'test environment is set up correctly')
})

test('start button injects response into results div', function(assert) {
  expect(0)
  var start_button = document.getElementById("start_button")
  document.getElementById("start_button").addEventListener("click", function(){
    var actual = document.getElementById("results").innerHTML;
    var expected = 'The start button works';
    assert.equal(actual, expected, 'the start button injects')
  })
})

test('stop button injects response into results div', function(assert) {
  expect(0)
  var stop_button = document.getElementById("stop_button")
  document.getElementById("stop_button").addEventListener("click", function(){
    var actual = document.getElementById("results").innerHTML;
    var expected = "The stop button works"
    assert.equal(actual, expected, 'the stop button injects')
  })
})

test('reset button injects response into results div', function(assert) {
  expect(0)
  var reset_button = document.getElementById("reset_button")
  document.getElementById("reset_button").addEventListener("click", function(){
    var actual = document.getElementById("results").innerHTML;
    var expected = "The reset button works"
    assert.equal(actual, expected, 'the reset button injects')
  })
})

// test('start button triggers', function(assert) {
//   var actual = document.getElementById("results").innerHTML = 1;
//   var expected = 1;
//   assert.equal(actual, expected, 'start button puts a one into results div');
// })
//
// test('start button starts set interval', function(assert) {
//   var actual = stopWatch()
//   var expected = "start button is working"
//   assert.equal(actual, expected, 'start button is working');
// })
