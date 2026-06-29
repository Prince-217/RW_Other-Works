// Problems :- 


// JavaScript Program To Print Hello World
// JavaScript Program to Add Two Numbers
// JavaScript Program to Find the Square Root
// JavaScript Program to Calculate the Area of a Triangle
// JavaScript Program to Swap Two Variables
// JavaScript Program to Solve Quadratic Equation
// JavaScript Program to Generate a Random Number
// JavaScript Program to Check if a Number is Positive, Negative, or Zero
// JavaScript Program to Check if a Number is Odd or Even
// JavaScript Program to Find the Largest Among Three Numbers
// JavaScript Program to Check Prime Number
// JavaScript Program to Print All Prime Numbers in an Interval
// JavaScript Program to Find the Factorial of a Number
// JavaScript Program to Display the Multiplication Table
// JavaScript Program to Convert Kilometers to Miles
// JavaScript Program to Convert Celsius to Fahrenheit


// 1. Print Hello world... 

console.log("============ 1 . JS Programme to Print Hello World ============");


console.log("Hello World...!!");




// 2. Add Two Numbers...

console.log("============ 2. JS Programme to add two numbers ============");

a = 10
b = 20

console.log(`Sum of these two numbers ${a} & ${b} are :- ${a + b}`);




// 3. Find Square root...

console.log("============ 3. JS Programme to find square root ============");

sq = 25

console.log(`Square root of ${sq} is :- ${Math.sqrt(sq)}`);




// 4. Find The Area od triangle...

console.log("============ 4. JS Programme to find area of triangle ============");

tri_base = 20
tri_height = 30

console.log(`Area of Triangle with base ${tri_base} and height ${tri_height} is ${(tri_base * tri_height) / 2}`);




// 5. Swapping two variables...

console.log("============ 5. JS Programme to swap two varriables ============");

sw_f = 7
sw_s = 2
console.log(`Before swapping :- Num1 = ${sw_f}, Num2 = ${sw_s}`);

th_pt = sw_f
sw_f = sw_s
sw_s = th_pt

console.log(`After swapping :- Num1 = ${sw_f}, Num2 = ${sw_s}`);



// 6. Solve Quadratic Equation...

console.log("============ 6. Solve Quadratic Equation ============");

console.log("Equation :- 3x^2 - 2x + 1 = 0");

const qf = 3, qs = -2, qt = 1;

const discriminant = qs * qs - 4 * qf * qt;

if (discriminant > 0) {
    const root1 = (-qs + Math.sqrt(discriminant)) / (2 * qf);
    const root2 = (-qs - Math.sqrt(discriminant)) / (2 * qf);
    console.log(`The roots are real and different: ${root1} and ${root2}`);
} else if (discriminant === 0) {
    const root = -qs / (2 * qf);
    console.log(`The roots are real and equal: ${root}`);
} else {
    console.log("The roots are complex/imaginary.");
}




// 7. Generate a random number....

console.log("============ 7. Generate a random number ============");

console.log(`A random number is :- ${Math.random()}`);




// 8. Check Number is positive , negative or zero...

console.log("============ 8. Check Number is positive, negative or zero ============");

tyn_a = -7

if(tyn_a > 0){
    console.log(`The Number ${tyn_a} is Positive.`);
}
else if(tyn_a < 0){
    console.log(`The Number ${tyn_a} is Negative.`);
}
else{
    console.log(`The Number is Zero.`);
}



// 9. Check The number is odd or even.

console.log("============ 9. Check Number is Odd Or Even ============");

ore_num = 23345.345

if(ore_num % 2 == 0){
    console.log(`The Number ${ore_num} is :- Even`);
}
else{
    console.log(`The Number ${ore_num} is :- Odd`);
}



// 10. Find Largest Among three numbers

console.log("============ 10. Find Largest Among three numbers ============");

larg_a = 23
larg_b = 12
larg_c = 34

console.log(`The Numbers Are :- ${larg_a}, ${larg_b} & ${larg_c}`);

if(larg_a > larg_b){
    if(larg_a > larg_c){
        console.log(`The number ${larg_a} is largest.`);
    }
    else{
        console.log(`The number ${larg_c} is largest.`);
    }
}
else{
    if(larg_b > larg_c){
        console.log(`The number ${larg_b} is largest.`);
    }
    else{
        console.log(`The number ${larg_c} is largest.`);
    }
}



// 11. Check Number is prime or not.

console.log("============ 11. Check Number is prime or not. ============");

function checkIfPrime(num) {
    if (num <= 1) return "Not prime"; 

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return "Not prime"; 
        }
    }

    return "Prime"; 
}

console.log(`The Number 17 is prime or not :- ${checkIfPrime(17)}`); 
console.log(`The Number 36 is prime or not :- ${checkIfPrime(36)}`); 





// 12. Print all prime numbers in interval.

console.log("============ 12. Print all prime numbers in interval. ============");

function checkIfPrime(num) {
    if (num <= 1) return "Not prime"; 

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return "Not prime"; 
        }
    }

    return "Prime"; 
}

str_pt = 1
end_pt = 100

console.log(`The prime numbers between ${str_pt} to ${end_pt} :-`);


for(i = str_pt; i <= end_pt; i++){
    if(checkIfPrime(i) == "Prime") console.log(i);
    else continue;
}






// 13. Find The factorial number.

console.log("============ 13. Find the factorial number.  ============");

fno = 20
fact_num = 1

for(i = 1; i <= fno; i++){
    fact_num *= i;
}

console.log(`The Factorial of a number ${fno} :- ${fact_num}`);





// 14. Display multiplication table.

console.log("============ 14. Display multiplication table. ============");

tb_no = 12;
console.log(`The multiplication table of ${tb_no} ::`);

for(i = 1; i <= 10; i++){
    console.log(`${tb_no} * ${i} = ${tb_no * i}`);
}





// 15. Convert Kilometers to mile.
console.log("============ 15. Convert Kilometers to mile. ============");

kms = 20

console.log(`The Miles of kilometer ${kms} is :- ${kms * 0.621371} miles`);





// 16. Convert Celsius to fahrenheit.

console.log("============ 16. Convert Celsius to fahrenheit. ============");

celsius = 24

console.log(`The fahrenheit temperature of the ${celsius}°C is :- ${((9 * celsius) / 5) + 32} °F`);

