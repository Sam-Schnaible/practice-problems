/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.
A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.
Input: A String representing the board.
Output: 'solved' if the board is valid, 'invalid' if it isn't
Example input:
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"
*/

function hasConflicts(numbers) {
  return (
    numbers.length !== 9 ||
    numbers.reduce((sum, digit) => sum + digit, 0) != 45 ||
    numbers.indexOf('5') !== numbers.lastIndexOf('5')
  )
}

function convertBoardStringToMatrix(boardString) {
  return boardString.split('\n').map(function(row) {
    return row.split('').map(Number)
  })
}

function sudokuChecker(board) {


  const solution = convertBoardStringToMatrix(board)

  for (let i = 0; i < 9; i++) {
    const row = solution[i]
    const col = solution.map((row) => row[i])

    if (hasConflicts(row) || hasConflicts(col)) {
      return 'invalid'
    }
  }

  for (let col = 0; col < 9; col += 3) {
    for (let row = 0; row < 9; row += 3) {
      const row1 = solution[row].splice(0, 3)
      const row2 = solution[row + 1].splice(0, 3)
      const row3 = solution[row + 2].splice(0, 3)

      const square = row1.concat(row2, row3)
      if (hasConflicts(square)) {
        return 'invalid'
      }
    }
  }

  return 'solved'
  }