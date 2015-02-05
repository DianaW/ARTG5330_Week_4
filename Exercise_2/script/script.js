//First, find out a crucial piece of information: how wide and how high is the .canvas <div> element?
var width = $(".canvas").width(),
    height = $(".canvas").height();

console.log("Width: ", width, "Height: ", height);

//Next, let's draw a <svg> element under .canvas <div>
//<svg> needs two attributes at least: width and height
d3.select('.canvas')
    .append('svg')
    .attr('width',width) //note .attr()
    .attr('height',height)
    .append('circle')
    .attr('cx',100)
    .attr('cy',100)
    .attr('r',50);
d3.select('svg')
    .append('circle')
    .attr('cx',200)
    .attr('cy',100)
    .attr('r',100)
    .style('fill','#03a200');

//In class
$('body').on('click', function(e){

    console.log(e.target);
    console.log(e.pageX, e.pageY);
    console.log(e);

});