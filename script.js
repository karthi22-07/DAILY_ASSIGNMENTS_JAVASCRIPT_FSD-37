//1
let car = {
    make: "Toyota" ,
    model: "Camry" ,
    year: 2020 
}

console.log(car);

let owner ={
    fullName:"JaneSmith" ,
    firstName: "Jane", 
    lastName: "Smith", 
    age: 28, 
    email: "jane.smith@example.com" 
}
console.log(owner);

//2

console.log("Make:", car.make);
console.log("Model:", car.model);
console.log("Year:", car.year);
console.log("Owner's Full Name:", owner.fullName);
console.log("Owner's First Name:", owner.firstName);
console.log("Owner's Last Name:", owner.lastName);
console.log("Owner's Age:", owner.age);
console.log("Owner's Email:", owner.email);

//3
car.year = 2021;
owner.email = "jane2021.smith@example.com"

console.log("Updated Car Object:", car);
console.log("Updated Owner Mail:", owner)

//4
car.insurance = {
    provider: "Geico",
    policyNumber: "XYZ1234567",
    expiryDate: "2024-12-31"
};

console.log("Updated Car Info with Insurance:", car);


//5
delete owner.email;

console.log("After Updating Owner Info", car)
console.log(owner)

//6
car.serviceHistory = 
    
        {
         date: "2021-06-01",
         service: "Oil change",
         cost: 50
         },
         {
         date: "2022-01-15",
         service: "Tire rotation",
         cost: 100
         }
         ;   
   console.log("After Adding Service History",car.serviceHistory);

   console.log(car);
console.log(owner);

//7

console.log("Properties of Car:");
for (let key in car) {
    if (typeof car[key] === 'object') {
        console.log(`${key}:`);
        for (let nestedKey in car[key]) {
            console.log(`  ${nestedKey}: ${car[key][nestedKey]}`);
        }
    } else {
        console.log(`${key}: ${car[key]}`);
    }
}







// //2
// let car1 = {
//     make: "Toyota" ,
//     model: "Camry" ,
//     year: 2020 
// }

// console.log(typeof(car));

// let owner1 ={
//     firstName: "Jane", 
//     lastName: "Smith", 
//     age: 28, 
//     email: "jane.smith@example.com" 
// }
// console.log(typeof(owner));

// //3

// let car2 = {
    
//     year: 2020
    
// }
// console.log(car2);

// car2.year = 2023;
// console.log("Updated car2 object:", car2);



// let car3 ={
//     email_id :"jane.smith@example.com" ,

// }

// console.log(car3);

// car3.email_id = jane23smith@example.com 
// console.log("Updated car3 object:" , car3);



