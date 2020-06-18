// 3.1 Minimum
const min = (a, b) => {
  if (a < b) return a;
  return b;
};

// 3.2 Recursion
const isEven = (n) => {
  if (n < 0) n = -n;
  if (n === 0) return true;
  if (n === 1) return false;
  return isEven(n -2);
};

// 3.3 Bean Counting
const countBs = (string) => {
  let count = 0;
  for (let char of string) {
    if (char === 'B') count++;
  }
  return count;
};

const countChar = (string, target) => {
  let count = 0;
  for (let char of string) {
    if (char === target) count++;
  }
  return count;
};
