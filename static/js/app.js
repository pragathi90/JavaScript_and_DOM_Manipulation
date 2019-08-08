
var tbody = d3.select("tbody");

var ufosighting=data;     


ufosighting.forEach((ufodata) => {
    var row = tbody.append("tr");
    Object.entries(ufodata).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  

  var filterbtn=d3.select("#filter-btn");
  
  filterbtn.on("click",function(){

    var filteredData = ufosighting;
    var inputDate= d3.select("#datetime").property("value");
   

    if(inputDate) {
      filteredData = filteredData.filter(row => row.datetime === inputDate);
    }
    
    
    var tableContent=d3.select("tbody");

    
    tableContent.html("");

    filteredData.forEach((fData) => {
      var row = tbody.append("tr");
      Object.entries(fData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
   });