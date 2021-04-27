// Create an interface that define the characteristic properties of a car 

interface Car {
    model : string,
    color: string,
    year : number
}

function carInfo (car: Car) {
    console.log(`
    Car Model : ${car.model} 
    Car Color : ${car.color}
    Year of Model ${car.year}`);
}

let MarutiSuzuki = {
    model : "Dzire",
    color : "White",
    year  :   2015
}

let Renault = {
    model : "Duster",
    color : "Red",
    year  :  2019
}
carInfo(MarutiSuzuki);
carInfo(Renault);