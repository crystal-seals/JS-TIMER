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

test('start timer runs', function(assert) {
    var done = assert.async();
    var start_button = document.getElementById("start_button")
      document.getElementById("start_button").addEventListener("click", function(){
        var actual = document.getElementById("results").innerHTML;
        var expected = '0.00';
        assert.equal(actual, expected, 'the start timer runs')
        done();
      })
})

test('reset button injects HTML into results div', function(assert) {
  var done = assert.async();
  var reset_button = document.getElementById("reset_button")
  document.getElementById("reset_button").addEventListener("click", function(){
    var actual = document.getElementById("results").innerHTML;
    var expected = '0.00';
    assert.equal(actual, expected, 'the reset button injects')
    done();
  })
})
