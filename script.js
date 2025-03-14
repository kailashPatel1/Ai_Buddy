// Speech recognition setup
const recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition)();
recognition.lang = "en-US";
const btn = document.querySelector("#listen-btn");



btn.addEventListener("click", function () {
  // Function to convert text to speech
  function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  }

  
  // Function to handle recognized commands
  function handleCommand(command) {
    if (command.includes("open youtube")) {
      speak("Opening YouTube...");
      window.open("https://www.youtube.com", "_blank");
    } else if (command.includes("open google")) {
      speak("Opening Google...");
      window.open("https://www.google.com", "_blank");
    } else if (command.includes("open facebook")) {
      speak("Opening Facebook...");
      window.open("https://www.facebook.com", "_blank");
    } else if (command.includes("open instagram")) {
      speak("Opening Instagram...");
      window.open("https://www.instagram.com", "_blank");
    } else if (command.includes("open whatsapp")) {
      speak("Opening WhatsApp...");
      window.open("https://www.whatsapp.com", "_blank");
    } else {
      
      speak("Searching Google for " + command);
      window.open(
        `https://www.google.com/search?q=${encodeURIComponent(command)}`,
        "_blank"
      );
    }
  }

  
  speak("hello Buddy, how can I help you?");

  
  setTimeout(() => {
    btn.innerHTML = "Listening....👂🧏‍♂️";
    btn.classList.add("listening");
    recognition.start();
  }, 2500);

  // When a result is received
  recognition.onresult = (event) => {
    console.log(event);
    const command = event.results[0][0].transcript.toLowerCase();
    handleCommand(command);
  };

  // When recognition ends
  recognition.onend = () => {
    btn.innerHTML = "Start Listening";
    btn.classList.remove("listening");
  };
});
