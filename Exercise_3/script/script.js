//Now let's determine the size of the plots
var pageWidth = $('.canvas').width(),
    pageHeight = $('.canvas').height();
var plotWidth = pageWidth - 100 - 100,
    plotHeight = pageHeight - 200 - 250;

//Start simple: let's generate an array with one hundred elements
var dataArray = [];
for(var i = 0; i < 100; i++){
    var dataPoint = Math.random()*plotHeight;
    dataArray.push( dataPoint );
}

//First, let's capture user click events
$(".control #scatter-plot").on('click',function(e){
    e.preventDefault();

    //let's draw the 100 dataPoints as circles
    //but before we go into that using a for loop, let's take care of business that needs to be done only once
    var scatterPlot = d3.select('.canvas')
        .append('svg')
        .attr('width',pageWidth)
        .attr('height',pageHeight)
        .append('g')
        .attr('transform','translate(100,200)');

    //now onto the for loop
    for(var i = 0; i<100; i++){
        scatterPlot.append('circle')
            .attr('class','data-point')
            .attr('r',3)
            .attr('cx',plotWidth/100*i)
            .attr('cy',dataArray[i]);
    }
});
$(".control #bar-plot").on('click',function(e){
    e.preventDefault();
    alert("Bar chart coming soon");
})

