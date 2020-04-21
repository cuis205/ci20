

var years;
var auteurship;
var gender; 
var films;
var title;

function buildPage(data){
films = DATA;

  var row;

  // this for-loop operates on each movie, and builds a block for it
  // for (var i=0; i<films.length; i++){
  //function scope 
 Array.from(films).forEach((film,i) => {

    if (i<10){
      row = document.querySelector('#row1');
    } else if (i<20){
    	row = document.querySelector('#row2');
    } else if (i<30){
    	row = document.querySelector('#row3');
    } else if (i<40){
    	row = document.querySelector('#row4');
    } else if (i<50){
    	row = document.querySelector('#row5');
    } else if (i<60){
    	row = document.querySelector('#row6');
    } else if (i<70){
    	row = document.querySelector('#row7');
    } else if (i<80){
    	row = document.querySelector('#row8');
    } else if (i<90){
    	row = document.querySelector('#row9');
    } else if (i<100){
    	row = document.querySelector('#row10');
    } else if (i<110){
    	row = document.querySelector('#row11');
    }else if (i<120){
    	row = document.querySelector('#row12');
    }else if (i<130){
    	row = document.querySelector('#row13');
    }else if (i<140){
    	row = document.querySelector('#row14');
    }else if (i<150){
    	row = document.querySelector('#row15');
    }


     //makes an element
    var tiles = films[i];
    el = document.createElement('div');
	el.style.backgroundColor= '#' + tiles.HEX;
    
    // el.innerHTML=tiles.Film;
    el.setAttribute("class","sizing");
    el.setAttribute("id","filminfo");
    //adds the element to the row
    row.appendChild(el);



	el.addEventListener("click",function(){popUp(film)});


  }); 
};




function popUp(film){


window.onclick = function (e) {
    var x = e.pageX,
        y = e.pageY;

 //        $('#infopop').css({
	// 'left': e.pageX + 250,
	// 'top': e.pageY +150,});


        $('#infopop').position({   

   my: "left+3 top-1",
    of: e,
    collision: "flipfit" });
};

$('#infopop').fadeIn(350);


   filmname = film.Film;
   directorname = film.Director;
   filmyear = film.Year;
   filmcol = film.Colour;
   filmgenre = film.Genre;
   filmdes = film.Description;
   filmwrite = film.Writer;
   gender = film.DirGen;
   auterat = film.auteurship;


 
   movieinfo = document.querySelector('#movieinfo');
   infopop = document.querySelector('#infopop');

   movieinfo.innerHTML = 
   '<strong>' + filmname + '</strong>' +  ' ' + '(' + filmyear + ')' 
   + '</br>' + '<strong>' +
   'Dir.:' + '</strong>' + directorname  +  '</br>' +
   '<strong>'+ 'Writer(s):'+'</strong>'+ filmwrite + '</br>' +
    '<strong>' + 'Palette:' + '</strong>' + filmcol 
   +  '</br>' +  '</br>' + filmdes 

   +  '</br>' +  '</br>' +  '<strong>'+ 'Genre(s):' + '</strong>' + filmgenre
   + '</br>' + '<strong>' + 'Director(s) Gender:' + '</strong>' + gender 
   + '</br>' + '<strong>' + 'Auteurship:' + '</strong>' + auterat 
   ;

};

window.onload = function(){
var btn = document.getElementById('close-button');

 btn.onclick = function(event) {
  $('#infopop').css("display","none");
};

};

// +  '</br>' +
//AUTE SHIP

function aute(BuildPage){
$('.row').empty();
 $('#infopop').css("display","none");

	var auteurship = DATA.sort(function (a, b) {
  	return b.auteurship - a.auteurship;

  });

buildPage(aute);
//modify data by any combination of filtering and sorting 
// var newdata = DATA.sort
// call buildpage and pass in newdata as the argument 
};


///YEAR
function year(BuildPage){
$('.row').empty();
 $('#infopop').css("display","none");
	var years = DATA.sort(function (a, b) {
  return a.Year - b.Year;
});

buildPage(year);
};

///GENDER
function gen(BuildPage){
$('.row').empty();
 $('#infopop').css("display","none");
	DATA.sort(function(a, b) {
  var DirGenA = a.DirGen.toUpperCase(); // ignore upper and lowercase
  var DirGenB = b.DirGen.toUpperCase(); // ignore upper and lowercase
  if (DirGenA < DirGenB) {
    return -1;
  }
  if (DirGenA > DirGenB) {
    return 1;
  }

  // names must be equal
  return 0;
});

buildPage(gen);
};

//Colour
function col(BuildPage){
$('.row').empty();
 $('#infopop').css("display","none");
	DATA.sort(function(a, b) {
  var colourA = a.Colour.toUpperCase(); // ignore upper and lowercase
  var colourB = b.Colour.toUpperCase(); // ignore upper and lowercase
  if (colourA < colourB) {
    return -1;
  }
  if (colourA > colourB) {
    return 1;
  }

  // names must be equal
  return 0;
});

buildPage(col);
};

// 
// };

//create another div per movie w/ information 
//absolute position & z-index
//have those divs hidden by default 
//then on event the divs will be shown


  // $( '.row' ).on( 'click', 'div', function popUp(film) { 
  // 	filmname = film.Film;
  //    console.log(filmname);
  // });

