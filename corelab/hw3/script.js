
// console.log(pages);

// function event (){
// 	document.querySelector(".sidebar");
// }

// for (var i = 0; i < pages.length; i++){
// 	pages[i].onload = function(event){
// event.target.remove();
// document.querySelector(".sidebar").appendChild(event.target);
// 	}
// }

var pages = ["index","writings","drawings", "sketchbook", "prints", "travel", "organizations", "contact", "links"];

 var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);  
  // var randomColor2 = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);  

document.querySelector(".sidebar").style.background=randomColor;

// document.querySelector(".content").style.background=randomColor2;
 
function sidebarlist (){

	for(i=0;i< pages.length; i++)
	 {	
	 	var bruh = document.createElement('a');
	 		console.log(bruh);
		bruh.innerHTML = pages[i] + "<br>";
		bruh.setAttribute("href", pages[i] + ".html");

		document.querySelector(".sidebar").appendChild(bruh);
	}
}
	
sidebarlist();

