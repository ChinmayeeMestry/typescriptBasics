// Create an interface that define the characteristic properties of a car 
function carInfo(car) {
    console.log("\n    Car Model : " + car.model + " \n    Car Color : " + car.color + "\n    Year of Model " + car.year);
}
var MarutiSuzuki = {
    model: "Dzire",
    color: "White",
    year: 2015
};
var Renault = {
    model: "Duster",
    color: "Red",
    year: 2019
};
carInfo(MarutiSuzuki);
carInfo(Renault);
