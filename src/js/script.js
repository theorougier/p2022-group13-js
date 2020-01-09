oxo.screens.loadScreen("home", function() {
  const btn = document.querySelector(".Menu__play");
  btn.addEventListener("click", function() {
    oxo.screens.loadScreen("instructions", loadInstruction);
  });
});

const loadInstruction = function() {
  const btn2 = document.querySelector(".instruction__button");
  btn2.addEventListener("click", function() {
    oxo.screens.loadScreen("game2", loadGame);
  });  
};

const loadGame = function() {
  var card = document.querySelectorAll(".card__city");

  for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", function() {
      card[i].style.opacity = 0;
    });
  }
  var card1 = document.querySelectorAll(".card__foret");

  for (let i = 0; i < card1.length; i++) {
    card1[i].addEventListener("click", function() {
      card1[i].style.opacity = 0;
    });
  }
  var card2 = document.querySelectorAll(".card__castle");

  for (let i = 0; i < card2.length; i++) {
    card2[i].addEventListener("click", function() {
      card2[i].style.opacity = 0;
    });
  }
  var cardtrap = document.querySelectorAll(".trap");

  for (let i = 0; i < cardtrap.length; i++) {
    cardtrap[i].addEventListener("click", function() {
      cardtrap[i];
    });
  }
  var cardleft = document.querySelectorAll(".left");

  for (let i = 0; i < cardleft.length; i++) {
    cardleft[i].addEventListener("click", function() {
      cardleft[i];
    });
  }
  var cardright = document.querySelectorAll(".right");

  for (let i = 0; i < cardright.length; i++) {
    cardright[i].addEventListener("click", function() {
      cardright[i];
    });
  }

  var cardbottomleft = document.querySelectorAll(".bottomleft");

  for (let i = 0; i < cardbottomleft.length; i++) {
    cardbottomleft[i].addEventListener("click", function() {
      cardbottomleft[i];
    });
  }

  var cardbottomright = document.querySelectorAll(".bottomright");

  for (let i = 0; i < cardbottomright.length; i++) {
    cardbottomright[i].addEventListener("click", function() {
      cardbottomright[i];
    });
  }

  var cardline = document.querySelectorAll(".line");

  for (let i = 0; i < cardline.length; i++) {
    cardline[i].addEventListener("click", function() {
      cardline[i];
    });
  }

  var cardthreeroad = document.querySelectorAll(".threeroad");

  for (let i = 0; i < cardthreeroad.length; i++) {
    cardthreeroad[i].addEventListener("click", function() {
      cardthreeroad[i];
    });
  }

  var cardthreeroadleft = document.querySelectorAll(".threeroadleft");

  for (let i = 0; i < cardthreeroadleft.length; i++) {
    cardthreeroadleft[i].addEventListener("click", function() {
      cardthreeroadleft[i];
    });
  }

  const btn3 = document.querySelector(".return");
  btn3.addEventListener("click", function() {
    oxo.screens.loadScreen("home", loadReturn);
  });

  const loadReturn = function() {};
  let pause2 = document.querySelector(".depause");
  let pause = document.querySelector(".niv");
  let boutonpause = document.querySelector(".pause");
  boutonpause.addEventListener("click", function() {
    pause.classList.toggle("hidden");
    pause2.classList.toggle("hidden");
  });

  pause2.addEventListener("click", function() {
    pause.classList.toggle("hidden");
    pause2.classList.toggle("hidden");
  });
};
