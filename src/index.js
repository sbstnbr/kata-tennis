function Game () {
  this.score = [0,0];
  this.winsPoint = (int) => this.score[int]+=15;
}

module.exports = Game;