// Наш герой.

const Boomerang = require("./Boomerang");

class Hero {
  constructor(position, boomerang) {
    this.boomerang = boomerang;
    this.skin = '🤠'; // можете использовать любые emoji '💃'
    this.position = [position[0], position[1]];
  }

  moveLeft() {
    // Идём влево.
    this.position[1] -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position[1] += 1;
  }

  moveDown() {
    // Идём вправо.
    if (this.position[0] < 6) {
      this.position[0] += 1;
    }
  }

  moveUp() {
    // Идём вправо.
    if (this.position[0] > 0) {
      this.position[0] -= 1;
    }
  }

  attack() {
    // Атакуем.
    this.boomerang.fly();
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;
