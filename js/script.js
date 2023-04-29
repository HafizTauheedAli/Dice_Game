//Element target
const score0 = document.querySelector('.score-0')
const score1 = document.querySelector('.score-1')
const player0 = document.querySelector('.player-0')
const player1 = document.querySelector('.player-1')
const current0 = document.querySelector('.current-0')
const current1 = document.querySelector('.current-1')
const dice = document.querySelector('#dice')
const BtnNew = document.querySelector('#ngame')
const BtnRoll = document.querySelector('#rock-n-roll')
const Btnhold = document.querySelector('#hold-it-up') 

let scores=[0,0], currentScore = 0, activePlayer = 0, playing = true;
  

const swtichPlayer = function(){
    currentScore=0
    if(activePlayer==0){
        current0.textContent= 0
        activePlayer=1
     }
     else{
         current1.textContent = 0
        activePlayer=0
     }

     player0.classList.toggle('active')
     player1.classList.toggle('active')
}



BtnRoll.addEventListener('click',function(){
    if(playing == true){

    //Generate a random number
    const num = Math.trunc(10*(Math.random())%6) + 1

    //Display dice
    dice.classList.remove('hide')
    dice.src = `img/dice-${num}.png`

    //Check if the number was 1
    if(num==1){
      swtichPlayer()
    } 
    
    else{
        currentScore = currentScore + num;
        if(activePlayer==0){
           current0.textContent= currentScore
        }
        else{
            current1.textContent = currentScore
        }
    }
    }


})



Btnhold.addEventListener('click',function(){
    if(playing==true){
    console.log("hi")
    //Adding current score of active player to its main score
    scores[activePlayer] = scores[activePlayer] + currentScore
    document.querySelector(`.score-${activePlayer}`).textContent = scores[activePlayer]
    
    if(scores[activePlayer]>=10){
        document.querySelector(`.score-${activePlayer}`).textContent = 'Winner'
        if(activePlayer==0){
            player0.classList.add('win')
        }
        else{
            player1.classList.add('win')   
        }
        current0.textContent=0
        current1.textContent=0
        //Hiding Dice again
        dice.classList.add('hide')
        playing=false
    }
    else{
        swtichPlayer()
    }



    }
})
