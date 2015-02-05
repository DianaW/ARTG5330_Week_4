/* This example shows how we can use variables to "store" selections and retain drawing context */

//First, find out a crucial piece of information: how wide and how high is the .canvas <div> element?
var width = $(".canvas").width(),
    height = $(".canvas").height();

console.log("Width: ", width, "Height: ", height);

//both .select and .append return new "selections"
var svg = d3.select('.canvas')
    .append('svg')
    .attr('width',width)
    .attr('height',height);

console.log(svg);

//now we can have access to the <svg> selection at all times
var circle1 = svg.append('circle')
    .attr('cx',100)
    .attr('cy',100)
    .attr('r',50);

console.log(circle1);

//of course, we DON'T need to assign each selection to a new variable
//we only do that if we care about reusing that selection
svg.append('circle')
    .attr('cx', 200)
    .attr('cy', 100)
    .attr('r',25);


