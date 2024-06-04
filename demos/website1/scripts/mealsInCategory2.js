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
    .then(doWhenResponseBegins)
    
};
function doWhenResponseBegins(response){
    response.json().then(processResultDataFromAPI);
}
function processResultDataFromAPI(data){
    console.log(data);
    if(data.meals != null){
        doStuffWithArrayOfMeals(data);
    } else {
        let p = document.createElement("p");
        p.innerHTML = "No recipies found";
        resultsOutput.appendChild(p);
    }

}

function doStuffWithArrayOfMeals(dataMeals){
    for(let meal of dataMeals.meals){
        doStuffWithMeal(meal);
    }
}


function doStuffWithMeal(meal){
    let p = document.createElement("p");
    p.innerHTML = meal.strMeal;

    resultsOutput.appendChild(p);
}

