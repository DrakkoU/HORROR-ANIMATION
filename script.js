// 1. Create infinite blood rain
function createBloodRain() {
    setInterval(() => {
        const drop = document.createElement("div");
        drop.className = "blood-drop";
        drop.style.left = `${Math.random() * 100}%`;
        drop.style.opacity = Math.random();
        drop.style.animationDuration = `${Math.random() * 0.5 + 0.5}s`;
        document.getElementById("blood-rain").appendChild(drop);
        
        // Remove after animation
        setTimeout(() => drop.remove(), 1000);
    }, 50);
}

// 2. Spawn floating demonic runes
function spawnRunes() {
    const runes = ["⚰️", "👁", "🕳", "☠️"];
    setInterval(() => {
        const rune = document.createElement("div");
        rune.textContent = runes[Math.floor(Math.random() * runes.length)];
        rune.style.position = "absolute";
        rune.style.left = `${Math.random() * 100}%`;
        rune.style.top = `${Math.random() * 100}%`;
        rune.style.fontSize = `${Math.random() * 30 + 20}px`;
        rune.style.opacity = "0";
        rune.style.animation = `
            float ${Math.random() * 10 + 5}s linear infinite,
            fadeIn 2s forwards
        `;
        document.body.appendChild(rune);
        
        // Remove after animation
        setTimeout(() => rune.remove(), 15000);
    }, 1000);
}

// CSS for runes (dynamically injected)
document.head.insertAdjacentHTML("beforeend", `
    <style>
        @keyframes float {
            0% { transform: translateY(0) rotate(0deg); }
            100% { transform: translateY(-100vh) rotate(360deg); }
        }
        @keyframes fadeIn {
            to { opacity: 0.7; }
        }
    </style>
`);

// 3. Start the animation
createBloodRain();
spawnRunes();

// 4. Make title respond to clicks
document.getElementById("title").onclick = () => {
    document.body.style.background = "#000";
    document.getElementById("title").textContent = "YOU HAVE BEEN SACRIFICED";
};