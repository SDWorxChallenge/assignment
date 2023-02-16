
// api url
const api_url = "https://63998da716b0fdad77409a5e.mockapi.io/api/v1/hikers";

// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    show(data);
}
// Calling that async function
getapi(api_url);

// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
            <th></th>
            <th></th>
            <th>NAME</th>
            <th>DATE OF BIRTH</th>
            <th>CITY</th>
            <th>Country</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data) {
        
    //format date
    let date = new Date(r.dateOfBirth);

    tab += `<tr> 
    <td>#${r.id}</td>  
    <td><img src="${r.avatar}" alt="" height='30' width='30' class="avatar" /></td>
    <td>${r.name}</td> 
    <td>${date.toLocaleDateString()}</td>  
    <td>${r.city}</td> 
    <td>${r.country}</td>  
    <td><img src="./bin.png" alt="" height='25' width='25' id='bin' /></td>           
    </tr id="${r.id}">`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("attendees").innerHTML = tab;
}

// delete the row
function deleteRow(row){
    document.getElementById("attendees").deleteRow(row);
}

// listen for click on the trash bin icon and run the deleteRow function
document.addEventListener("click", function(e){
    const target = e.target.closest("#bin"); // Or any other selector.
    const row = target.parentNode.parentNode.rowIndex;
  
    if(target){
        if (confirm("Are you sure about deleting this row?")) {
            deleteRow(row);
          } 
    }
  });

