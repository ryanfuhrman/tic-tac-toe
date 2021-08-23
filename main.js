const board = document.querySelector(".gameboard");

const Gameboard = (() => {
  let board = [
    { empty: true, player: "" },
    { empty: true, player: "" },
    { empty: true, player: "" },
    { empty: true, player: "" },
    { empty: true, player: "" },
    { empty: true, player: "" },
    { empty: true, player: "" },
    { empty: true, player: "" },
    { empty: true, player: "" },
  ];

  function updateSquare(index, player) {
    console.log(!this.board[index.empty]);
    return (
      (this.board[index] = {
        empty: false,
        player,
      }),
      Game.populateBoard()
    );
  }

  return {
    board,
    updateSquare,
  };
})();

const Game = (() => {
  let turn = true;
  let player;

  if (turn === true) {
    player = "x";
  } else {
    player = "o";
  }

  board.addEventListener("click", (e) => {
    let square = e.target.classList[1];
    if (Gameboard.board[square].empty === true) {
      Gameboard.updateSquare(square, player);
      !turn;
    } else {
      console.log(
        "Sorry, this square was already chosen. Pick another square!"
      );
    }

    console.log(Gameboard);
  });

  function populateBoard() {
    board.innerHTML = "";
    Gameboard.board.map((square, index) => {
      const squareLi = document.createElement("li");
      squareLi.className = `squares ${index}`;
      squareLi.innerHTML = `${square.player}`;
      board.appendChild(squareLi);
    });
  }

  return {
    populateBoard,
  };
})();

const Player = (name) => {
  return { name };
};

Game.populateBoard();
