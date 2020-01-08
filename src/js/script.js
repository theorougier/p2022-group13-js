oxo.screens.loadScreen("home", function() {
  const btn = document.querySelector(".Menu__play");
  btn.addEventListener("click", function() {
    oxo.screens.loadScreen("instructions", loadInstruction);
  });
});

const loadInstruction = function() {
  const btn2 = document.querySelector(".instruction__button");
  btn2.addEventListener("click", function() {
    oxo.screens.loadScreen("game", loadGame);
  });
};

const loadGame = function() {
   
 };
