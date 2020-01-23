$(document).ready(function(){

$('.center').on('click', function(){
	$('body').css({
      'background-image': 'url("start.gif")',
      'background-repeat':'no-repeat',
      'background-color':'black',
      'background-size': 'cover'});

	$('.text').html('<p>center x1: when this button is pressed, the device will begin playing the music. depending on whether or not a streaming service was playing prior, music will be played from the default app <br> <br> function rating:10/10 <br>final thought: love to hear it 🎧</p>');

 });


$('.center').on('dblclick', function(){ 
 $('body').css({
      'background-image': 'url("pause.png")',
      'background-repeat':'no-repeat',
      'background-color':'black',
      'background-size': 'cover',
  });

	$('.text').html('<p>center x2: this pauses the music. not much else. <br> <br> function rating:7/10 <br>final thought: useful (?) 🕰</p>');

	 });

$('.plus').on('click', function(){
 $('body').css({
      'background-image': 'url("volup.gif")',
      'background-repeat':'no-repeat',
      'background-color':'black',
      'background-size': 'cover',
 });

	$('.text').html('<p>plus x1: this increases the volume just a bit. now i can listen to cant fight this feeling anymore by reo speedwagon <br> <br> function rating:11/10 <br>final thought: very much adequate 💿</p>');
 });

$('.plus').on('dblclick', function(){
 $('body').css({
      'background-image': 'url("volup2.gif")',
      'background-repeat':'no-repeat',
      'background-color':'black',
      'background-size': 'cover',
 });

	$('.text').html('<p>plus x2: this increases the volume more. maybe too much. it is a personal choice to shut out the world around you. i get it. <br> <br> function rating:100/10 <br>final thought: ear damage ? thanks 🌽</p>');
 });

 $('.minus').on('click', function(){ 
 $('body').css({ 
      'background-image': 'url("start.gif")',
      'background-repeat':'no-repeat',
      'background-color':'black',
      'background-size': 'cover',
 	});

$('.text').html('<p>minus x1: this lowers the volume. <br> <br> function rating:7/10 <br>final thought: ok???? </p>');
 });

$('.minus').on('dblclick', function(){ 
 $('body').css({ 
      'background-image': 'url("voldown.gif")',
      'background-repeat':'no-repeat',
      'background-color':'black',
      'background-size': 'cover',
 	});
 $('.text').html('<p>minus x2: this lowers the volume unitl it is difficult to hear. unfortunately my hearing has gotten worse (or maybe new york is just louder) but i dont really hear anything. maybe i am just geriatric <br><br> function rating: 1/10 <br> final thought: too geriatric 👴</p>');
 });

 $('.exit').on('click', function(){ 
 $('body').css({ 
      'background-image': '',
      'background-repeat':'',
      'background-color':'',
      'background-size': '',
 	});
 $('.text').html('');
 });
  });

 	

