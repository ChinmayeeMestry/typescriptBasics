# typescriptBasics

## Table of Contents
 - [Questionaries 27 April 2021](#questionaries-27-April-2021)
 - [Steps to install](#steps-to-install)
 - [Steps to execute](#steps-to-execute)
## Questionaries 27 April 2021 
### Understanding Typescript
Perform following activities -

1. Create a simple function which helps to multiply 4 numbers with following criteria -
  - 3 numbers must be compulsory, 1 must be optional
  - Out of 3 compulsory numbers, 1 must have default value
  - The function must print the multiplication of 4 numbers

2.  Create an interface that define the characteristic properties of a car -
  - model
  - color
  - year of manufacture
  - Create a function that takes this value as its parameter and simply print the properties.
3.  Create a class 'Vehicle' with
  - Class properties 'model', 'color', 'year of manufacture'.
  - Class constructor to manage these properties
  - Simple method to print these properties

4. Also, create a child class 'Car' of above 'Vehicle' class with
- Class properties 'seating capacity(number of persons that sit)'
- Class constructor to manage these properties
- Simple method to print these properties along with the properties of class Vehicle
- Make sure that the 'Vehicle' class properties should only be available to itself as well as child class 'Car' but not outside.

# Steps to install
```sh
git install -g typescript
git clone https://github.com/ChinmayeeMestry/typescriptBasics.git
```
# Steps to execute
```sh
cd typescriptBasics
tsc filename.ts && node filename.js
example: tsc interface.ts && interface.js
```

**Happy Coding !! All the Best**

