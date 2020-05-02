// pew pew ticker
// var onionanchor;
// var longest;
var array1;
var array2;

window.onload = function() {
           var faker = "FAKE NEWS?"+" ";
           var realnew = "REAL NEWS?"+" ";
var tick = document.querySelector('.fakenew');
var tick2 = document.querySelector('.fakenew2');
tick.innerHTML = faker.repeat(1000);
tick2.innerHTML = realnew.repeat(1000);


var target = document.getElementById('mini');
var oneline = [
    'The state of the world is a joke! Embrace it.',
    'Send Help',
    'We Live in a Society',
    'The world is a joke and we are the punchline',
    "I don't know whats real anymore",
    "...you know what...maybe we ARE the virus",
    "Little did we know...Parasite winning best picture would be the best thing of 2020",
    "Please don't inject yourself with bleach"
];

function newTitle () {
    var i = (Math.random() * oneline.length) | 0;
    target.innerText = oneline[i];
}

newTitle();
        }
///ticker 

//jokes 

///jokes



function buildPage(){
  var row;
  var longest = array1.length > array2.length 
  ? array1.length 
  : array2.length;

console.log(array1[0]);

for (i = 0; i < longest; i++) {
   if (i<5){
      row = document.querySelector('#column1');
    } else {
      row = document.querySelector('#column2');
    };



    row.appendChild(array1[i][0]);
    row.appendChild(array1[i][1]);
    row.appendChild(array1[i][2]);
    row.appendChild(array2[i][0]);
    row.appendChild(array2[i][1]);
    row.appendChild(array2[i][2]);

    $(".onionan").click(function(){
      $(this).addClass('strike');

    });


}

  };



//NYT


// read the JSON file
var xmlhttp = new XMLHttpRequest();
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=mAyXdGEunWoYNLVIp8BYRey2mQ2lTgM6&begin_" ;
var data = [];
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText);
    console.log(data);

    array1 = printArticles(data);

     buildPage();
        console.log(array1);
        console.log(array2);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function printArticles(data){
  var docs = data.response.docs;

  var array = [];

  for (i = 0; i < docs.length; i++) {

    //  if (i<6){
    //   row = document.querySelector('#column1');
    // } else {
    //   row = document.querySelector('#column2');
    // };

    var item = document.createElement("div");
    item.classList.add('articles');
    item.innerText = docs[i].abstract;

    var anchor = document.createElement("a");
    anchor.innerText = docs[i].headline.main;
    anchor.href = docs[i].web_url;
    anchor.target = "_blank";

    var byline = document.createElement("div");
    byline.innerText = docs[i].byline.original;
    byline.setAttribute("class","byline");

    var nytart = [anchor, byline, item];
    array.push(nytart);
    // console.log(array);
 
    
    // row.appendChild(anchor);
    // row.appendChild(byline);
    // row.appendChild(item);

  }
  return array; 
    
  
}


//onion
  var DATA; 


  fetch("data.json")
  .then(function(blob){ return blob.json(); })
  .then(function(json){ 
    DATA = json;
    array2 = buildOnion(DATA);




   });


function buildOnion(DATA){
onion = DATA;
var oniarray = [];
// var row;

  for (i = 0; i < onion.length; i++) {
    // if (i<6){
    //   row = document.querySelector('#column1');
    // } else {
    //   row = document.querySelector('#column2');
    // };



    var onionart = onion[i];
    el = document.createElement('div');
    el.innerText = onionart.Abstract;
    el.setAttribute("class","onionab");

    var onionanchor = document.createElement("a");
    onionanchor.innerText = onionart.Headline;
    onionanchor.setAttribute("class","onionan");

    var onibyline = document.createElement("div");
    onibyline.innerText = onionart.Byline;
    onibyline.setAttribute("class","byline");

    // row.appendChild(onionanchor);
    // row.appendChild(onibyline);
    // row.appendChild(el);

  
    onionarticle = [onionanchor,onibyline, el];
    oniarray.push(onionarticle);
  
    

      
// console.log(oniarray);

    
}
return oniarray;  
};




//in a for loop 
//i index 
//if statement 


  // onionanchor.style.setProperty("text-decoration", "line-through");



