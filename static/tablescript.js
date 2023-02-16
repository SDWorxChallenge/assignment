$(document).ready(onDocumentLoad());

var tableData;

async function loadData() {
    const stations_url = 'https://63998da716b0fdad77409a5e.mockapi.io/api/v1/hikers';
    const response = await fetch(stations_url)
    tableData = JSON.parse(await response.text())
}

async function onDocumentLoad(){
    await loadData();
    console.log(tableData);
    //Create a HTML Table element.
                    var table = document.getElementById("dataTable");
                    table.border = "1";

                    //Add the header row.
                    var row = table.insertRow(-1);

                    //Add the header cells.
                    var headerCell = document.createElement("TH");
                    headerCell.innerHTML = "CustomerId";
                    row.appendChild(headerCell);

                    headerCell = document.createElement("TH");
                    headerCell.innerHTML = "Name";
                    row.appendChild(headerCell);

                    headerCell = document.createElement("TH");
                    headerCell.innerHTML = "Country";
                    row.appendChild(headerCell);

                    //Add the data rows.
                    for (var i = 0; i < customers.length; i++) {
                        //Add the data row.
                        var row = table.insertRow(-1);

                        //Add the data cells.
                        var cell = row.insertCell(-1);
                        cell.innerHTML = customers[i].CustomerId;

                        cell = row.insertCell(-1);
                        cell.innerHTML = customers[i].Name;

                        cell = row.insertCell(-1);
                        cell.innerHTML = customers[i].Country;
                    }

                    var dvTable = document.getElementById("dvCustomersGrid");
                    dvTable.innerHTML = "";
                    dvTable.appendChild(table);
}