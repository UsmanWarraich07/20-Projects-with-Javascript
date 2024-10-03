let speech = new SpeechSynthesisUtterance();
speech.lang = "en";

let voices = [];
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  const voiceSelect = document.querySelector("#voices");
  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

//SET RATE
document.querySelector("#rate").addEventListener("input", () => {
  const rate = document.querySelector("#rate").value;
  speech.rate = rate;

  document.querySelector("#rate-label").innerHTML = rate;
});

//SET VOLUME
document.querySelector("#volume").addEventListener("input", () => {
  const volume = document.querySelector("#volume").value;
  speech.volume = volume;

  document.querySelector("#volume-label").innerHTML = volume;
});

//SET PITCH
document.querySelector("#pitch").addEventListener("input", () => {
  const pitch = document.querySelector("#pitch").value;
  speech.pitch = pitch;

  document.querySelector("#pitch-label").innerHTML = pitch;
});

//SET VOICE
document.querySelector("#voices").addEventListener("change", () => {
  speech.voice = voices[document.querySelector("#voices").value];
});

//START
document.querySelector("#start").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});

//PAUSE
document.querySelector("#pause").addEventListener("click", () => {
  window.speechSynthesis.pause();
});

//RESUME
document.querySelector("#resume").addEventListener("click", () => {
  window.speechSynthesis.resume();
});

//CANCEL
document.querySelector("#cancel").addEventListener("click", () => {
  window.speechSynthesis.cancel();
});
