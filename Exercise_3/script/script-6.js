var pageWidth = $('.canvas').width(),
    pageHeight = $('.canvas').height();
var margins = {t:200,r:100,b:250,l:100};
var plotWidth = pageWidth - margins.l - margins.r,
    plotHeight = pageHeight - margins.t - margins.b;
var numOfDataPoints = 100;

var plot = d3.select('.canvas')
    .append('svg')
    .attr('width',pageWidth)
    .attr('height',pageHeight)
    .append('g')
    .attr('transform','translate('+margins.l+','+margins.t+')'); //note we've swapped out hard-coded numbers in favor of variables

plot.append('rect')
    .attr('width',plotWidth)
    .attr('height',plotHeight)
    .attr('class','background');


$(".control #scatter-plot").on('click', drawScatterPlot);

$(".control #bar-plot").on('click',drawBarChart);



function generateData(){
    var startingPos = Math.random()*Math.PI;

    var dataArray = [];
    for(var i = startingPos; i < numOfDataPoints; i += Math.PI/30){
        var dataPoint = Math.sin(i)*plotHeight/2 + plotHeight/2;
        dataArray.push( dataPoint );
    }

    return dataArray;
}



function drawScatterPlot(e){
    e.preventDefault();
    var newArray = generateData();

    var r=Math.round(Math.random()*255),
        g=Math.round(Math.random()*255),
        b=255;
    var newColor = 'rgb('+r+','+g+','+b+')'; //e.g. "rgb(100,100,100)"

    plot.selectAll('.plot')
        .remove();

    //ADDED: grouping svg elements under <g> where it makes sense
    var scatterPlot = plot.append('g')
        .attr('class','scatter-plot plot');

    for(var i = 0; i<numOfDataPoints; i++){
        scatterPlot.append('circle')
            .attr('class','data-point')
            .attr('r',3)
            .attr('cx',plotWidth/numOfDataPoints*i)
            .attr('cy',plotHeight-newArray[i])
            .style('fill',newColor);
        scatterPlot.append('text')
            .attr('class','data-point-label')
            .attr('x',plotWidth/numOfDataPoints*i)
            .attr('y',plotHeight-newArray[i])
            .text(Math.round(newArray[i]));
    }
}

function drawBarChart(e){
    //TODO: write the function that draws a bar chart
}