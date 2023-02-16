$(document).ready(onDocumentLoad());

var tableData;
let totalCount = 0;

async function loadData() {
    const stations_url = 'https://63998da716b0fdad77409a5e.mockapi.io/api/v1/hikers';
    const response = await fetch(stations_url)
    if(response.ok){
            tableData = JSON.parse(await response.text())
        return 0;
    }
    else{
        console.log("Error: " + response.status);
        return -1;
    }
}

async function onDocumentLoad(){
    let result = await loadData();
    if(result !== 0){
        window.alert("Error loading data. Please refresh the page.")
        return;
    }
    var table = document.getElementById("dataTable");

    screenWidth = window.innerWidth;

    let totalAttendees = document.getElementById("totalAttendees");
    totalAttendees.innerHTML = "Attendees (" + tableData.length + ")";
    totalCount = tableData.length;

    //Add the header row.
    var row = table.insertRow(-1);
    row.id = "headerRow";

    //Add the header cells.
    var headerCell = document.createElement("TH");
    if(screenWidth >= 576){
        headerCell.innerHTML = "";
        row.appendChild(headerCell);
    }


    headerCell = document.createElement("TH");

    if(screenWidth >= 576){
        headerCell.innerHTML = "";
        row.appendChild(headerCell);
    }

    headerCell = document.createElement("TH");
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

    headerCell = document.createElement("TH");
    headerCell.innerHTML = "";
    row.appendChild(headerCell);
    //Add the data rows.
    for (var i = 0; i < tableData.length; i++) {
        //Add the data row.
        var row = table.insertRow(-1);

        //Add the data cells.
        var cell = row.insertCell(-1);
        if(screenWidth >= 576) {
            cell.innerHTML = tableData[i].id

            cell = row.insertCell(-1);
            var img = document.createElement('img');
            img.src = tableData[i].avatar;
            img.id = "avatar"
            cell.appendChild(img)
            cell = row.insertCell(-1);
        }

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
            if(confirm("Are you sure you want to delete this row?")){
                e.currentTarget.parentNode.remove();
                totalCount = totalCount - 1;
                let totalAttendees = document.getElementById("totalAttendees");
                totalAttendees.innerHTML = "Attendees (" + totalCount + ")";
            }
        });
        cell.id = "deleteButton";
        cell.innerHTML = "🗑️"
    }
}