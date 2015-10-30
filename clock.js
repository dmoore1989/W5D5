function Clock () {
}

Clock.TICK = 5000;

Clock.prototype.printTime = function (time) {
  console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
};

Clock.prototype.run = function () {
  var currentDate = new Date();
  this.printTime(currentDate);
  currentClock = this;
  setInterval(this._tick.bind(currentClock, currentDate), Clock.TICK);
};

Clock.prototype._tick = function (time) {
  var foo = time.getSeconds() + 5
  time.setSeconds(foo);
  Clock.prototype.printTime(time);
};

var clock = new Clock();
clock.run();
