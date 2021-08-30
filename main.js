const board = document.querySelector(".gameboard");
const message = document.querySelector(".message");

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
  let player;
  board.addEventListener("click", (e) => {
    let square = e.target.classList[1];
    if (Gameboard.board[square].empty === true) {
      player = Player.handleTurns();
      Gameboard.updateSquare(square, player);
      handleLogic(Gameboard.board);
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

  function handleLogic(arr) {
    const { board } = Gameboard;
    const messageP = document.createElement("p");
    let messageText;

    // check for winner
    switch (true) {
      case board[0].player === board[1].player &&
        board[0].player === board[2].player &&
        board[0].player !== "":
        messageText = `${board[0].player} wins!`;
        break;
      case board[3].player === board[4].player &&
        board[3].player === board[5].player &&
        board[3].player !== "":
        messageText = `${board[3].player} wins!`;
        break;
      case board[6].player === board[7].player &&
        board[6].player === board[8].player &&
        board[6].player !== "":
        messageText = `${board[6].player} wins!`;
        break;
      case board[0].player === board[3].player &&
        board[0].player === board[6].player &&
        board[0].player !== "":
        messageText = `${board[0].player} wins!`;
        break;
      case board[1].player === board[4].player &&
        board[1].player === board[7].player &&
        board[1].player !== "":
        messageText = `${board[1].player} wins!`;
        break;
      case board[2].player === board[5].player &&
        board[2].player === board[8].player &&
        board[2].player !== "":
        messageText = `${board[2].player} wins!`;
        break;
      case board[0].player === board[4].player &&
        board[0].player === board[8].player &&
        board[0].player !== "":
        messageText = `${board[0].player} wins!`;
        break;
      case board[2].player === board[4].player &&
        board[2].player === board[6].player &&
        board[2].player !== "":
        messageText = `${board[2].player} wins!`;
        break;
      default:
        messageText = `${player === "X" ? "O" : "X"}, it's your turn`;
    }

    message.innerHTML = messageText;
    message.appendChild(messageP);
  }

  return {
    populateBoard,
    handleLogic,
  };
})();

const Player = (() => {
  let player;
  const playerOne = "X";
  const playerTwo = "O";

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
