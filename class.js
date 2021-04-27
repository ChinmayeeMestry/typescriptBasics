var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Create a function that takes this value as its parameter and simply print the properties.
var Vehicle = /** @class */ (function () {
    function Vehicle(Bike, Shade, Year) {
        this.model = Bike;
        this.color = Shade;
        this.yearOfManufacture = Year;
    }
    Vehicle.prototype.carInfo = function () {
        console.log("Information of vehicle " + this.model + " " + this.color + " " + this.yearOfManufacture);
    };
    return Vehicle;
}());
var Maruti = new Vehicle("Desire", "Black", 2019);
Maruti.carInfo();
var Carr = /** @class */ (function (_super) {
    __extends(Carr, _super);
    function Carr(SeatingCapacity) {
        var _this = _super.call(this, _this.model, color, yearOfManufacture) || this;
        _this.seatCapacity = SeatingCapacity;
        return _this;
    }
    Carr.prototype.Driving = function () {
        console.log("The seating capacity for a vehicle " + this.model + " " + this.color + " " + this.yearOfManufacture + " is  " + this.seatCapacity);
    };
    return Carr;
}(Vehicle));
var Renaultt = new Carr(5);
Renaultt.Driving();
