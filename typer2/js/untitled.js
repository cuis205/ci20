import * as Tone from "tone";
 =
 window.onload = function() {
  var context = new AudioContext();
  var synth = new Tone.Synth({
  oscillator: {
    type: 'triangle8'
  },
  envelope: {
    attack: 2,
    decay: 1,
    sustain: 0.4,
    release: 4
  }
}).toMaster()

}


function onkeydown(e){
  Tone.context.resume().then(() => {
    synth.triggerAttack(e.keyCode, Tone.context.currentTime)
  });
}
function onkeyup(e){
  Tone.context.resume().then(() => {
    synth.triggerRelease(e.keyCode)
  });
}


document.querySelector('#synthB').addEventListener('mousedown', function() {
  synthB.triggerAttack('C4')
})