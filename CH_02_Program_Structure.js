// 2.1 Looping a Triangle
const createTriangle = (n = 7) => {
  let string = '';
  while (string.length < n) {
    string += '#';
    console.log(string);
  }
};

// 2.2 FizzBuzz
const fizzBuzz = (n = 100) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz')
    } else {
      console.log(i)
    }
  }
}

// 2.3 Chessboard
const createChessboard = (n = 8) => {
  let board = '';
  for (let i = 0; i < n; i++) {
    let row = '';
    let char = false;
    if (i % 2 === 1) char = true;
    for (let j = 0; j < n; j++) {
      if (char) {
        row += '#';
      } else {
        row += ' ';
      }
      char = !char;
    }
    board += row + '\n';
  }
  return board;
}
