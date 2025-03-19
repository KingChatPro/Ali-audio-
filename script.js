const apiKey = "860542969d7147a9b9f4805c715cf669";  // مفتاح VoiceRSS API

function speak() {
    let text = document.getElementById("textInput").value;
    let lang = document.getElementById("language").value;
    let speed = document.getElementById("speed").value;
    let pitch = document.getElementById("pitch").value;

    if (text.trim() === "") {
        alert("❌ يرجى إدخال النص أولاً!");
        return;
    }

    responsiveVoice.speak(text, lang, { rate: speed, pitch: pitch });
}

function saveAudio() {
    let text = document.getElementById("textInput").value;
    let lang = document.getElementById("language").value;

    if (text.trim() === "") {
        alert("❌ يرجى إدخال النص قبل الحفظ!");
        return;
    }

    let audioURL = `https://api.voicerss.org/?key=${apiKey}&hl=${lang}&src=${encodeURIComponent(text)}`;

    let link = document.createElement("a");
    link.href = audioURL;
    link.download = "audio.mp3";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
