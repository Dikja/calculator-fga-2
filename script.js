let prevNumber = '';
let calculatorOperator = '';
let currentNumber = '0';

const inputNumber = (number) => {
    if (currentNumber==='0') {
        currentNumber=number
    } else {
        currentNumber += number
    }
};

const operators = document.querySelectorAll('.operator')

const inputOperator = (operator) => {
    if(calculatorOperator===''){
        prevNumber=currentNumber
    }

    calculatorOperator=operator
    currentNumber=''
}

operators.forEach((operator)=>{
    operator.addEventListener('click', (event)=>{
        inputOperator(event.target.value)
    })
})


const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
};

const numbers = document.querySelectorAll(".number");

numbers.forEach((number)=>{
   number.addEventListener('click', (event)=> {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
 
   })
});

const equalSign = document.querySelector('.equal-sign')

const calculate = () => {
    let result = ''
    switch(calculatorOperator){
        case "+" :
            result= parseFloat(prevNumber)+parseFloat(currentNumber)
            break
        case "-" :
            result= prevNumber-currentNumber
            break
        case "*" :
            result= prevNumber*currentNumber
            break
        case "/" :
            result= prevNumber/currentNumber
            break
        default:
            return
    }
    currentNumber=result
    calculatorOperator=''
}

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber=''
    calculatorOperator = ''
    currentNumber = '0'
}

const clearButton = document.querySelector('.all-clear')

clearButton.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

const decimal = document.querySelector('.decimal')

inputDecimal = (dot) =>{
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

decimal.addEventListener('click', (event)=>{
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})




