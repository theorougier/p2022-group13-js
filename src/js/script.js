
let life = 0;
let lvl = 0;

oxo.screens.loadScreen("home", function() {
 
  const btn = document.querySelector(".Menu__play");
  btn.addEventListener("click", function() {
    oxo.screens.loadScreen("instructions", loadInstruction);
  });

if(lvl === 0){
  
  let homeMusic = document.getElementById("homeMusic"); 
  homeMusic.play();

}
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
      oxo.screens.loadScreen("gameover");
 }
 }

if(lvl === 0){
   level1()
}

}
const level1 = ()=> {
    lvl = 1;
   const EndNiv = document.querySelector(".endgame");

   EndNiv.addEventListener('click', function(){
     oxo.screens.loadScreen("game2",level2)
   
   })
}

const level2 = () => {
   loadGame();
   const EndNiv2 = document.querySelector(".endgame1")
   EndNiv2.addEventListener('click', function(){
     oxo.screens.loadScreen("game3", level3)
   })
}

const level3 = ()=> {
   loadGame();
   const EndNiv3 = document.querySelector(".engame2")
   EndNiv3.addEventListener('click', function(){
      oxo.screens.loadScreen("end", loadGame)
   })
}





