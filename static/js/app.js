
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
    var inputCity= d3.select("#City").property("value").toLowerCase().trim();
    var inputState= d3.select("#State").property("value").toLowerCase().trim();
    var inputCountry= d3.select("#Country").property("value").toLowerCase().trim();
    var inputShape= d3.select("#Shape").property("value").toLowerCase().trim();
    

    var inputUser={ datetime:inputDate,
                    city:inputCity,
                    state:inputState,
                    country:inputCountry,
                    shape:inputShape
                    }
    

    Object.entries(inputUser).forEach(([key, value]) => {
      if(value===""){
        delete  inputUser[key];
      }   
     });


   //console.log(inputUser);
    //console.log("Button Click Event");
    //console.log("inputValue :",inputUser);
    
   

    filteredData = filteredData.filter(row => {
      return Object.entries(inputUser).every(criteria => {
        const key = criteria[0]
        const value = criteria[1]
        return row[key] === value
      })
    })
    
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