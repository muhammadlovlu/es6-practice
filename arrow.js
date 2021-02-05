// function 
function multiplyDigit(num){
    return num *30;
}
const total = multiplyDigit(5);
console.log(total);


//function expression
const multiply = function multiplydigits(number){
    return number * 10 ;
}
const Total = multiply(5);
console.log(Total);



// Arrow function
const arrowFunction = numOne => numOne * 8 ;

const numberOneTotal = arrowFunction(12);
console.log(numberOneTotal);


/// arrow function  practioce two
const arrowFunctionTwo = number2 => number2 * 2 ;
const totalArrowResult = arrowFunctionTwo(4);
console.log(totalArrowResult);


//arrow funtion practice three
const mangoPrice = mango => mango * 50 ;
const totalMangoPrice = mangoPrice(5);
console.log(totalMangoPrice);


//arrow funtion price , Orange price 
const orangePrice = orange => orange * 20 ;
const totalOrangePrice = orangePrice(10) ;
console.log(totalOrangePrice);



