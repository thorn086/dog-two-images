'use strict';


function submitForm() {
    $('form').submit(event => {
        event.preventDefault();
        let numChoice = document.getElementById("photos").value;
        loadImages(numChoice);
        resetForm();
    });
}


function displayImages(dogImageJson){
    $('.results-img').empty();
    console.log(dogImageJson);
    let x ="";
    for (let i = 0; i < dogImageJson.message.length; i++) {
        x += `<img src="${dogImageJson.message[i]}" alt="Random Dog Image">` ;
    };
    $('.results-img').append(x);
}

function loadImages(numChoice) {
    fetch('https://dog.ceo/api/breeds/image/random/' + numChoice)
        .then(dogImage => dogImage.json())
        .then(dogImageJson => displayImages(dogImageJson));
}



function resetForm(){
    $('form').trigger('reset');
}


$(function () {
    console.log('app loaded, ready for submition');
    loadImages(3);
    submitForm();
});