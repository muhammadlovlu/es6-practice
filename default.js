function add(number1, number2 = 0){
    return number1 + number2;
}
const total = add(30);
console.log(total);


///////////////////////
function addTwo (number3 , number4){
    number4 = number4 || 0;
    return number3 + number4;
}
const secondTotal = addTwo (12);
console.log(secondTotal);

//////////////////////////
