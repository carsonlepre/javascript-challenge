// loads data from the file provided and declares some global variables we'll be using in this script
var tableData = data;
var table = document.getElementById("ufo-table");
var button = document.getElementById("filter-btn");

tableData.forEach(tableInsert);
// function connected to the query from the index.html page. 
/*(The dataset actually only has one country, so I removed the "country" field from the starter html, so users wouldn't 
have the opportunity to input improperly formatted country queries. */
function returnQuery() {

  var date = document.getElementById("datetime").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var state = document.getElementById("shape").value;

  /*if/else block checks if anything has been input into the search fields, filters if that's what's needed, returns the full
  table if search fields are blank */
  if (date.length !== 0 || city.length !== 0 || state.length !== 0 || state.length !== 0) {
    var filterData = tableData.filter(function (ufo) 
    {
        return (
        (ufo.datetime === date || date.length === 0) &&
        (ufo.city === city || city.length === 0) &&
        (ufo.state === state || state.length === 0) &&
        (ufo.shape === state || state.length === 0)
        );
      });
    } 
  else {
    var filterData = tableData;
    }

  var rowCount = table.rows.length;
  for (var i = rowCount - 1; i > 0; i--) {
      table.deleteRow(i);
     }
  
  filterData.forEach(tableInsert);
}
//This function just lets users click back to the full table.
function repopulatePage() {
  var table = document.getElementById("ufo-table");
  table.innerHTML=""
  tableData.forEach(tableInsert);
}  

//function for populating the table
function tableInsert(ufo) {

    var row = table.insertRow(-1);

    var datetime = row.insertCell(0);
    var city = row.insertCell(1);
    var state = row.insertCell(2);
    var country = row.insertCell(3);
    var shape = row.insertCell(4);
    var duration = row.insertCell(5);
    var comments = row.insertCell(6);

    datetime.innerHTML = ufo.datetime;
    city.innerHTML = ufo.city;
    state.innerHTML = ufo.state;
    country.innerHTML = ufo.country;
    shape.innerHTML = ufo.shape;
    duration.innerHTML = ufo.duration;
    comments.innerHTML = ufo.comments; 
}