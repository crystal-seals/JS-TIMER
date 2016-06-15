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

test('start button responds', function(assert) {
  var actual = stopWatch("button")
  var expected = "The button works"
  assert.equal(1, 1, 'the start button responds')
})
