// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent="  correct the message";
// document.querySelector(".number").textContent=" 50";
// document.querySelector(".score").textContent="30";
// console.log(  document.querySelector(".guess").value);

 var highscor;
 
document.querySelector(".again").addEventListener('click',()=>{
    
     score=20;
   document.querySelector(".guess").value="";
   document.querySelector(".number").textContent ="?";
   document.querySelector(".score").textContent=score;
   document.querySelector(".message").textContent=" Start quesing...";
   document.body.style.backgroundColor="black";

    numb = Math.trunc(Math.random() * 20) + 1;
   console.log(numb);
   

});
//  var a=document.querySelector(".number");
var target= document.querySelector(".score").textContent;
 let numb = Math.trunc(Math.random() * 20) + 1;
  console.log(numb);
 var score=20;
 
 
  
 console.log(score);
document.querySelector(".check").addEventListener('click', ()=>{

 const guesss= Number(document.querySelector(".guess").value);
 if(guesss  > numb)
 {
     document.querySelector(".message").textContent=" TOO high....";
     score=score-1;
    //  target=score;
    document.querySelector(".score").textContent=score;
      
 }
 else if(guesss < numb){

    document.querySelector(".message").textContent=" TOO low....";
    score=score-1;
//    target=score;
document.querySelector(".score").textContent=score;
      
 }
 else if(guesss == numb)
 {

    document.querySelector(".message").textContent=" correct number.";
    document.body.style.backgroundColor="green";
    document.querySelector(".number").textContent = numb;
    document.querySelector(".number").style.width="40rem";
   
    // target=score;
    document.querySelector(".score").textContent=score;
    console.log(target,score);

   highscor= document.querySelector(".highscore").textContent=score;
  if(highscor < score)
  {
      highscor=score;
      document.querySelector(".highscore").textContent=highscor;
  }
  
 }
 
});