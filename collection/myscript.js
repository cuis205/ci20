

// var films;
// var data;
var years;
var auteurship;
var gender; 

//// *******build page
// var ordering;

function buildPage(data){
var films = data;

///******** years 

// var years = films.sort(function (a, b) {
//   return a.Year - b.Year;
// });

// console.log(years);

//********* auteurship 
	// var auteurship = films.sort(function (a, b) {
 //  	return b.auteurship - a.auteurship;
 //  });

// // // **************gender 
// var gender = films.sort(); 

// **************color
// console.log(films);


////// this is tile style

  //delete everything from each of the row first

  var row;

  // this for-loop operates on each movie, and builds a block for it
  for (var i=0; i<films.length; i++){
 
    if (i<10){
      row = document.querySelector('.row1');
    } else if (i<20){
    	row = document.querySelector('.row2');
    } else if (i<30){
    	row = document.querySelector('.row3');
    } else if (i<40){
    	row = document.querySelector('.row4');
    } else if (i<50){
    	row = document.querySelector('.row5');
    } else if (i<60){
    	row = document.querySelector('.row6');
    } else if (i<70){
    	row = document.querySelector('.row7');
    } else if (i<80){
    	row = document.querySelector('.row8');
    } else if (i<90){
    	row = document.querySelector('.row9');
    } else if (i<100){
    	row = document.querySelector('.row10');
    }


     //makes an element
    var tiles = films[i];
    el = document.createElement('div');
	el.style.backgroundColor= '#' + tiles.HEX;
    
    // el.innerHTML=tiles.Film;
    el.setAttribute("id","sizing");
    //adds the element to the row
    row.appendChild(el);

  }

}

function aute(){
	var auteurship = films.sort(function (a, b) {
  	return b.auteurship - a.auteurship;
  });
};



// el.onclick=popUp(i);


// function popUp(){
//   if (ordering=='year'){
//     array=year;
//   }
//   title=array[i].film;
//   director=array[i].directory;

// }
