let grid = [
  ' ', ' ', ' ',
  ' ', ' ', ' ',
  ' ', ' ', ' '
];

function draw (grid) {
  // row 1
  console.log(` ${grid[0]} | ${grid[1]} | ${grid[2]}`);
  // line 1
  console.log(`-----------`);
  // row 2
  console.log(` ${grid[3]} | ${grid[4]} | ${grid[5]}`);
  // line 2
  console.log(`-----------`);
  // row 3
  console.log(` ${grid[6]} | ${grid[7]} | ${grid[8]}\n`);
}

draw(grid);
