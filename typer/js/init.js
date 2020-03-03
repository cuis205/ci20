//tone.js  
var word = "";
var synth;





 window.onload = function() {
  var context = new AudioContext();
 synth = new Tone.Synth({
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

// var piano = new Tone.PolySynth(4, Tone.Synth, {
//     "volume" : -8,
//     "oscillator" : {
//         "partials" : [1, 2, 5],
//     },
//     "portamento" : 0.005
// }).toMaster()

}
var entryCount = 0;
var displayCount = 0;

function createLetter(key) {
  entryCount += 1;
  displayCount += 1;
  var cursor = document.querySelector("#cursor");
  var span = document.createElement("span");
  span.innerHTML = key;
  cursor.parentNode.insertBefore(span, cursor);
}

function deleteElement() {
  entryCount += 1;
  var letter = document.querySelector("#cursor").previousSibling;
  if (letter) {
    letter.remove();
    displayCount -= 1;
    if (displayCount < 0) {
      displayCount = 0;
    }
  }
}

document.addEventListener('keydown', async () => {
  await Tone.start()
  console.log('audio is ready')
})

document.onkeydown = function(e) { 
//firstpress // newdiv stuff 
    var divCount = $("#container div").length;
    console.log(divCount);
    var addDiv = `<div class=new id=${divCount}></div>`;
    var num = divCount;

    var firstPressed = entryCount;
    console.log(firstPressed);
    var i = 0;
    if (firstPressed == i){
      $('#container').append(addDiv);
    }

//color 
//color range 100-255
//highest keycode is 222

    // var blah = `${e.keyCode}`;
    // var green = entryCount;
    // gmod = green + Math.random() * 60;

    // console.log(blah);
    // var modifier=blah/1000;
    // lettermod=Math.floor(modifier*222);
    // r=Math.floor(Math.random() * 155)+lettermod;
    // g=Math.floor(Math.random() * 255)+lettermod;
    // b=Math.floor(Math.random() * 255)-lettermod;

    // var color = `rgba(${r},${g},${b},1)`;
    // console.log(color);

    // $('.colorcontain').append('rgba'+ `[${r},${g},${b}]` + '</br>' ); 

//hsl colour 
//2-357 colour
// 65-200 sat 
//hsl(2, 100%, 50%)

  var blah = `${e.keyCode}`;
  var oof = blah+1;

  while (oof >= 357){oof = oof - 300;}


  console.log('color'+ oof);

  var satmod = entryCount; 
  var sat = satmod + Math.floor(Math.random() * (80-80) +80);
  while (sat >= 90){ sat = sat - 30; }

  var light = Math.floor(Math.random() * (80-50) +50);
  var color = `hsl(${oof},${sat}%,${light}%)`;

  // var entr = `hsl(${oof},${sat}%,${light}%)`;

  $('.colorcontain').append('hsl'+ `[${oof},${sat}%,${light}%]` + '</br>' ); 


//letters
// var neue = document.querySelector(".new");
// neue.style['top'] = posy + '%';
// neue.style['right'] = posx + '%';


var vowels = ['a','e','i']
var vowelstwo = ['o','u','y']
var consone = ['q','w','r']
var constwo = ['d','f','t']
var consthree = ['z','x','c']
var consfour = ['g','h']
var consfive = ['s','f','k']
var conssix = ['l','m','n']
var seven = ['v','c','p']
var bass = ['j','b']

//chords

// var synth = new Tone.PolySynth(6, Tone.Synth).toMaster();
// synth.set("detune", -1200);
// document.addEventListener("keydowndown", attack);
// document.addEventListener("keyup", release);

if (vowels.indexOf(e.key)!== -1){
  synth.triggerAttackRelease("B4", "8n");
    $('.notesplayed').append("B4"+" ");
}

if (vowelstwo.indexOf(e.key)!== -1){
  synth.triggerAttackRelease("G3", "8n");
    $('.notesplayed').append("G3"+" ");
}

if (consone.indexOf(e.key)!== -1){
    synth.triggerAttackRelease('D4', '8n');
    $('.notesplayed').append("D4"+" ");
}

if (constwo.indexOf(e.key)!== -1){
    synth.triggerAttackRelease('G4', '8n');
    $('.notesplayed').append("G4"+" ");
}

if (consthree.indexOf(e.key)!== -1){
    synth.triggerAttackRelease('F#4', '8n');
    $('.notesplayed').append("F#4"+" ");
}

if (consfour.indexOf(e.key)!== -1){
    synth.triggerAttackRelease('E4', '8n');
    $('.notesplayed').append("E4"+" ");
}

if (consfive.indexOf(e.key)!== -1){
    synth.triggerAttackRelease('A4', '8n');
    $('.notesplayed').append("A4"+" ");
}

if (conssix.indexOf(e.key)!== -1){
    synth.triggerAttackRelease('B3', '8n');
    $('.notesplayed').append("B3"+" ");
}

if (seven.indexOf(e.key)!== -1){
    synth.triggerAttackRelease('C#4', '8n');
    $('.notesplayed').append("C#4"+" ");
}

if (bass.indexOf(e.key)!== -1){
    synth.triggerAttackRelease('F#4', '8n');
    $('.notesplayed').append("F#4"+" ");
}



  if (e.keyCode == 8) {
    deleteElement();

  }

  if (e.keyCode == 13) {
    createLetter("<br>");
   $('body').removeClass('new:last');
  }

 

    if (e.keyCode == 190) {
    $('container').append(addDiv);
    $('.new:last').addClass('noblur');

}

  if (e.key == " ") {
    createLetter("&nbsp;");
    $('#container').append(addDiv);
 }


 // 

  var xmod = Math.floor(Math.random() * 100);
  var posx = xmod - 20;
  var ymod = Math.floor(Math.random() * 100);

  var posy = ymod - 20;
  var divsize = Math.floor(Math.random() * (900-200) +200);
  console.log("X:" + posx + " Y:" + posx + " Size:" + divsize);


  $('.new').css({
    'border-radius':'50%',
    'position': 'absolute',
    'z-index':'-1',
  });


var filt = Math.floor(Math.random() * (100-35)+35);
console.log('this' + filt);

  $('.new:last').css({
    'background-color':color,
    'top': posy + '%',
    'right': posx + '%', 
    'width': divsize,
    'height': divsize,  
    'margin-left': "-" + divsize / 2,
    'margin-top': "-" + divsize / 2,
    'mix-blend-mode': 'overlay',
    '-webkit-animation': 'fadein 1s',
    'filter': `blur(${filt}px)`,
  })


// $('#'+ num).load('url', function(){
//     $('#'+num).trigger('foohappened')
// });

// $('#'+ num).on('foohappened', function(){
//   $('#'+num).css({ 
   
//     });
// });


  
  // anything contained in this string is allowed to print to the screen
  // you can add numbers or symbols
  if ("abcdefghijklmnopqrstuvwxyz!,'.;:?0123456789".includes(e.key.toLowerCase())) {
    createLetter(e.key);
  }
    console.log(word); 
  console.log("entry #" + entryCount + " : " + e.keyCode + " | " + e.key + ". Showing " + displayCount);
}

