// Create a function that takes this value as its parameter and simply print the properties.
class Vehicle {
    protected model : string;
    protected color : string;
    protected yearOfManufacture :number;

    constructor(Bike : string, Shade : string, Year : number ) {
        this.model = Bike;
        this.color = Shade;
        this.yearOfManufacture = Year;
    }

    carInfo(){
        console.log(`Information of vehicle ${this.model} ${this.color} ${this.yearOfManufacture}`);
    }
}

let Maruti = new Vehicle("Desire", "Black", 2019)
Maruti.carInfo()

class Carr extends Vehicle {
    seatCapacity : number;

    constructor(SeatingCapacity : number) {
        super();
        this.seatCapacity = SeatingCapacity;
    }

    Driving(){
        console.log(`The seating capacity for a vehicle ${this.model} ${this.color} ${this.yearOfManufacture} is  ${this.seatCapacity}`)
    }
}
let Renaultt = new Carr(5);
Renaultt.Driving();