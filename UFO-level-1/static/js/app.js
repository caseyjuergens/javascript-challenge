// from data.js
var tableData = data;

var tbody= d3.select("tbody");
var button = d3.select("#filter-btn");
var form = d3.select("#form");


//load data, iterate thru rows
function loadData(){
    tableData.forEach(function(sighting){
        console.log(sighting)
        var row= tbody.append("tr");

        Object.values(sighting).forEach(function(value){
            console.log(value);
            var cell=row.append("td");
            cell.text(value);
        });
    });
}
loadData();

button.on("click", runEnter);
form.on("click", runEnter);

//create function to filter by date
function runEnter(){
    //prevent page
    d3.event.preventDefault();
    var inputDate= d3.select("#datetime").property("value");
    console.log(inputDate);
    d3.select("label>span").text(inputDate);

    //filter data by date
    var filterByDate= tableData.filter(element => element.datetime ===inputDate);
    console.log(filterByDate);
    //clear table
    tbody.html("");

    loadData(filterByDate);
    
}




