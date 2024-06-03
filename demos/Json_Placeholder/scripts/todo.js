"use strict";
const todoIdTextbox = document.getElementById("todoIdTextbox");
const submitButton = document.getElementById("submitButton");
const outputDiv = document.getElementById("outputDiv");

const API_BASE_URL = "https://jsonplaceholder.typicode.com/todos/"

window.onload = () => {
    submitButton.onclick = onSubmitButtonClick;
}

function onSubmitButtonClick(){
    outputDiv.innerHTML = "";
    let actualUrl = API_BASE_URL + todoIdTextbox.value;

    fetch(actualUrl)
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        for(let d in data){
            if(d != "userId"){
                outputDiv.appendChild(createParagraph(`${d} : ${data[d]}`))
            }
            
        }
    })

}



function createParagraph(content){
    let p = document.createElement("p");
    p.innerHTML = content;
    p.classList.add("h4");
    return p;
}