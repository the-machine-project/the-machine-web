/* global WaveSurfer: true */
$(document).ready(function(){
  
  var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'white',
    progressColor: 'white',
    barWidth: 5
  });  

  var microphone = Object.create(WaveSurfer.Microphone);
  microphone.init({wavesurfer: wavesurfer});

  microphone.start();
  
  var recognition = new webkitSpeechRecognition();
  recognition.continuous = true; 
  recognition.interemResults = true;

  recognition.onresult = function(event){
    var transcript = event.results[event.resultIndex][0].transcript;

    $('div#text').html(transcript);
  }
  recognition.start();
});
