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
    
     var card = document.querySelectorAll('.card__city');
      
for(let i=0;i<card.length;i++){
   card[i].addEventListener('click',function(){
      card[i].style.opacity=0;
      })

}
var card1 = document.querySelectorAll('.card__foret');
      
for(let i=0;i<card1.length;i++){

   card1[i].addEventListener('click',function(){
      card1[i].style.opacity=0;
      
      })

}
var card2 = document.querySelectorAll('.card__castle');
      
for(let i=0;i<card2.length;i++){
   card2[i].addEventListener('click',function(){
      card2[i].style.opacity=0;
      })

}
  });
};

const loadGame = function() {
   
 };
