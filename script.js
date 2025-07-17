let userName = "";

const quotesByMood = {
  sad: [
    { text: "Tough times never last, but tough people do.", author: "Robert H. Schuller" },
    { text: "This too shall pass.", author: "Persian Proverb" }
  ],
  tired: [
    { text: "Rest if you must, but don’t you quit.", author: "John Greenleaf Whittier" },
    { text: "Even the moon needs the night to shine. Rest and rise. 🌙", author: "Unknown" }
  ],
  stressed: [
    { text: "You don't have to control your thoughts. Just stop letting them control you.", author: "Dan Millman" },
    { text: "Breathe deeply. You are held by the universe. 🕊️", author: "Unknown" }
  ],
  lazy: [
    { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
    { text: "A small step is still a step. 🌱", author: "Unknown" }
  ],
  happy: [
    { text: "Keep shining. Your light inspires others. ✨", author: "Unknown" },
    { text: "Joy is a habit. Cultivate it like a garden. 🌸", author: "Unknown" }
  ]
};

function askMood() {
  const input = document.getElementById("username").value.trim();

  if (!input) {
    alert("Please enter your name 💖");
    return;
  }

  userName = input;
  document.getElementById("name-form").style.display = "none";
  document.getElementById("mood-form").style.display = "block";

  document.getElementById("greeting").innerText = `Hello, ${userName} 😇🌿 How is your soul feeling today?`;
}

function showQuote() {
  const mood = document.getElementById("mood-select").value;

  if (!mood || !quotesByMood[mood]) {
    alert("Please select a mood 💭");
    return;
  }

  const moodQuotes = quotesByMood[mood];
  const randomIndex = Math.floor(Math.random() * moodQuotes.length);
  const selected = moodQuotes[randomIndex];

  document.getElementById("quote").innerText = `🌸 \"${selected.text}\"`;
  document.getElementById("author").innerText = `– ${selected.author}`;
}
