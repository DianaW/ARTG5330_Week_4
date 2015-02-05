//Organizing the code better: we organize the program as a number of functions

var pageWidth = $('.canvas').width(),
    pageHeight = $('.canvas').height();
var margins = {t:200,r:100,b:250,l:100};
var plotWidth = pageWidth - margins.l - margins.r,
    plotHeight = pageHeight - margins.t - margins.b;
var numOfDataPoints = 300;

//We only need to draw svg once, so this block of code is moved out of any event listeners
var scatterPlot = d3.select('.canvas')
    .append('svg')
    .attr('width',pageWidth)
    .attr('height',pageHeight)
    .append('g')
    .attr('transform','translate(100,200)');


//AFTER we've set up the svg canvas, we can then set up the event listener
//note that the event handler function now has a name: drawScatterPlot
$(".control #scatter-plot").on('click', drawScatterPlot);


//ADDED: we put the block of code for generating data array into a function
function generateData(){
    var dataArray = [];
    for(var i = 0; i < numOfDataPoints; i++){
        var dataPoint = Math.random()*plotHeight;
        dataArray.push( dataPoint );
    }

    //spits the value back out
    return dataArray;
}


//ADDED: drawScatterPlot function handles click events on #scatter-plot
function drawScatterPlot(e){
    e.preventDefault();
    var newArray = generateData();

    //Just for fun, let's generate a new random color every time we draw a new scatter plot
    var r=Math.round(Math.random()*255),
        g=Math.round(Math.random()*255),
        b=255;
    var newColor = 'rgb('+r+','+g+','+b+')'; //e.g. "rgb(100,100,100)"

    //now onto the for loop
    for(var i = 0; i<numOfDataPoints; i++){
        scatterPlot.append('circle')
            .attr('class','data-point')
            .attr('r',3)
            .attr('cx',plotWidth/numOfDataPoints*i)
            .attr('cy',newArray[i])
            .style('fill',newColor);
    }
}

