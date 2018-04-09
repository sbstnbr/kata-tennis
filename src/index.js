const pointsList = [0,15,30,40];

function Game () {
  this.score = [0,0];
  this.winner = null;
  this.winsPoint = player => {
    const currentScoreIndex = pointsList.indexOf(this.score[player]);
    if(currentScoreIndex==pointsList.length-1){
      return (this.winner = player);
    } else {
      return this.score[player] = pointsList[currentScoreIndex+1];
    }
  };
}

module.exports = Game;