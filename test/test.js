assert = require('chai').assert;

describe('Chai Assertions Sandbox',() => {
  it('can assert true', () => {
    assert(true);
  });

  it('can assert 1 is 1', () => {
    assert.equal(1, 1);
  });

  it('can assert 2 is not 3', () => {
    assert.notEqual(2, 3);
  });

  it('can assert that something is a given data type', () => {
    assert.isNumber(42);
    assert.isObject({answer: 42});
    assert.isArray([1,2,3,4]);
    var thingIHaventDefined;
    assert.isUndefined(thingIHaventDefined);
  });

  it('can compare two arrays that contain the same values', () => {
    var actualArray = [1,2,3,4];
    assert.deepEqual(actualArray, [1,2,3,4]);
  });

  it('can compare two objects that contain the same key/value pairs', () => {
    var actualObject = {name: "Nate", module: 4};
    assert.deepEqual(actualObject, {name: "Nate", module: 4});
  })
});
