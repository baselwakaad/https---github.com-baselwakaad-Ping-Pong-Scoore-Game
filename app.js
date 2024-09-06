const p1={
    score:0,
    button:document.querySelector('#p1button'),
    display:document.querySelector('#p1Display')
}

const p2={
    score:0,
    button:document.querySelector('#p2button'),
    display:document.querySelector('#p2Display')
}


const resetButton=document.querySelector('#reset');
const winngingScoreSelect=document.querySelector('#playto');
let winningScore = 3;
let isGameOver = false;



function updateScore(player,opponent){
    if (!isGameOver) {
        player.score +=1;
        if (player.score === winningScore) {
            isGameOver = true;
            
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            
            player.button.disabled=true;
            opponent.button.disabled=true;
        }
        player.display.textContent = player.score;
    }

}



p1.button.addEventListener('click', function (e) {
    updateScore(p1,p2);
})

p2.button.addEventListener('click', function (e) {
    updateScore(p2,p1);

})


winngingScoreSelect.addEventListener('change',function(e){


    winningScore=parseInt(this.value);
    reset();// every time the usere change the score level reset
})

resetButton.addEventListener('click',reset)


function reset(){
        isGameOver=false;
        for(let p of [p1,p2]){
            p.score=0;
            p.display.textContent=0;
            p.display.classList.remove('has-text-success','has-text-danger');
            p.button.disabled=false;
        }
}