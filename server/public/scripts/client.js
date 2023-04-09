$(document).ready(onReady);

function onReady() {
    $("#equal-button").on('click', createCalculation);
    getCalculation();
    $('#clear-button').on('click', clearCalculation);
    // $('#add-button').on('click', additionVariable);
    // $('#subtract-button').on('click', subtractFunc);
    // $('#multiple-button').on('click', '*');
    // $('#divide-button').on('click','/');
}

const newCalulation = {
    num1: Number($('#first-num').val()),
    math: $('#math').val(),
    num2: Number($('#second-num').val()),
}

function getCalculation() {
    $.ajax({
        method: 'GET',
        url: '/numbers',
    }).then(function (response) {
       console.log(response);
       let calculations = response;
        let equation = $('#answer-history');
        equation.empty();

        for( const calculation of calculations ) {
            $("#answer-history").append(`<li>${calculation.num1} ${calculation.math} ${calculation.num2}=${calculation.result}</li>`)
        }
    }) // End GET AJAX request
} // End getEquation function

function createCalculation (event) {
    event.preventDefault();


    const newNumber = {
        num1: Number($('#first-num').val()),
        math: $('#math').val(),
        num2: Number($('#second-num').val())
    }

    $.ajax({
        method: 'POST',
        url: '/numbers',
        data: newNumber
    }).then(function(response){

        getCalculation();

    }).catch(function(error){
        alert('That didnt work)');
    })
    $('#answer-out').append(result);

}

function clearCalculation(){
    const clearElement = $('#answer-history');
    clearElement.empty();
}