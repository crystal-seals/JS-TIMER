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

test('reset button injects HTML into results div', function(assert) {
  expect(0)
  var reset_button = document.getElementById("reset_button")
  document.getElementById("reset_button").addEventListener("click", function(){
    var actual = document.getElementById("results").innerHTML;
    var expected = '0.00';
    assert.equal(actual, expected, 'the reset button injects')
  })
})
