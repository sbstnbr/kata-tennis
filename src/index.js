const pointsList = [0,15,30,40];

function Game () {
  this.score = [0,0];
  this.winner = null;
  this.winsPoint = player => {
    console.log(this.score);
    const currentScoreIndex = pointsList.indexOf(this.score[player]);
    if (this.score[player] === 'A'){
      return this.winner = player;
    }
    if (this.score[1-player] === 'A'){
      return this.score[1-player] = 40;
    }
    if (this.score[0] === 40 && this.score[1] === 40 ){
      return this.score[player] = 'A';
    }
    else if (currentScoreIndex==pointsList.length-1) {
      return this.winner = player;
    } else {
      return this.score[player] = pointsList[currentScoreIndex+1];
    }
  };
}

module.exports = Game;