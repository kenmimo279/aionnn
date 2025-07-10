
let history = [];
let gameStarted = false;

function submitResult() {
    const input = document.getElementById("resultInput").value.trim().toUpperCase();
    if (!["B", "P", "T"].includes(input)) {
        alert("กรุณาใส่ B, P หรือ T เท่านั้น");
        return;
    }
    history.push(input);
    document.getElementById("resultInput").value = "";
    displayOutput("✅ บันทึกผล: " + input);
}

function startGame() {
    gameStarted = true;
    history = [];
    displayOutput("🎮 เริ่มเกมใหม่");
}

function endGame() {
    gameStarted = false;
    displayOutput("📊 จบเกม
ผลที่บันทึก: " + history.join(", "));
}

function displayOutput(text) {
    const output = document.getElementById("output");
    output.textContent += text + "\n";
}
