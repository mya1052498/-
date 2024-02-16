function startTransition() {
    var button = document.getElementById("startButton");
    var overlay = document.getElementById("overlay");

    // 按鈕慢慢透明
    button.style.opacity = "0";

    // 等待 1 秒後
    setTimeout(function() {
        // 延遲切換黑色背景
        overlay.style.opacity = "1";
        overlay.style.pointerEvents = "auto"; // 允許用戶與黑色覆蓋層進行交互
    }, 1000);

    // 等待 3 秒後切換到下一個畫面（示例中為 test.html）
    setTimeout(function() {
        window.location.href = "test.html";
    }, 3000);
}
