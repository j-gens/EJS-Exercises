// 5.1 Flattening
const flattenArrays = (arrays) => {
  return arrays.reduce((acc, ele) => {
    return acc = acc.concat(ele);
  });
};

// 5.2 Your Own Loop
const loop = (value, testFunc, updateFunc, bodyFunc) => {
  if (!testFunc(value)) return;
  bodyFunc(value);
  return loop(updateFunc(value), testFunc, updateFunc, bodyFunc);
};

// 5.3 Everything
const everyLoop = (array, test) => {
  for (let ele of array) {
    if (!test(ele)) return false;
  }
  return true;
};

const everySome = (array, test) => {
  if (array.some((ele) => !test(ele))) return false;
  return true;
}
