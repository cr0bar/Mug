class Mug {
  constructor() {
    this.coffee = 0;
  }

  refill() {
    this.coffee = 100;
  }

  drink() {
    if (this.coffee > 0) {
      this.coffee--;
    }
  }

  isEmpty() {
    return this.coffee === 0;
  }
}

var myMug = new Mug();
do {
  if (myMug.isEmpty()) {
    myMug.refill();
  }
  myMug.drink();
} while (!myMug.isEmpty());
