// Сделаем отдельный класс для отображения игры в консоли.

class View {
  render(track) {
    const yourTeamName = 'MOKA';
    // Тут всё рисуем.
    console.clear();
    for (let i = 0; i < track.length; i++) {
      console.log(track[i].join(''));
    }

    console.log('\n\n');
    console.log(`Created by "${yourTeamName}" with love`);
  }
}

module.exports = View;
