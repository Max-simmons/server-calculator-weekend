const { response } = require("express");

$(document).ready(onReady);

function onReady() {
    $("equal-button").on('click', createNumbers);
    $('#add-button').on('click', addButton);
    $('#subtract-button').on('click', subtractButton);
    $('#multiple-button').on('click', multipleButton);
    $('#divide-button').on('click', divideButton);

}

function getNumbers() {
    $.ajax({
        method: 'GET',

        url: '/',
    }).then(
       function (response);
       
       let calculation = response;

       for(calculation of calculations);

       $(".answer-history").append(`<li>${calculation.num1}<span id=symbol> </span>${calculation.num2}=</li> `)

    )
}

function addButton(event) {
    event.preventDefault();
    console.log('adding');
    $('#symbol').append('<span id=add>+<span>');
}
function subtractButton(event) {
    event.preventDefault();
    $('#symbol').append('<span id=subtract>-<span>');
}

function multipleButton(event) {
    event.preventDefault();
    $('#symbol').append('<span id=multiple>*<span>');
}

function divideButton(event) {
    event.preventDefault();
    $('#symbol').append('<span id=divide>/<span')
}

// function createNumbers (event) {
//     event.preventDefault();

//     const newNumbers = {
//         num1: $('#first-num').val(),
//         math: $('#symbol').val(),
//         num2: $('#second-num').val()
//     }

//     $.ajax({
//         method: 'POST',
//         url: '/numbers',
//         data: newNumber
//     }).then(function(response){

//         getNumbers();

//     }).catch(function(error){
//         alert('That didnt work)');
//     })


// }