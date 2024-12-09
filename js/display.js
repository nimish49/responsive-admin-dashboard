// 18/11/2024
async function dataShow() {
    let myTable = `
   <table border="1px" width="600px" bgcolor="lightblue" align="center">
          <tr bgcolor="yellow">
            <th> Employee Name</th>
            <th>departmennt</th>
            <th>Salary</th>
            <th>position</th>
          </tr>
         `;
  
         //url of the server to fetch data
    let url = "http://localhost:3000/employees";
    //get data from server
  
  
    
    let myobj = await fetch(url);
    console.log(myobj);
  
    // converting response object to json object (array of objects)
    let myData = await myobj.json();  
    console.log(myData);
  
    myData.map((key) => {
      myTable += `
         <tr>
          <td>${key.employeno}</td>
          <td>${key.name}</td>
          <td>${key.city}</td>
          <td>${key.salary}</td>
         </tr>
      `;
    });
  
    myTable += `</table>`;
    document.getElementById("demo").innerHTML = myTable;
  
  }
  dataShow();