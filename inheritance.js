// Parent and child example
class Parent {
    constructor(){
        this.fatherName = "Ramond";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
        
    }
}
const baby = new Child("Arnold");
const baby2 = new Child
console.log(baby);
///////// Shop inventory example


class Shop {
    constructor (){
        this.shopName = 'MLC';
    }
}
class Product extends Shop{
    constructor (productname, ingredient, expired, mac, origin){
        super();
        this.productName = productname ;
        this.ingredientName = ingredient;
        this.expiryDate = expired;
        this.packetDate = mac;
        this.origin = origin;
        
    }
}

const product01 = new Product ('Mango', 'Mango, Sugar', '45.22.2022', '12.12.2020', 'Australia');
const product02 = new Product ('Cadberry', 'Sugar, Milk, chocolate, Testing Sugar', '25.12.2023', '7.4.2020','Russia');
const product03 = new Product ('Sugar', 'Organic', '22.2.2024', '12.12.2025', 'Bogota');
const product04 = new Product ('Pineapply', 'Organic', '23.6.2026', '12.8.2020', 'Finland');
console.log(product01);
console.log(product02);
console.log(product03);
console.log(product04)


// inheritance example three
class Country {
    constructor(){
        this.country = 'UK';
    }
}
class Keyboard extends Country{
    constructor(Brand, SN, Warranty,Color, KeyPress, Mfg){
        super ();
        this.brand = Brand;
        this.snNumber = SN;
        this.warranty = Warranty;
        this.color = Color;
        this.keypress = KeyPress;
        this.mfgDate = Mfg;

    }
}
const Keyboard1000 = new Keyboard('Logitech', '11454545889', '2Years', 'Black', '24000', '127.2019');
const keyboard1010 = new Keyboard('Asus', '4577585466', '1Years', 'Blue', '1000', '12.12.2018');
const keyboard1020 = new Keyboard('Dell', '362254645', '3Years', 'Red', '4500', '20.3.2017');
console.log(Keyboard1000);
console.log(keyboard1010);
console.log(keyboard1020);
//  inheritance example four 
class Origin {
    constructor(){
        this.country = 'United State';
    }
}
class Mango extends Origin{
    constructor(Type, color, Price){
        super ();
        this.type = Type ; 
        this.color = color;
        this.price = Price;
    }
}

const mango =  new Mango ('Tilled', 'Red', '50$');
console.log(mango);


// in this example we will see how to write function inside template

// class NewProduct {
//     constructor(ID, BrandName, Size, Price){
//         this.id = ID ;
//         this.brand = BrandName;
//         this.size = Size;
//         this.price = Price;
//     }
//     getThePrice(){
//         return this.price;
//     }
// }

// const mozila = new NewProduct ('7000', 'Oz' , '12inch', '$ 450');
// console.log(mozila.getThePrice());



/////////

class newProduct {
    constructor (ID, BrandName, Color, Type, sn, MFG, Warranty){
        this.id = ID;
        this.brandName = BrandName;
        this.color = Color;
        this.type = Type ;
        this.serial = sn ;
        this.manufactured = MFG ;
        this.warranty = Warranty;
    }
    WarrantyDate(){
        return this.warranty;
    }
}
const product001 = new newProduct ('56556', 'Restic', 'Red', 'USB', '45555555555', '1.1.2011', '1 Year');
console.log(product001.WarrantyDate());