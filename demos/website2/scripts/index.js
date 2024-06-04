"use strict";

const hello = document.getElementById("hello");
const input1 = document.getElementById("input1");
const paragraphOutput = document.getElementById("paragraphOutput");

window.onload = () => {
    hello.innerHTML = "hello connected";
    input1.oninput = onInput1Input;
}

function onInput1Input(){
    paragraphOutput.innerHTML += "<br>";
    paragraphOutput.innerHTML += input1.value;
    generateWorkForComputer(2000);
}


function generateWorkForComputer(milis){
    var date = new Date();
    var curDate = null;

    do{
        curDate = new Date();
    }
    while (curDate - date < milis)
}