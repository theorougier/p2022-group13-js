oxo.screens.loadScreen("game2", loadGame);

// oxo.screens.loadScreen("home", function() {
//   const btn = document.querySelector(".Menu__play");
//   btn.addEventListener("click", function() {
//     oxo.screens.loadScreen("instructions", loadInstruction);
//   });

// });

// const loadInstruction = function() {
//   const btn2 = document.querySelector(".instruction__button");
//   btn2.addEventListener("click", function() {
//     oxo.screens.loadScreen("game", loadGame);
    
   
//   });
// };

function loadGame() {
   var life = 0;

   var cardtrap=document.querySelectorAll('.trap');
   for(let j=0;j<cardtrap.length;j++){
      cardtrap[j].addEventListener('click', function() {
         life++;
         document.querySelector(".gameplay__heart"+life).classList.add("hidden");
         //console.log(i, document.querySelector(".gameplay__heart"+i));
         // (".gameplay__heart"+i)
         //console.log("rrr")
     })
   }
   
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


 
 
//
      
// for(let i=0;i<card.length;i++){
//    card[i].addEventListener('click',function(){
//       card[i].style.opacity=0;
//       })

// }
// var card1 = document.querySelectorAll('.card__foret');
      
// for(let i=0;i<card1.length;i++){

//    card1[i].addEventListener('click',function(){
//       card1[i].style.opacity=0;

//       })

// }
// var card2 = document.querySelectorAll('.card__castle');
      
// for(let i=0;i<card2.length;i++){
//    card2[i].addEventListener('click',function(){
//       card2[i].style.opacity=0;
//       })

// }
// var cardtrap = document.querySelectorAll('.trap');
      
// for(let i=0;i<cardtrap.length;i++){
//    cardtrap[i].addEventListener('click',function(){
//       cardtrap[i]
//       })

// }
// var cardleft = document.querySelectorAll('.left');
      
// for(let i=0;i<cardleft.length;i++){
//    cardleft[i].addEventListener('click',function(){
//       cardleft[i]
//       })

// }
// var cardright = document.querySelectorAll('.right');
      
// for(let i=0;i<cardright.length;i++){
//    cardright[i].addEventListener('click',function(){
//       cardright[i]
//       })

// }

// var cardbottomleft = document.querySelectorAll('.bottomleft');
      
// for(let i=0;i<cardbottomleft.length;i++){
//    cardbottomleft[i].addEventListener('click',function(){
//       cardbottomleft[i]
//       })

// }

// var cardbottomright = document.querySelectorAll('.bottomright');
      
// for(let i=0;i<cardbottomright.length;i++){
//    cardbottomright[i].addEventListener('click',function(){
//       cardbottomright[i]
//       })

// }

// var cardline = document.querySelectorAll('.line');
      
// for(let i=0;i<cardline.length;i++){
//    cardline[i].addEventListener('click',function(){
//       cardline[i]
//       })

// }

// var cardthreeroad = document.querySelectorAll('.threeroad');
      
// for(let i=0;i<cardthreeroad.length;i++){
//    cardthreeroad[i].addEventListener('click',function(){
//       cardthreeroad[i]
//       })

// }

// var cardthreeroadleft = document.querySelectorAll('.threeroadleft');
      
// for(let i=0;i<cardthreeroadleft.length;i++){
//    cardthreeroadleft[i].addEventListener('click',function(){
//       cardthreeroadleft[i]
//       })

// }
// oxo.player.setScore
