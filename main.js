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
  board.addEventListener("click", (e) => {
    let square = e.target.classList[1];
    if (Gameboard.board[square].empty === true) {
      let player = Player.handleTurns();
      console.log(player);
      Gameboard.updateSquare(square, player);
    } else {
      alert("Sorry, this square was already chosen. Pick another square!");
    }
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

const Player = (() => {
  let player;
  const playerOne = "x";
  const playerTwo = "o";

  const turnState = {
    turn: true,
  };

  function handleTurns() {
    if (turnState.turn === true) {
      player = playerOne;
    } else {
      player = playerTwo;
    }

    turnState.turn = !turnState.turn;

    return player;
  }

  return {
    handleTurns,
  };
})();

Game.populateBoard();
