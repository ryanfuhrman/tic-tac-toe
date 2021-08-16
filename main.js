const board = document.querySelector(".gameboard");

const Gameboard = (() => {
  return {
    gameboard: [
      { emtpy: false, content: "x" },
      { emtpy: false, content: "o" },
      { emtpy: false, content: "" },
      { emtpy: false, content: "" },
      { emtpy: false, content: "x" },
      { emtpy: false, content: "" },
      { emtpy: false, content: "" },
      { emtpy: false, content: "o" },
      { emtpy: false, content: "x" },
    ],
  };
})();

const DisplayController = (() => {
  return {
    turn: true,
  };
})();

const Player = (name) => {
  return { name };
};

(populateBoard = () => {
  Gameboard.gameboard.map((square, index) => {
    const squareLi = document.createElement("li");
    squareLi.className = `squares ${index}`;
    squareLi.innerHTML = `${square.content}`;
    board.appendChild(squareLi);
  });
})();
