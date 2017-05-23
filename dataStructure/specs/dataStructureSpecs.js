const assert = chai.assert;
const expect = chai.expect;

describe('stack', function() {
  let stack = new Stack();

  it('should report a size of zero for a new stack', function() {
    expect(stack.size()).to.equal(0);
  })

  it('should report a size of 2 after adding two items', function() {
    stack.push('a');
    stack.push('b');
    expect(stack.size()).to.equal(2);
  })

  it('should not error when removing from an empty stack', function() {
    stack.pop();
    expect(function() { stack.pop();}).not.throws();
  })

  it('should report a size of 1 after adding two items and removing one', function() {
    stack.push('a');
    stack.push('b');
    stack.pop();
    expect(stack.size()).to.equal(1);
  })

  it('should report a size of 0 after adding removing more items than were added', function() {
    stack.push('a');
    stack.pop();
    stack.pop();
    expect(stack.size()).to.equal(0);
  })

  it('should sequentially add and remove items', function() {
    stack.push('a');
    expect(stack.pop()).to.equal('a');    
    stack.push('b');
    expect(stack.pop()).to.equal('b');
  })  

  it('should remove the newest item, after newer items have already been added and removed ', function() {
    stack.push('a');
    stack.push('b');
    stack.push('c');
    stack.pop();
    expect(stack.pop()).to.equal('b');
  })
})

describe('queue', function() {
  let queue = new Queue();

  it('should report a size of zero for a new queue', function() {
    expect(queue.size()).to.equal(0);
  })  


  it('should report a size of 1 after adding two items and removing one', function() {
    queue.enqueue('hello');
    queue.enqueue('world');
    queue.dequeue();
    expect(queue.size()).to.equal(1);
    queue.dequeue(); //empty queue
  })

  it('does not error when removing from an empty queue', function() {
    expect(function() { queue.dequeue();}).not.throws();
  })  

  it('should report a size of 0 after removing more items than were added', function() {
    queue.enqueue('a');
    queue.dequeue();
    queue.dequeue();
    expect(queue.size()).to.equal(0);
  })

  it('should allow sequentially adding and removing items', function() {
    queue.enqueue('a');
    expect(queue.dequeue()).to.equal('a');
    queue.enqueue('b');
    expect(queue.dequeue()).to.equal('b');
  })

  it('should remove the least recently added of two items', function() {
    queue.enqueue('a');
    queue.enqueue('b');
    expect(queue.dequeue()).to.equal('a');
    queue.dequeue(); //empty queue
  })

  it('should remove the oldest item, after newer items have already been added and removed', function() {
    queue.enqueue('a');
    queue.enqueue('b');
    queue.dequeue();
    queue.enqueue('c');
    expect(queue.dequeue()).to.equal('b');
  })
})
