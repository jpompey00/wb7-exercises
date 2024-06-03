"use strict";

const categoryInput = document.getElementById("categoryInput");
const getResultsButton = document.getElementById("getResultsButton");
const resultsOutput = document.getElementById("resultsOutput");

//www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
const apiBaseUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c="


window.onload = () =>{
    getResultsButton.onclick = onGetResultsButtonClick;
};

function onGetResultsButtonClick(){
    resultsOutput.innerHTML = "";
    console.log("clicked");

    let actualUrl = apiBaseUrl + categoryInput.value;

    console.log("Url " + actualUrl);

    fetch(actualUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if(data.meals != null){
            for(let meal of data.meals){
                let p = document.createElement("p");
                p.innerHTML = meal.strMeal;
    
                resultsOutput.appendChild(p);
            }
        } else {
            let p = document.createElement("p");
            p.innerHTML = "No recipies found";
            resultsOutput.appendChild(p);
        }

    })




};


