function diceValue(min, max) {
  return Math.trunc(Math.random() * (max - min + 1) + min);
}
let winner = "";
let turn = 2;
let player1_score = 0, player2_score = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  let diceval = diceValue(1, 6)

  turn = turn==1? turn = 2: turn == 2? turn = 1: turn;

  if(turn == 1){
    document.querySelector('.number').textContent = diceval;
    player1_score+=diceval;
    displayMessage('Turn - Player 2');
    if(player1_score >= 30){
      displayMessage('🎉 Result!');
      document.querySelector('.result').textContent = "Player 1";
      document.getElementById('roll-btn').disabled = true;
      document.querySelector('.number').textContent = "-";
      document.getElementById('roll-btn').style.visibility = "hidden";
  
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
    }
    document.getElementById("val1").value = player1_score;
  }
  else if(turn == 2){
    document.querySelector('.number').textContent = diceval;
    player2_score+=diceval;
    displayMessage('Turn - Player 1');
    if(player2_score >= 30){
      displayMessage('🎉 Result!');
      document.querySelector('.result').textContent = "Player 2";
      document.getElementById('roll-btn').disabled = true;
      document.querySelector('.number').textContent = "-";
      document.getElementById('roll-btn').style.visibility = "hidden";
  
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
    }
    document.getElementById("val2").value = player2_score;
  } 
});

document.querySelector('.again').addEventListener('click', function () {
  player1_score = 0;
  player2_score = 0;
  turn = 2;
  displayMessage('Start Rolling...');
  document.querySelector('.number').textContent = '?';
  document.getElementById('val1').value = '';
  document.getElementById('val2').value = '';
  document.getElementById('roll-btn').disabled = false;
  document.querySelector('.result').textContent = "Not Decided";
  document.getElementById('roll-btn').style.visibility = "visible";

  document.querySelector('body').style.backgroundColor = 'skyblue';
  document.querySelector('.number').style.width = '15rem';
});