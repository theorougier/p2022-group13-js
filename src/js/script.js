
let life = 0;

oxo.screens.loadScreen("home", function() {
 
  const btn = document.querySelector(".Menu__play");
  btn.addEventListener("click", function() {
    oxo.screens.loadScreen("instructions", loadInstruction);
  });


  
  let homeMusic = document.getElementById("homeMusic"); 
  homeMusic.play();

  
});

const loadInstruction = function() {
  const btn2 = document.querySelector(".instruction__button");
  btn2.addEventListener("click", function() {
    oxo.screens.loadScreen("game", loadGame);
  });  
  let homeMusic = document.getElementById("homeMusic"); 
  homeMusic.play();
};

const loadGame = function() {
   const btn3 = document.querySelector(".return");
   btn3.addEventListener("click", function() {
     oxo.screens.loadScreen("home", loadReturn);
   });

     document.querySelectorAll('.card__foret, .card__city, .card__castle').forEach(function(card) {
       var life = 0;

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


     document.querySelectorAll('.card__foret, .card__city, .card__castle').forEach(function(card) {
      
      card.addEventListener('click', function() {
         if (card.classList.contains('selectable')) {
            card.remove();
            let row = parseInt(card.getAttribute('data-row'));
            let column = parseInt(card.getAttribute('data-column'));
   
            switch(card.getAttribute('data-action')) {
               case 'line':
                  line(row, column);
                  break;
               case 'left':
                  left(row, column);
                  break;
               case 'right':
                  right(row, column);
                  break;
               case 'bottomright':
                  bottomright(row, column)
                  break;
               case 'bottomleft' :
                  bottomleft(row, column)
                  break;
               case 'threeroad' :
                  threeroad(row, column)
                  break;
               case 'threeroadleft' :
                  threeroadleft(row, column)
                  break;
               case 'trap':
                  trap();
                  break;
               default:
                  break;
            }
         }
      })
   })
 };
 function line(row, column) {
   preselect(row - 1, column);
 }
 function left(row, column) {
   preselect(row, column - 1);
 }
 function right(row, column) {
   preselect(row, column + 1);
 }
 function bottomleft(row, column) {
   preselect(row - 1, column);
 }
 function bottomright(row, column) {
   preselect(row - 1, column);
 }
 function threeroad(row, column) {
   preselect(row - 1, column);
   preselect(row, column - 1);
   preselect(row, column + 1);
 }
 function threeroadleft(row, column) {
   preselect(row - 1, column);
   preselect(row, column - 1);
   preselect(row, column + 1);
 }
 function preselect(row, column) {
   let target = document.querySelector('[data-row="' + row + '"][data-column="' + column + '"]');
   if (target) {
      target.classList.add('selectable');
   }
 }

 function trap() {
   life++;
   document.querySelector(".gameplay__heart"+life).classList.add("hidden");

   if (life === 3){
      oxo.screens.loadScreen("gameover",loadGameOver)
      
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

