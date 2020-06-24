// 4.1 The Sum of a Range
const range = (start, end, step = 1) => {
  const range = [];
  let value = start;
  while (start !== end) {
    if (end > start && value > end) break;
    if (end < start && value < end) break;

    range.push(value);
    value = value + step;
  }
  return range;
};

const sum = (nums) => {
  return nums.reduce((acc, ele) => acc + ele);
};

// 4.2 Reversing an Array
const reverseArray = (array) => {
  const reversedArr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArr.push(array[i]);
  }
  return reversedArr;
};

const reverseArrayInPlace = (array) => {
  const midpoint = Math.floor(array.length / 2);
  const endpoint = array.length - 1;
  for (let i = 0; i < midpoint; i++) {
    let ele = array[i];
    array[i] = array[endpoint - i];
    array[endpoint - i] = ele;
  }
  return array;
};

// 4.3 A List
const arrayToList = (array) => {
  let list = null;
  for (let ele of array) {
    list = {
      value: ele,
      rest: list,
    };
  }
  return list;
}

const listToArray = (list) => {
  const array = [];
  while (list !== null) {
    array.unshift(list.value);
    list = list.rest;
  }
  return array;
}

const prepend = (ele, list) => ({
  value: ele,
  rest: list,
});

const nth = (list, index) => {
  let value = undefined;
  let current = 0;
  while (list !== null) {
    if (current === index) {
      value = list.value;
      break;
    }
    current++;
    list = list.rest;
  }
  return value;
};

// 4.4 Deep Comparison
const deepEqual = (a, b) => {
  if (typeof a !== 'object' && typeof b !== 'object') return a === b;
  if (a === null || b === null) return a === b;

  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) return false;
    }
    return true;
  }

  if (!Array.isArray(a) && !Array.isArray(b)) {
    if (Object.keys(a).length !== Object.keys(b).length) return false;
    for (let key in a) {
      if (!b.hasOwnProperty(key) || !deepEqual(a[key], b[key])) return false;
    }
    return true;
  }

  return false;
}
