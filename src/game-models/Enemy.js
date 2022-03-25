// Враг.

class Enemy {
  constructor() {
    this.generateSkin();
    this.position = [69, this.generateRand()];
  }

  generateRand() {
    const num = Math.floor(Math.random() * 6);
    return num;
  }

  generateSkin() {
    const skins = ['👾', '💀', '👹', '👻', '👽', '👿', '💩', '🤡', '🤺', '🧛', '🧟', '🎃'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    setInterval(() => {
      if (this.position[0] > 1) {
        this.position[0] -= 1;
      }
    }, 200);
  }

  // moveLeft()
  die() {
    this.position = '?';
    console.log('Enemy is dead!');
  }
}

module.exports = Enemy;
