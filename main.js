
fetch("https://63998da716b0fdad77409a5e.mockapi.io/api/v1/hikers")
  // Converting received data to JSON
  .then((response) => response.json())
  .then((json) => {
    
  
    let li = `<tr><th>dateOfBirth</th><th>Name</th><th>Avatar</th><th>Country</th> <th>city</th><th>Id</th></tr>`;

    // 3. Loop through each data and add a table row
    json.forEach((user) => {
      li += 
      
      `<tr>
        <td>${user.dateOfBirth}</td>
        <td>${user.name} </td>
        <td>${user.avatar}</td>
        <td>${user.country}</td>
        <td>${user.city}</td>
        <td>${user.id}</td>
      </tr>
      `


      ;
    });

    
    document.getElementById("users").innerHTML = li;
  });




fetch("https://jsonplaceholder.typicode.com/posts", {
  // 6. Adding method type
  method: "POST",

  // 7. Adding body or contents to send JSON Stringify
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1
  }),

  
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
  
  .then((response) => response.json())

  
  .then((json) => console.log(json));