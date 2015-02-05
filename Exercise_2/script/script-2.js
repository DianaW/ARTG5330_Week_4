/* This example shows you how to draw some common SVG elements */

//First, find out a crucial piece of information: how wide and how high is the .canvas <div> element?
var width = $(".canvas").width(),
    height = $(".canvas").height();


//both .select and .append return new "selections"
var svg = d3.select('.canvas')
    .append('svg')
    .attr('width',width)
    .attr('height',height);


//Draw axes
var xPos = 0, yPos = 0;
while(xPos <= width){
    svg.append('line')
        .attr('x1',xPos)
        .attr('x2',xPos)
        .attr('y1',0)
        .attr('y2',height-15)
        .attr('class','axis');
    svg.append('text')
        .text(xPos)
        .attr('x',xPos)
        .attr('y',height)
        .attr('text-anchor','middle')
        .attr('class','axis-label');


    xPos += 50;
}
while(yPos <= height){
    svg.append('line')
        .attr('x1',0)
        .attr('x2',width)
        .attr('y1',yPos)
        .attr('y2',yPos)
        .attr('class','y-axis');
    svg.append('text')
        .text(yPos)
        .attr('x',width-50)
        .attr('y',yPos)
        .attr('class','y-axis-label');


    yPos += 50;
}

//Now let's append some items and see how they work
var circle1 = svg.append('circle')
    .attr('cx',100)
    .attr('cy',100)
    .attr('r',50)
    .attr('class','no-fill');

var circle2 = svg.append('circle')
    .attr('cx',100)
    .attr('cy',300)
    .attr('r',75)
    .style('fill','red');

svg.append('circle')
    .attr('cx',100)
    .attr('cy',350)
    .attr('r',75)
    .style('fill','blue');

svg.append('rect')
    .attr('x',250)
    .attr('y',100)
    .attr('width',100)
    .attr('height',150)
    .attr('class','no-fill thick-stroke');

svg.append('line')
    .attr('x1',400)
    .attr('y1',100)
    .attr('x2',550)
    .attr('y2',300)
    .attr('class','no-fill thick-stroke');

svg.append('text')
    .text('(400,100)')
    .attr('x',400)
    .attr('y',100)
    .attr('text-anchor','end');
svg.append('text')
    .text('(550,300)')
    .attr('x',550)
    .attr('y',300);


svg.append('polyline')
    .attr('points','550,100 600,120 650,200 700,150')
    .attr('class','no-fill thick-stroke');


svg.append('image')
    .attr('x',250)
    .attr('y',450)
    .attr('width',200)
    .attr('height',200)
    .attr('xlink:href','assets/Blank_US_Map.svg');

//TODO:create a group under <svg>
//Add a circle and a rect to the group
//And move the entire group by 200,200



//
var selection = d3.selectAll('circle');

console.log("The content of selection is ");
console.log(selection);