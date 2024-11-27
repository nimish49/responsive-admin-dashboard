document.getElementById("btn").addEventListener("click", add);

//  async function add(e){
//     e.preventDefault();
//     let name = document.getElementById("empo").value;
//     let age = document.getElementById("name").value;
//     let email = document.getElementById("city").value;
//     let cnfpsw = document.getElementById("salary").value;
//  }
// fetch and async await both returns a promise
//promise succecssful 
async function add(e){
    e.preventDefault();
    let empno = document.getElementById("empo").value;
    let name = document.getElementById("myname").value;
    let city = document.getElementById("city").value;
    let salary = document.getElementById("salary").value;
    let email = document.getElementById("myemail").value;

    let url = "http://localhost:3000/student";

    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf8',
            },
            body: JSON.stringify({
                employeno: empno,
                name: name,
                city: city,
                salary: salary
            }),
        });
        console.log(response);

        let value = await response.json();

        console.log(value);
        alert("data successful response");
    } catch (error){
        console.error('Error:', error);
        alert("Data not successful response");
    }
}//localhost:3000/student;

//post request
// try {
// let response = await fetch(url,{


//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json; charset=utf8',
//     },
//     body: JSON.stringify({
//         employeno:empo,
//         name: name,
//         city: city,
//         salary: salary
//     }),
// });
// console.log(response);

// let value = await response.json();

// console.log(value);
// alert("data sucessful response");
// } catch (error){
//     console.error('Error:', error);
//     alert("Data not sucessful response");
 
// }
