const Queue = function() {
  this._storage = {};
  this._size = 0;
  this._start = 0;
  this._end = 0;
}

Queue.prototype.enqueue = function(val) {
  this._storage[this._end] = val;
  this._end++;
  console.log('end is ', this._end);
}

Queue.prototype.dequeue = function(val) {
  if ( this._end - this._start > 0) {
    let remove = this._storage[this._start];
    delete this._storage[this._start];
    console.log('start is before adding', this._start);
    this._start++;
    console.log('stoage is ', this._storage);
    console.log('start is ', this._start);
    console.log('remove is', remove);
    return remove;
  } else {
    return null;
  }
}

Queue.prototype.size = function() {
  return this._end - this._start;
}


