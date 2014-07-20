d3.json("csv/1.json", function(error, data) {
  if (error) return console.warn(error);
  
var escalaLat = d3.scale.linear()
   .domain ([36.09512222222222, 36.044919444444446])  //latitud
   .range([0,574 ]); // Height

var escalaLong = d3.scale.linear()
   .domain ([24.8242, 24.910272222222222])  //Longitud
   .range([0, 1024]); // Wdth

svgContainer = d3.select("body").append("svg")
                  .attr("width", 1024)
                    .attr("height",574 );

circles = svgContainer.selectAll("circle")
                    .data(data)
                    .enter()
                    .append("circle");

circleAttributes = circles
                       .attr("cy", function (d) { return escalaLat(d.Lat); })
                       .attr("cx", function (d) { return escalaLong(d.Long); })
                       .attr("r", 1)
                       .style("fill","red");

});

