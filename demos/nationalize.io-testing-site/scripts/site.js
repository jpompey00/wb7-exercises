const outputDiv = document.getElementById("outputDiv");
const nameHeader = document.getElementById("nameHeader");
const submitButton = document.getElementById("submitButton");
const nameTextBox = document.getElementById("nameTextBox");

const API_BASE_URL = "https://api.nationalize.io?name=";

window.onload = () => {
    submitButton.onclick = onSubmitButtonClicked;
}



function onSubmitButtonClicked(){
    outputDiv.innerHTML = "";
    getName(nameTextBox.value);
}

async function getName(name){
    nameHeader.innerHTML = `Estimated Nationality of ${name}`
    let actualUrl = API_BASE_URL + name;
    fetch(actualUrl)
    .then(response => response.json())
    .then(data =>{
        console.log(data.country);
        for(let i of data.country){
            let percentage = Math.floor(i.probability * 100) + "%";
            let countryCode = i.country_id;
            let output = `Country: ${countryCode}, Probability: ${percentage}`
            outputDiv.appendChild(createParagraph(output))
        }
    })
}


function createParagraph(content){
    let p = document.createElement("p");
    p.classList.add("h4");
    p.textContent = content;
    return p;
}



