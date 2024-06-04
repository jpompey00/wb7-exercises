"use strict"

const outputTable = document.getElementById("outputTable");

const API_BASE_URL = "https://jsonplaceholder.typicode.com/users";



window.onload = () => {
    apiCall();
}

function apiCall() {
    let actualUrl = API_BASE_URL;
    fetch(actualUrl).then(response => response.json()).then(data => {
        let dataSize = Object.keys(data).length;
        let usedNumbers = [];
        for (let i = 0; i < 6; i++) {
            let randomNum = Math.floor(Math.random() * dataSize);
            if(usedNumbers.includes(randomNum)){
                i-=1;
            } else {
                loadTable(data[randomNum]);
                usedNumbers.push(randomNum);
            }
            
        }
        

    })
}

function loadTable(data) {
    outputTable.appendChild(createTableRow(data));

}


function createTableRow(data) {
    let tr = document.createElement("tr");
    let name = document.createElement("td");
    let phone = document.createElement("td");
    let email = document.createElement("td");
    let website = document.createElement("td");
    let companyName = document.createElement("td");
    //create TD too
    name.innerHTML = data.name;
    phone.innerHTML = data.phone;
    
    email.innerHTML = data.email;
    
    website.innerHTML = data.website;
    
    companyName.innerHTML = data.company.name;
    
    tr.appendChild(name);
    tr.appendChild(phone);
    tr.appendChild(email);
    tr.appendChild(website);
    tr.appendChild(companyName);
    return tr;
}