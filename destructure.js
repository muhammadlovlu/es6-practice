// first example of destructure 

const client01 = { name :'Mila' , sex :'female', Age :'22', height: '5.33 inches', color: 'white'};
const {name} = client01;
const {sex} = client01;
const {Age}  = client01;
const {height} = client01;
const {color}  = client01;
console.log(name);
console.log(sex);
console.log(Age);
console.log(height);
console.log(color);
// destructure example two

const client02 = {Name :'Richard' , sex :'Male', Age :24, Height:'5.7 inches', color:'Brown'};
const {Name,Height} = client02;
console.log(Name,Height);


// destructuring array
const names = ['Amir', 'Bashir', 'Nadaf', 'Loren' , 'Daniel'];
const [firstStudent, secondStudent, ...restOfAll] = names;
console.log(restOfAll);


// destructing array example - 02
const studentsName = ['Naser', 'Led', 'Mompy', 'Cindrealla', 'Tommy'];
const [first,second,third,fourth, fifth, sixth] = studentsName;
console.log(third, fifth);



// How to call a nested element

const callingNestedItem = {
    name: 'Mariq',
    info:{
        address: 'east hamsphere',
        country : 'Zombie'
    }
};
const {country} = callingNestedItem.info;
console.log(country);