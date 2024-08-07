let inventory : { name :string,model : string, quantity : number , available : boolean}[] =[] ;
type Products = {
    name :string,
    model : string,
    quantity : number,
    available : boolean
}
const product1 : Products = { 
    name : "Laptop",
    model : "HP",
    quantity : 10,
    available : true
}
const product2 : Products = {
    name: "Mobile",
    model: "Samsung",
    quantity: 20,
    available: true
}
const product3 : Products = {
    name: "Headphone",
    model: "Sony",
    quantity: 30,
    available: false,
}
inventory.push(product1,product2,product3)
console.log(`Availabity of ${inventory[1].name} of ${inventory[1].model} is ${inventory[1].available}`);