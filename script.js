function addClass(containerDiv,className){
    containerDiv.classList.add(className)

}

function createMatrix(dimension, container,divisorFizzBuzz){
    let counter=1

    for (let i=0; i<dimension; i++){
        const div = document.createElement("div")
        addClass(div, "demo")
        for (let j=0; j<dimension; j++){
            const content = document.createElement("div")
            addClass(content,"content")    
            content.textContent=counter
            addFizzBuzz(divisorFizzBuzz, content, counter)
            div.appendChild(content)
            counter++
        }
        container.appendChild(div)
    }
}

function fizz(divisor, square, number){
    if (number%divisor==0){
        console.log("Este es fizz", number)
        addClass(square, "fizz")
    }
}

function buzz(divisor, square, number){
    if (number%divisor==0){
        console.log("Este es buzz", number)
        addClass(square, "buzz")
    }
}

function fizzbuzz(divisor, square, number){
    if (number%2==0 && number%3==0){
        console.log("Este es fizzbuzz", number)
        addClass(square, "fizz")
        addClass(square, "buzz")
        addClass(square, "fizzbuzz")
    }
}

function addFizzBuzz(divisor, square, number){
    fizz(2, square, number)      
    buzz(3, square, number)      
    fizzbuzz(6, square, number) 
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("Ya se cargo este DOM");
    const container = document.querySelector(".container")
    createMatrix(5, container,2,3,6)
  });

