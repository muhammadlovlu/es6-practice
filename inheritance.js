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
/////////
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
