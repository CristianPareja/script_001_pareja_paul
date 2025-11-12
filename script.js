function addClass(containerDiv, className) {
    containerDiv.classList.add(className);
}

function createMatrix(dimension, container, fizzDivisor, buzzDivisor) {
    container.innerHTML = "";
    let counter = 1;

    for (let i = 0; i < dimension; i++) {
        const row = document.createElement("div");
        addClass(row, "demo");

        for (let j = 0; j < dimension; j++) {
            const cell = document.createElement("div");
            addClass(cell, "content");
            cell.textContent = counter;
            addFizzBuzz(fizzDivisor, buzzDivisor, cell, counter);
            row.appendChild(cell);
            counter++;
    }
        container.appendChild(row);
    }
}

function fizz(divisor, square, number) {
    if (number % divisor === 0) addClass(square, "fizz");
}

function buzz(divisor, square, number) {
    if (number % divisor === 0) addClass(square, "buzz");
}

function fizzbuzz(fizzDivisor, buzzDivisor, square, number) {
    if (number % fizzDivisor === 0 && number % buzzDivisor === 0)
    addClass(square, "fizzbuzz");
}

function addFizzBuzz(fizzDivisor, buzzDivisor, square, number) {
    fizz(fizzDivisor, square, number);
    buzz(buzzDivisor, square, number);
    fizzbuzz(fizzDivisor, buzzDivisor, square, number);
}

function buttonClicked() {
    const dimensionInput = document.getElementById('dimension')
    const fizzInput = document.getElementById('fizz-divisor')
    const buzzInput = document.getElementById('buzz-divisor')

    const dimensionValue =parseInt(dimensionInput.value)
    const fizzValue=parseInt(fizzInput.value)
    const buzzValue=parseInt(buzzInput.value)
    const matrixContainer = document.getElementById("matrix-container");

    createMatrix(dimensionValue, matrixContainer, fizzValue, buzzValue);
}

document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("matrix-container");
    createMatrix(5, container, 2, 3); // matriz inicial
    document.getElementById("generate").addEventListener("click", buttonClicked);
});
