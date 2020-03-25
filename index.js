// define an array of cars with associated objects
let cars = [
    { name: 'premio', type: 'toyota' , stock: 10, price: 900 },
    { name: 'mercedez', type: 'nissan', stock: 2, price: 1000  },
    { name: 'range rover', type: 'toyota', stock: 0, price: 20000  },
    { name: 'land rover', type: 'nissan',  stock: 10, price: 10000 },
];
// create a filter helper
// return type 'toyota', stock > 0  & price < 1000

let filteredList = cars.filter(function(car){
    return car.type === 'toyota' 
    && car.stock > 0
    && car.price < 1000;
});
console.log(filteredList);