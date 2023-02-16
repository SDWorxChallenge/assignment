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

                    //Add the header row.
                    var row = table.insertRow(-1);

                    //Add the header cells.
                    var headerCell = document.createElement("TH");
                    headerCell.innerHTML = "NAME";
                    row.appendChild(headerCell);

                    headerCell = document.createElement("TH");
                    headerCell.innerHTML = "DATE OF BIRTH";
                    row.appendChild(headerCell);

                    headerCell = document.createElement("TH");
                    headerCell.innerHTML = "CITY";
                    row.appendChild(headerCell);

                    headerCell = document.createElement("TH");
                    headerCell.innerHTML = "COUNTRY";
                    row.appendChild(headerCell);

                    //Add the data rows.
                    for (var i = 0; i < tableData.length; i++) {
                        //Add the data row.
                        var row = table.insertRow(-1);

                        //Add the data cells.
                        var cell = row.insertCell(-1);
                        cell.innerHTML = tableData[i].name;

                        cell = row.insertCell(-1);
                        let DOB = new Date(tableData[i].dateOfBirth);
                        cell.innerHTML = DOB.toLocaleDateString();

                        cell = row.insertCell(-1);
                        cell.innerHTML = tableData[i].country;

                        cell = row.insertCell(-1);
                        cell.innerHTML = tableData[i].city;

                        cell = row.insertCell(-1);
                        cell.addEventListener("click", function(e) {
                            console.log("Delete row");
                            e.currentTarget.parentNode.remove();
                        });
                        cell.id = "deleteButton";
                        cell.innerHTML = "🗑️"
                    }

                    document.appendChild(table);
}