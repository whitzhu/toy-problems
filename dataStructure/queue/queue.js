const Queue = function() {
  this._storage = {};
  this._size = 0;
  this._start = 0;
  this._end = 0;
}

Queue.prototype.enqueue = function(val) {
  this._storage[this._end] = val;
  this._end++;
}

Queue.prototype.dequeue = function(val) {
  if ( this._end - this._start > 0) {
    let remove = this._storage[this._start];
    delete this._storage[this._start];
    this._start++;
    return remove;
  } else {
    return null;
  }
}

Queue.prototype.size = function() {
  return this._end - this._start;
}


