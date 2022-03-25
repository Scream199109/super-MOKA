// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor() {
    this.skin = '🌀';
    this.position = [0, 0];
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
module.exports = Boomerang;
