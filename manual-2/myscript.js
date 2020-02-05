$(document).ready(function(){

line1 = $('#line1');   
div1 = $('.playmusic');   
div2 = $('.div2');

var pos1 = div1.position();
var pos2 = div2.position();

line1
  .attr('x1', pos1.left)
  .attr('y1', pos1.top)
  .attr('x2', pos2.left)
  .attr('y2', pos2.top);

});