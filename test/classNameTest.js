let chai = require('chai');
let assert = chai.assert;

let { addClass } = require('../js/className.js');

describe('addClass', function() {
  it('should add class to element', function() {
    let element = { className: ''};
    addClass(element, 'test-class');
    assert.equal(element.className, 'test-class');
  });

  it('should not add a class which already exists', function() {
    let element = { className: 'exists'};
    addClass(element, 'exists');
    const numClasses = element.className.split(' ').length;
    assert.equal(numClasses, 1);
  });

  it('should append new class after exisiting one', function() {
    let element = {className: 'exists'}
    addClass(element, 'new-class');
    const classes = element.className.split(' ');
    assert.equal(classes[1], 'new-class');
  })

})