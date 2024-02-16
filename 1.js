// // 確保DOM已經加載完畢
// document.addEventListener("DOMContentLoaded", function() {
//     // 獲取按鈕元素
//     var gameStartButton = document.getElementById('gameStart');
//     // 獲取容器元素
//     var homepageContainer = document.getElementById('homepageContainer');

//     // 綁定點擊事件
//     gameStartButton.onclick = gameStart;
//     // 定義函數
//     function gameStart() {
//         homepageContainer.style.opacity = "0";
//     }
// });

$('#gameStart').onclick(function() {
    $("#homepageContainer").addClass('hidn');
})

