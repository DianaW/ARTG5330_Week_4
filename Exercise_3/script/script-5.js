var pageWidth = $('.canvas').width(),
    pageHeight = $('.canvas').height();
var margins = {t:200,r:100,b:250,l:100};
var plotWidth = pageWidth - margins.l - margins.r,
    plotHeight = pageHeight - margins.t - margins.b;
var numOfDataPoints = 300;

var scatterPlot = d3.select('.canvas')
    .append('svg')
    .attr('width',pageWidth)
    .attr('height',pageHeight)
    .append('g')
    .attr('transform','translate(100,200)');


$(".control #scatter-plot").on('click', drawScatterPlot);




function generateData(){
    var dataArray = [];
    for(var i = 0; i < numOfDataPoints; i += Math.PI/30){
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

    //ADDED: we remove all the data-point circles before drawing new ones
    scatterPlot.selectAll('.data-point')
        .remove();
    scatterPlot.selectAll('.data-point-label')
        .remove();

    for(var i = 0; i<numOfDataPoints; i++){
        scatterPlot.append('circle')
            .attr('class','data-point')
            .attr('r',3)
            .attr('cx',plotWidth/numOfDataPoints*i)
            .attr('cy',plotHeight-newArray[i]) //Directionality of the y axis is flipped
            .style('fill',newColor);
        //ADDED: we also append a small text label
        scatterPlot.append('text')
            .attr('class','data-point-label')
            .attr('x',plotWidth/numOfDataPoints*i)
            .attr('y',plotHeight-newArray[i]) //Directionality of the y axis is flipped
            .text(Math.round(newArray[i]));
    }
}

