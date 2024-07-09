const lyrics = [
  { text: "Sintang Paaralan", time: 13 },
  { text: "Tanglaw ka ng bayan", time: 15 },
  { text: "Pandayan ng isip ng kabataan", time: 18.5 },
  { text: "Kami ay dumating nang salat sa yaman", time: 24.5},
  { text: "Hanap na dunong ay iyong alay", time: 30},
  { text: "Ang layunin mong makatao", time:35.5},
  { text: "Dinarangal ang Pilipino", time: 41.5 },
  { text: "Ang iyong aral, diwa, adhikang taglay", time: 47.5 },
  { text: "PUP, aming gabay", time: 53.5 },
  { text: "Paaralang dakila", time: 56},
  { text: "PUP, pinagpala", time: 62.5},
  { text: "Gagamitin ang karunungan", time:69},
  { text: "Mula sa iyo, para sa bayan", time:73.5},
  { text: "Ang iyong aral, diwa, adhikang taglay", time: 80.5 },
  { text: "PUP, aming gabay", time: 85.5 },
  { text: "Paaralang dakila", time: 89 },
  { text: "PUP, pinagpala", time: 95.5},
  { text: "END", time: 104}
];

const audio = document.getElementById("audio");
const lyricsBox = document.getElementById("lyrics-content");
const lyricHeight = lyricsBox.querySelector("p").offsetHeight;

function updateLyrics() {
  const currentTime = audio.currentTime;
  let currentLine = 0;

  while (currentLine < lyrics.length && currentTime >= lyrics[currentLine].time) {
    currentLine++;
  }

  lyricsBox.querySelectorAll("p").forEach((line, index) => {
    line.classList.remove("current");
    if (index === currentLine - 1) {
      line.classList.add("current");
    }
  });

  const scrollPosition = (currentLine - 1) * lyricHeight;

  lyricsBox.parentElement.scrollTop = scrollPosition;
} 

audio.addEventListener("timeupdate", updateLyrics);

audio.play();