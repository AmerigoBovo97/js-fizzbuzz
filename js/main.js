// html variables
const nInput = document.getElementById("nInput")
const fizzBuzzForm = document.getElementById("fizz-buzz-form")
const displayResult = document.getElementById("fizz-buzz-displayer")

// logic variables
const fizzDivisor = 3
const buzzDivisor = 5



// logic
fizzBuzzForm.addEventListener("submit", function(event){
    
    event.preventDefault()
    
    for(let i = 1; i <= Number(nInput.value); i++){
        
        if(i % (fizzDivisor * buzzDivisor) === 0){
            displayResult.innerHTML += `<tr><td>FizzBuzz!!!</td></tr>`
        }else if(i % fizzDivisor === 0){
            displayResult.innerHTML += `<tr><td>Fizz!!</td></tr>`
        }else if(i % buzzDivisor === 0){
            displayResult.innerHTML += `<tr><td>Buzz!!</td></tr>`
        }else{
            displayResult.innerHTML += `<tr><td>${i}</td></tr>`
        }

    }

})