// from data.js
var tableData = data;

// append a table to webpage, add new rows of data for each UFO sighting
//create column for date/time, city, state, country, shape, and comment
//use a date form to listen for events and search thru date/time columns

//use d3 to select table

var tbody= d3.select("tbody");

tableData.forEach(function(sighting){
    console.log(sighting)
    var row= tbody.append("tr");

    Object.values(sighting).forEach(function(value){
        console.log(value);
        var cell=row.append("td");
        cell.text(value);
    });
});

