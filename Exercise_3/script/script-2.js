//This example calculates margins more succinctly

//We've added some global variables
var pageWidth = $('.canvas').width(),
    pageHeight = $('.canvas').height();
var margins = {t:200,r:100,b:250,l:100}; //ADDED: margins object
var plotWidth = pageWidth - margins.l - margins.r,
    plotHeight = pageHeight - margins.t - margins.b;
var numOfDataPoints = 300; //ADDED: variable to keep track of the number of data points we want to generate

var dataArray = [];
for(var i = 0; i < numOfDataPoints; i++){
    var dataPoint = Math.random()*plotHeight;
    dataArray.push( dataPoint );
}

$(".control #scatter-plot").on('click',function(e){
    e.preventDefault();

    var scatterPlot = d3.select('.canvas')
        .append('svg')
        .attr('width',pageWidth)
        .attr('height',pageHeight)
        .append('g')
        .attr('transform','translate(100,200)');

    for(var i = 0; i<numOfDataPoints; i++){
        scatterPlot.append('circle')
            .attr('class','data-point')
            .attr('r',2)
            .attr('cx',plotWidth/numOfDataPoints*i)
            .attr('cy',dataArray[i]);
    }
});
$(".control #bar-plot").on('click',function(e){
    e.preventDefault();
    alert("Bar chart coming soon");
})

