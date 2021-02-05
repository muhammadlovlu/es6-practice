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

// arrow function practice , banana price 
const bananaPrice = banana => banana * 5 ;
const totalBananaPrice = bananaPrice (12);
console.log(totalBananaPrice);

//arrow function practice , eggs price
const eggsPrice = eggs => eggs * 4 ;
const totalEggsPrice = eggsPrice(12) ;
console.log(totalEggsPrice);


// arrow function with Two parameter
const grocery = (chocolate, candy) => chocolate + candy ;
const purchaseItems = grocery(10, 15);
console.log(purchaseItems);

// arrow function with three parameters
const items = (pen, rubber, pencil) => pen + rubber + pencil;
const totalPurchase = items(10, 5, 3);
console.log(totalPurchase);


// empty parameter
const add9 = () => 9;
console.log(add9());


// Math with arrow function 
const calculation = (digitsOne, digitsTwo) => {
    const sum = digitsOne + digitsTwo;
    const sub = digitsOne - digitsTwo;
    const totalCalculation = sum + sub ;
    return totalCalculation;
}

const totalCalculate = calculation(12 , 7);
console.log(totalCalculate); /// output 24

// math calculation with arrow function part - 2
const fare = (distanceOne ,  distanceTwo) => {
    const totalCost = distanceOne + distanceTwo;
    return totalCost ;
}
const totalFare = fare(12, 32);
console.log(totalFare);   /// output totalFare 44
