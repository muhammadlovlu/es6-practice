// Simple example 
const areaOne = [15,16,17,18,19,20];
const areaTwo = [45,46,47,48,49,50];
console.log('First Area :', areaOne);
console.log('Second Area :', areaTwo);

//applied ES6 method in a variable to see the output 
const areaone = [22,33,44,55,66,77,88,99];
const areatwo = [122,133,144,155,166,177,188, 199];
const totalArea = `Area Total : ${areaone.concat(areatwo)}`;
console.log(totalArea);

// threedots technic , break more than one variables array in a single array 
const firstPin = [12,45,35,65,75,95];
const secondPin = [12,95,75,4522,65];
const totalPin = [...firstPin, ...secondPin];
console.log(totalPin);


/////////////////
const ZovanSalary = 45000;
const NadalSalary = 55000;
const HamandSalary = 20000;
const maximum = Math.max(ZovanSalary, NadalSalary, HamandSalary);
console.log(maximum);

////////////
const bigNumber = [450, 750, 950];
const big = Math.max(...bigNumber);
console.log(big);


// usage of threedots in a variable to get output of max number in an array  
const allNumber = [450,666,8544,13954,1024,4456];
const maxNumber = Math.max(...allNumber);
console.log(maxNumber);


// usage of threedots in a variable to get output of max number in an array 
const allNumberTwo = [4457,2544,3655,8559,7546,3321];
const maxResult = Math.max(...allNumberTwo);
console.log(maxResult); 