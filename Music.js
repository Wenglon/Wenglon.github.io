var aud = document.getElementById('audio')
for(var strce;strce<2;strce++){
  var hurty=0
  var start=false;
}
    function adio() {
      document.getElementById('xd').style.display = "none "
      aud = document.getElementById('overworld')
      aud.play()
      aud.loop = true;
      aud.currentTime = 0;
    }
// Zatrzymaj muzykę, gdy użytkownik opuszcza stronę

window.addEventListener("beforeunload", function(event) { 
  // zatrzymaj odtwarzanie muzyki
  aud.pause();
});

window.addEventListener("focus", function(event) { 
  // wznow odtwarzanie muzyki
  aud.play();
});

window.addEventListener("blur", function(event) { 
  // zatrzymaj odtwarzanie muzyki
  aud.pause();
});
