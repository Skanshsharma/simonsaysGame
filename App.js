let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;
let h2=document.querySelector("h2");

let btns=["yellow","red","purple","green"];

document.addEventListener("keypress", function(){

   if(started ==false){

      console.log("game is started");
      started=true;
      levelUp();
   }

})
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){

      btn.classList.remove("flash");
    },250)

}
function userFlash(btn){
   btn.classList.add("userflash");
   setTimeout(function(){

     btn.classList.remove("userflash");
   },250)

}

function gameCheck(idx){

   if (userSeq[idx]===gameSeq[idx]){

      if(userSeq.length==gameSeq.length){

         setTimeout(levelUp,1000);
      }
   }else {

      h2.innerHTML=`Game Over! Your score was<b> ${level}</b><br>Press any key to start.`;
      document.querySelector("body").style.backgroundColor="red";
      setTimeout(function(){

         document.querySelector("body").style.backgroundColor="white";
      },150)
      reset();
   }
   
}
function levelUp(){
    level++;
    userSeq=[];
    h2.innerText=`Level ${level}`;

   
    let randIndx= Math.floor(Math.random()*3);// for flashing random color of button
    //console.log(randIndx);
     let randColor=btns[randIndx];//after getting index of color
   // console.log(randColor);
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);


    gameFlash(randBtn);

}
function btnPress(){

   let btn=this;
   userFlash(btn);
   userColor=btn.getAttribute("id");
   userSeq.push(userColor);
   gameCheck(userSeq.length-1);

}

let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns){

   btn.addEventListener("click",btnPress);
}
 function reset(){

  started=false;
  userSeq=[];
  gameSeq=[];
  level=0;

 }