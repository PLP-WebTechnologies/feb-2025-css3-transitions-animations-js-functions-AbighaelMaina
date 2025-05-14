const emoji = document.getElementById("emoji");
const message = document.getElementById("message");
const body = document.body;

const moodData = {
  happy: {
    emoji: "😊",
    message: "Spread that joy around!",
    color: "#ffeaa7"
  },
  tired: {
    emoji: "😴",
    message: "Take it slow and rest!",
    color: "#dfe6e9"
  },
  stressed: {
    emoji: "😫",
    message: "Breathe in, breathe out. You got this.",
    color: "#fab1a0"
  },
  excited: {
    emoji: "🤩",
    message: "The world is your stage!",
    color: "#fd79a8"
  },
  chill: {
    emoji: "😎",
    message: "Vibes only. Relax and enjoy.",
    color: "#81ecec"
  }
};

function setMood(mood) {
  const { emoji: moodEmoji, message: moodMsg, color } = moodData[mood];

  emoji.textContent = moodEmoji;
  emoji.classList.remove("pop");
  void emoji.offsetWidth; // Restart animation
  emoji.classList.add("pop");

  message.textContent = moodMsg;
  body.style.backgroundColor = color;

  localStorage.setItem("savedMood", mood);
}

// Load saved mood
window.addEventListener("DOMContentLoaded", () => {
  const savedMood = localStorage.getItem("savedMood");
  if (savedMood && moodData[savedMood]) {
    setMood(savedMood);
  }
});

// Handle button clicks
document.querySelectorAll(".mood-buttons button").forEach(btn => {
  btn.addEventListener("click", () => {
    const mood = btn.getAttribute("data-mood");
    setMood(mood);
  });
});
