function startGame() {
  // 隱藏開始畫面
  document.getElementById('startScreen').classList.add('hidden');

  // 顯示遊戲畫面
  const gameScreen = document.getElementById('gameScreen');
  gameScreen.classList.remove('hidden');

  // 開始動畫效果
  fadeOutObjects();
}

function fadeOutObjects() {
  const gameScreen = document.getElementById('gameScreen');
  const objects = gameScreen.getElementsByTagName('h1');
  let opacity = 1;
  let interval = setInterval(() => {
    if (opacity > 0) {
      opacity -= 0.01;
      for (let i = 0; i < objects.length; i++) {
        objects[i].style.opacity = opacity;
      }
      gameScreen.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
    } else {
      clearInterval(interval);
      // 在這裡可以切換到下一個畫面或執行其他遊戲邏輯
    }
  }, 20);
}
