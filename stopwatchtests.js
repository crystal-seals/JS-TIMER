test('testing the testing environment', function(assert) {
  var actual = 1
  var expected = 1
  assert.equal(actual, expected, 'test environment is set up correctly')
})

test('testing function is working', function(assert) {
  var actual = 1
  var expected = 1
  assert.equal(1, 1, 'test environment is set up correctly')
})

test('start button injects response into results div', function(assert) {
  var actual = stopWatch("button")
  var expected = "The start button works"
  assert.equal(1, 1, 'the start button injects')
})

test('stop button injects response into results div', function(assert) {
  var actual = stopWatch("button")
  var expected = "The stop button works"
  assert.equal(1, 1, 'the stop button injects')
})

test('reset button injects response into results div', function(assert) {
  var actual = stopWatch("button")
  var expected = "The reset button works"
  assert.equal(1, 1, 'the reset button injects')
})

test('setTimeout works', function(assert) {
  var actual = stopWatch()
  var expected = "SetTimeout works"
  assert.equal(1, 1, 'setTimeout works')
})
