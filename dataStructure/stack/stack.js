const Stack = function() {
  this._storage = {};
  this._size = 0;
}

Stack.prototype.push = function(val) {
  this._storage[this._size] = val;
  this._size++;
}

Stack.prototype.pop = function() {
  if (this._size > 0) {
    this._size--;
    const remove = this._storage[this._size];
    delete this._storage[this._size];
    return remove;
  } 
  return null;
}

Stack.prototype.size = function() {
  return this._size; 
} 

