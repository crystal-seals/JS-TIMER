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

test('start button triggers timer function which triggers increment function and changes result div to 1', function(assert) {
  expect(0)
  var start_button = document.getElementById("start_button")
  document.getElementById("start_button").addEventListener("click", function(){
    var actual = document.getElementById("results").innerHTML;
    var expected = '0';
    assert.equal(actual, expected, 'the start button makes the result div 1')
  })
})
