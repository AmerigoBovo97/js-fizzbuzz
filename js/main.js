// html variables
const nInput = document.getElementById("nInput");
const fizzBuzzForm = document.getElementById("fizz-buzz-form");
const displayResult = document.getElementById("fizz-buzz-displayer");
let newTableRow = (resultValue) => `<tr><td>${resultValue}</td></tr>`;

// logic variables
const fizzDivisor = 3;
const buzzDivisor = 5;
const fizz = "Fizz!";
const buzz = "Buzz!!";
const fizzbuzz = "FizzBuzz!!!";





// logic
fizzBuzzForm.addEventListener("submit", function(event){
    
    event.preventDefault();

    for(let i = 1; i <= Number(nInput.value); i++){
        
        if(i % (fizzDivisor * buzzDivisor) === 0){
            displayResult.innerHTML += newTableRow(fizzbuzz);
        }else if(i % fizzDivisor === 0){
            displayResult.innerHTML += newTableRow(fizz);
        }else if(i % buzzDivisor === 0){
            displayResult.innerHTML += newTableRow(buzz);
        }else{
            displayResult.innerHTML += newTableRow(i);
        }

    }

})