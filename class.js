class Student {
    constructor(studnetId, studentName, studentAge, studentBirth){
        this.id = studnetId;
        this.Name = studentName;
        this.Age = studentAge;
        this.Birth = studentBirth;
    }
}
const student01 = new Student(400, "David", 10, '01.01.2000');
const student02 = new Student(410, "Jorge", 12, "02.02.2000");
const student03 = new Student(420, "Nick" , 14, "03.03.2000");

console.log(student01, student02, student03);



///////////////////
class employee {
    constructor(Id, Name, Blood, Sibling){
        this.Id = Id;
        this.Name = Name;
        this.blood = Blood;
        this.sibling = Sibling;
    }
} 

const staff01 = new employee (1210, "Dalia", 'A+' , 4 );
const staff02 = new employee (1295, "Daniel" , 'B+' , 2);
const staff03 = new employee (1422, "Russel", "C" , 3);
const staff04 = new employee (4522, "Andy", 'D' , 5);
const staff05 = new employee (7555,"Beaty" , 'C-', 7);
const staff06 = new employee (4577, "Lisa", 'A-', 9);
const staff07 = new employee (4566, "Cardon", 'B+', 2);
const staff08 = new employee (7588, "Effy", 'A', 0);
const staff09 = new employee (9655, "Fedric", 'C' , 1);
const staff10 = new employee (5655, "Goldy", "B-" , 6);
console.log(staff01, staff02, staff03, staff04, staff05, staff06, staff07, staff08, staff09, staff10);
