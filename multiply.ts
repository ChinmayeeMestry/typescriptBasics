// Creating a simple function which helps to multiply 4 numbers:


function mul(a:number, b:number, d?:number, c:number = 4){
    return a*b*c*d
}

// a) 3 numbers must be compulsory, 1 must be optional
console.log("The multiplication of 4 numbers when 3 numbers must be compulsory, 1 must be optional is", mul(2,3,5));

// b) Out of 3 compulsory numbers, 1 must have default value
console.log("The multiplication of 4 numbers when Out of 3 compulsory numbers, 1 must have default value is", mul(2,3,5));

//  c) The function must print the multiplication of 4 numbers
console.log("The function must prints the multiplication of 4 numbers is", mul(2,3,4,5));
