// Create a function that takes this value as its parameter and simply print the properties.
class Vehicle {
    protected model : string;
    protected color : string;
    protected yearOfManufacture :number;

    constructor(Model : string, Shade : string, Year : number ) {
        this.model = Model;
        this.color = Shade;
        this.yearOfManufacture = Year;
    }

    carInfo(){
        console.log(`Information of vehicle - ${this.model} ${this.color} ${this.yearOfManufacture}`);
    }
}

let Maruti = new Vehicle("Desire", "Black", 2019)
Maruti.carInfo()

class Carr extends Vehicle {
    seatCapacity : number;

    constructor(Model : string, Shade : string, Year : number, SeatingCapacity : number) {
        super(Model, Shade, Year);
        this.seatCapacity = SeatingCapacity;
    }

    Driving(){
        console.log(`The seating capacity for a ${this.color} ${this. model} ${this.yearOfManufacture} is ${this.seatCapacity}`)
    }
}
let Renaultt = new Carr("Desire", "Black", 2019, 5);
Renaultt.Driving();