// Build map, filter, reduce, some, every
// this = the array, this[i] = value of array at i, i = index

const arr = [1, 2, 3];
/******************************************/
// Map
Array.prototype.myMap = function (cb) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i]));
  }
  return newArr;
};

/******************************************/
// Filter
Array.prototype.myFilter = function (cb) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(i) === this[i]) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

/******************************************/
// Reduce
Array.prototype.myReduce = function (cb, initVal = 0) {
  let result = initVal;
  for (let i = 0; i < this.length; i++) {
    result += cb(this[i]);
  }
  return result;
};

/******************************************/
// Some
Array.prototype.mySome = function (cb) {
  let count = 0;
  for (let i = 0; i < this.length; i++) {
    if (cb(i)) {
      count++;
    }
  }
  if (count != 0) {
    return true;
  } else {
    return false;
  }
};

/******************************************/
// Every
Array.prototype.myEvery = function (cb) {
  let count = 0;
  for (let i = 0; i < this.length; i++) {
    if (!cb(i)) {
      count++;
    }
  }
  if (count != 0) {
    return false;
  } else {
    return true;
  }
};

/******************************************/
// For Each
Array.prototype.forEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};
