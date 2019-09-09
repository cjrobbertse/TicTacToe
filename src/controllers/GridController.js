class GridController {
  /**
   *  0 | 1 | 2
   * -----------
   *  3 | 4 | 5
   * -----------
   *  6 | 7 | 8
   *
   */
  constructor () {
    // setup an empty grid array
    this.grid = [
      ' ', ' ', ' ',
      ' ', ' ', ' ',
      ' ', ' ', ' '
    ];
  }

  getGrid () {
    return this.grid;
  }

  drawGrid () {
    // row 1
    console.log(` ${this.grid[0]} | ${this.grid[1]} | ${this.grid[2]}`);
    // line 1
    console.log(`-----------`);
    // row 2
    console.log(` ${this.grid[3]} | ${this.grid[4]} | ${this.grid[5]}`);
    // line 2
    console.log(`-----------`);
    // row 3
    console.log(` ${this.grid[6]} | ${this.grid[7]} | ${this.grid[8]}\n`);
  }

  /**
   *
   * @param {string} symbol 'X' or 'O'
   * @param {number} location 0-8
   */
  addToGrid (symbol, location) {
    this.grid[location] = symbol;
    // console.log(`${location} = ${symbol}`);
  }

  /**
   * returns True or False depending if a win criteria is met
   */
  winner () {
    /**
     * 1. [
     *  [0, 1, 2],
     *  [3, 4, 5],
     *  [6, 7, 8]
     * ]
     * RULE: r=r+1=r+2
     */
    for (let r = 0; r < 4; r++) {
      if (this.grid[r] !== ' ') {
        if (this.grid[r] === this.grid[r + 1] && this.grid[r] === this.grid[r + 2]) {
          return true;
        }
      }
    }
    /**
     * 2. [
     *  [0, 3, 6],
     *  [1, 4, 7],
     *  [2, 5, 8]
     * ]
     * RULE: c=c+3=c+6
     */
    for (let c = 0; c < 4; c++) {
      if (this.grid[c] !== ' ') {
        if (this.grid[c] === this.grid[c + 3] && this.grid[c] === this.grid[c + 6]) {
          return true;
        }
      }
    }
    /**
     * 3. [
     *  [0, 4, 8]
     * ]
     */
    let p = 0;
    if (this.grid[p] !== ' ') {
      if (this.grid[p] === this.grid[p + 4] && this.grid[p] === this.grid[p + 8]) {
        return true;
      }
    }
    /**
     * 4. [
     *  [2, 4, 6]
     * ]
     */
    p = 2;
    if (this.grid[p] !== ' ') {
      if (this.grid[p] === this.grid[p + 2] && this.grid[p] === this.grid[p + 4]) {
        return true;
      }
    }
    return false;
  }

  /**
   * returns the value array index given by postion
   * @param {number} position
   */
  getGridPosVal (position) {
    return this.grid[position];
  }
}

module.exports = GridController;
