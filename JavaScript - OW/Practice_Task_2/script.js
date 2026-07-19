// Javascript Practice Tasks :- 

// String Programmes

console.log("==================== String Programmes ====================");
console.log("");
console.log("");


console.log("---------- [1] Find the length of a string ----------");

{
    let str = "Hello! I am Prince"
    
    console.log(`The length of String (${str}) is: ${str.length}`);
    
}


console.log("---------- [2] Get character at a given index ----------");
{
    let str = "Prince Nayi"
    
    console.log(`In the string ${str} Character At 5th Index is: ${str.charAt(5)}`);
    
}


console.log("---------- [3] Search for a substring and check its position ----------");
{
    let str = "Hii Good Afternoon !"
    
    let regex = /[Good]/g
    
    console.log(`In string (${str}) the word ${str[str.search(regex)]} at ${str.search(regex)}`);
    
}


console.log("---------- [4] Check if a string contains a specific word ----------");
{
    let str = "Hii i am prince, good afternoon, how are you ?"
    
    let word = "Prince"
    
    console.log(`The String (${str})\n${str.includes(word) ? "is" : "is not"} includes the word "${word}"`);
    
}


console.log("---------- [5] Extract a portion of a string using slice/substring ----------");
{
    let str = "Hello everyone , Jay Mataji"
    
    console.log(`The word "${str.slice(17, 27)}" is the Part of string "${str}"`);
    
}



console.log("---------- [6] Convert a string to uppercase and lowercase ----------");
{
    let str = "A Lion is in the Jungle"
    
    console.log(`The Original String: "${str}"\nUPPERCASE: "${str.toUpperCase()}\nlowercase: "${str.toLowerCase()}"`);
    
}


console.log("---------- [7] Remove extra spaces from a string ----------");
{
    let str = "     Hello word !      "
    
    console.log(`The trimmed version of string "${str}" is\n"${str.trim()}"`);
    
}


console.log("---------- [8] Split a sentence into an array of words ----------");
{
    let str = "The winner of the race is Chittah"
    
    console.log(`The string: ${str}\nIn Array : ${str.split(" ")}`);
    
}


console.log("---------- [9] Replace a word in a string (single and all occurrences) ----------");
{
    let str = "This dog's name is just Dog! what about your name ?"
    
    console.log(`Original String: "${str}"\nReplaced string: "${str.replace("name", "nickname")}"\nReplaced string: "${str.replaceAll("name", "nickname")}"`);
    
}


console.log("---------- [10] Repeat a string a given number of times ----------");
{
    let str = "Happy! "
    
    console.log(`I am ${str.repeat(3)}`);
    
}


console.log("---------- [11]  Pad a number with leading zeros ----------");
{
    let num = "7"
    
    console.log(`The Number ${num} after Pad is: ${num.padEnd(8, "0")}`);
    
}


console.log("---------- [12]  Join multiple strings together ----------");
{
    let str1 = "Hello"
    let str2 = "World!"
    
    console.log(`Merged String: ${str1.concat(" ", str2)}`);
    
}


console.log("---------- [13] Check if a string starts/ends with a specific word ----------");
{
    let str = "Myself Prince Nayi"

    console.log(str.startsWith("Prince", 7));

    console.log(str.endsWith("Nay"));

}



// Array Programmes

// 1. Add and remove elements from the end of an array
// 2. Add and remove elements from the beginning of an array
// 3. Double every number in an array using map
// 4. Filter numbers greater than a given value
// 5. Find the sum of all array elements using reduce
// 6. Print each element using forEach
// 7. Find the first element/index matching a condition
// 8. Check if an array contains a specific value
// 9. Sort an array of numbers in ascending order
// 10.Reverse an array
// 11. Extract a portion of an array
// 12. Insert/remove elements at a specific index
// 13. Merge two arrays
// 14. Convert an array into a string
// 15. Flatten a nested array
// 16. Check whether a variable is an array




console.log("");
console.log("");
console.log("==================== Array Programmes ====================");
console.log("");
console.log("");

console.log("---------- 1 Add and remove elements from the end of an array ----------");

{
    let arr = [1, 2, 3, 4, 5]
    
    console.log(`The Array: ${arr}`);
    
    arr.pop()
    
    console.log(`After removing element: ${arr}`);
    
    arr.push(6, 7)
    
    console.log(`After Adding element: ${arr}`);
    console.log(arr);
    
}


console.log("---------- 2. Add and remove elements from the beginning of an array ----------");
{
    let arr = [1, 2, 3, 4, 5]
    
    console.log(`The array: ${arr}`);
    
    arr.shift()
    
    console.log(`After removing an element from beginning: ${arr}`);
    
    arr.unshift(6, 7)
    
    console.log(`After adding elements at beginning: ${arr}`);
    
}


console.log("---------- 3. Double every number in an array using map ----------");
{
    let arr = [1, 2, 3, 4, 5]
    
    console.log("The original array:", arr);
    
    let mapped = arr.map((x) => x * 2)
    
    console.log("Doubled array:", mapped);
    
}


console.log("---------- 4. Filter numbers greater than a given value ----------");
{
    let arr = [23, 4, 35, 546, 47, 24, 67, 57, 234]
    
    let filteredArr = arr.filter((num) => num > 50)
    
    console.log(`The array: ${arr}\n\nThe filtered array (element > 50) : ${filteredArr}`);
}


console.log("---------- 5. Find the sum of all array elements using reduce ----------");
{
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
    let sum = arr.reduce((acc, curVal) => acc + curVal, 0)
    
    console.log(`The Sum Of array [${arr}] is: ${sum}`);
    
}


console.log("---------- 6. Print each element using forEach ----------");
{
    let arr = ["Cat", "Dog", "Lion", "Elephant", "Fox", "Wolf"]
    
    arr.forEach(x => console.log(x))
}


console.log("---------- 7. Print each element using forEach ----------");
{
    let arr = [3, 45, 54, 23, 12, 4, 56, 35, 66, 34]
    
    let lgNumber = (element) => element > 30
    
    console.log("Number In array which is > 30");
    
    console.log(`${arr.findIndex(lgNumber)} -> ${arr[arr.findIndex(lgNumber)]}`);
    
}


console.log("---------- 8. Check if an array contains a specific value ----------");
{
    let arr = [1, 10, 34, 4, 51, 16, 54]
    
    let num = 34
    
    console.log(`This array contains ${num} ? ${arr.includes(num)}`);
    
}



console.log("---------- 9. Sort an array of numbers in ascending order ----------");
{
    let arr = [1, 10, 34, 4, 51, 16, 54]
    
    console.log(`The array: [${arr}]\nSorted Array (Ascending): [${arr.toSorted((a, b) => a - b)}]`);
    
}


console.log("---------- 10.Reverse an array ----------");
{
    let arr = ["Apple", "Banana", "Grapes", "Mango", "Orange"]
    
    console.log(`The Original Array: [${arr}]\nReversed Array: [${arr.toReversed()}]`);
    
}


console.log("---------- 11. Extract a portion of an array ----------");
{
    const animals = ["ant", "bison", "camel", "duck", "elephant"]
    
    console.log(`The extracted portion of an array: [${animals.slice(2, 5)}]`);
}


console.log("---------- 12. Insert/remove elements at a specific index ----------");
{
    let arr = [1, 4, 56, 34, 23, 47]
    
    console.log(`The array: [${arr}]`);
    
    arr.splice(1, 1)
    
    console.log(`After removing an element: [${arr}]`);
    
    arr.splice(3, 0, 7)
    
    console.log(`After adding a new element: [${arr}]`);
    
}


console.log("---------- 13. Merge two arrays ----------");
{
    let arr1 = ["a", "b", "c"]
    
    let arr2 = ["d", "e", "f"]
    
    console.log(`Merged Array: [${arr1.concat(arr2)}]`);
    
}


console.log("---------- 14. Convert an array into a string ----------");
{
    let arr = ["Alex", "John"]
    
    console.log(`The Array: [${arr}]`);
    
    console.log(`After converted into a string: "${arr.toString()}"`);
    
}


console.log("---------- 15. Flatten a nested array ----------");
{
    let arr = [1, [2, [3, [4, 5]]]]
    
    console.log("Array: ", arr);
    
    console.log("After flat: ", arr.flat());
    console.log("After flat: ", arr.flat(2));
    console.log("After flat: ", arr.flat(3));
    
}


console.log("---------- 16. Check whether a variable is an array ----------");
{
    let arr = [1, 2, 4, 5, 5]

    console.log(`${Array.isArray(arr) ? "Yes this is array" : "No this is not an array"}`);

}



// Object Programmes

// 1. Get all keys of an object
// 2. Get all values of an object
// 3. Get key-value pairs as an array
// 4. Merge two objects into one
// 5. Freeze an object and try modifying it
// 6. Check if an object is frozen
// 7. Convert an array of pairs into an object
// 8. Check if an object has a specific property
// 9. Create an object with a custom prototype

console.log("");
console.log("");
console.log("==================== Object Programmes ====================");
console.log("");
console.log("");

console.log("---------- [1-3] Get all keys/values/[key-value] of an object ----------");

{
    let obj = {
        name: "Alex",
        age: 18,
        country: "USA"
    }
    
    console.log(`Keys in Object: ${Object.keys(obj)}`);
    console.log(`Values in Object: ${Object.values(obj)}`);
    console.log("Key-Values in Object:");
    
    for (let [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`);
    }
    
}


console.log("---------- 4. Merge two objects into one ----------");
{
    let obj1 = {
        a: 1, b: 2
    }
    
    let obj2 = {
        b: 4, c: 3
    }
    
    let obj3 = Object.assign(obj1, obj2)
    
    console.log("Merged Object:", obj3);
    
}


console.log("---------- [5-6] Freeze an object and try modifying it & Check if an object is frozen ----------");
{
    let obj = {
        pr1: 77
    }
    
    Object.freeze(obj)
    
    obj.pr1 = 45
    
    console.log(obj);
    
    console.log(`Is object frozen? ${Object.isFrozen(obj)}`)
}



console.log("---------- 7. Convert an array of pairs into an object ----------");
{
    let kvPairs = [
        ['name', 'Henry'],
        ['age', 18],
        ['role', 'Developer']
    ]
    
    let obj = Object.fromEntries(kvPairs)
    
    console.log("Converted Object:", obj);
    
}


console.log("---------- 8. Check if an object has a specific property ----------");
{
    const obj = {
        name: "Prince"
    }
    
    console.log(`Does this object have property '${Object.keys(obj)}' ? ${Object.hasOwn(obj, "name")}`);
    
}



console.log("---------- 9. Create an object with a custom prototype ----------");
{
    let animalPrototype = {
        speak() {
            return `${this.name} makes a sound...!!`
        }
    }
    
    let obj = {}
    
    const animal = Object.create(animalPrototype)
    
    animal.name = "Dog"
    
    console.log(animal.speak());
    
}


// Map programmes

// 1. Create a map of countries and their capitals
// 2. Get a value from a map using its key
// 3. Check if a key exists in a map
// 4. Find the total number of entries in a map
// 5. Loop through all entries of a map
// 6. Get all keys/values from a map separately
// 7. Delete an entry from a map


console.log("");
console.log("");
console.log("==================== Map Programmes ====================");
console.log("");
console.log("");


{
    console.log("---------- 1. Create a map of countries and their capitals ----------");
    
    const worldMap = new Map([
        ["India", "New Delhi"],
        ["Japan", "Tokyo"],
        ["Canada", "Ottawa"],
        ["Austraila", "Canberra"],
        ["Brazil", "Brasilia"],
        ["Germany", "Berlin"],
        ["South Africa", "Pretoria"]
    ]);
    
    console.log(worldMap);
    
    
    
    console.log("---------- 2. Get a value from a map using its key ----------");
    
    console.log(`The Capital of Japan: ${worldMap.get("Japan")}`);

    
    
    console.log("---------- 3. Check if a key exists in a map ----------");
    
    console.log(`Does The Canada exist in a map? ${worldMap.has("Canada")}`);
    
    
    
    console.log("---------- 4. Find the total number of entries in a map ----------");
    
    console.log(`The total number of entries in set: ${worldMap.size}`);
    
    
    
    console.log("---------- 5. Loop through all entries of a map ----------");
    
    for (let [key, value] of worldMap) {
        console.log(`${key}: ${value}`);
    }
    
    const iter = worldMap.entries()

    
    
    
    console.log("---------- 6. Get all keys/values from a map separately ----------");
    
    console.log(iter.next().value);
    console.log(iter.next().value);
    console.log(iter.next().value);
    console.log(iter.next().value);
    
    
    
    console.log("---------- 7. Delete an entry from a map ----------");
    
    worldMap.delete("South Africa")
    
    console.log(worldMap);
    
}



// Set Programmes

// 1. Create a set and add values to it
// 2. Check if a value exists in a set
// 3. Remove a value from a set
// 4. Find the size of a set
// 5. Loop through all values in a set
// 6. Remove duplicate values from an array using a set


console.log("");
console.log("");
console.log("==================== Set Programmes ====================");
console.log("");
console.log("");


{
    
    console.log("---------- 1. Create a set and add values to it ----------");
    
    const mySet = new Set([1, 2, 3, 4, 5])
    
    console.log("My Set:", mySet);
    
    
    
    
    console.log("---------- 2. Check if a value exists in a set ----------");
    
    console.log("The Set has value(3) ? ", mySet.has(3));
    

    
    
    console.log("---------- 3. Remove a value from a set ----------");
    
    mySet.delete(4)
    
    console.log("After Delete an element from set:", mySet);
    
    
    
    
    console.log("---------- 4. Find the size of a set ----------");
    
    console.log("The size of a set is:", mySet.size);
    
    
    
    
    console.log("---------- 5. Loop through all values in a set ----------");
    
    const temp = mySet.entries()
    
    for (let entry of temp) {
        console.log(entry);
    }
    
    
    
    
    console.log("---------- 6. Remove duplicate values from an array using a set ----------");
    
    let orgAry = [1, 2, 3, 3, 3, 4, 5, 6, 2, 4]
    
    let unqAry = [...new Set(orgAry)]
    
    console.log("Original Array:", orgAry);
    console.log("Unique Array:", unqAry);
    
}


// Date programmes

// 1. Get the current date and time
// 2. Extract year, month, and day from a date
// 3. Find the current day of the week
// 4. Get the timestamp of the current date
// 5. Convert a date to ISO format
// 6. Create a custom date (specific year/month/day)
// 7. Change the year of an existing date
// 8. Get the current timestamp using Date.now()

console.log("");
console.log("");
console.log("==================== Date Programmes ====================");
console.log("");
console.log("");


{
    console.log("---------- 1. Get the current date and time ----------");
    
    let today = new Date()
    
    console.log(today);
    

    
    console.log("---------- 2. Extract year, month, and day from a date ----------");
    
    console.log(`Year: ${today.getFullYear()}\nMonth: ${today.getMonth()}\nDay: ${today.getDay()}`);
    
    
    
    console.log("---------- 3. Find the current day of the week ----------");
    
    console.log(`Current Day of week: ${today.getDay()}`);
    
    
    
    
    console.log("---------- 4. Get the timestamp of the current date ----------");
    
    console.log(`Timestamp of the current date: ${Date.parse("19 Jul 2007")}`);
    

    
    
    console.log("---------- 5. Convert a date to ISO format ----------");
    
    const dt = new Date("19 July 2026 15:00 UTC")
    
    console.log("In String:", dt.toString());
    console.log("In ISO String:", dt.toISOString());
    
    
    
    
    console.log("---------- 6. Create a custom date (specific year/month/day) ----------");
    
    const custDate = new Date()
    
    custDate.setFullYear(7777)
    custDate.setMonth(77)
    console.log(custDate);
    

    
    console.log("---------- 7. Change the year of an existing date ----------");
    
    today.setFullYear(2007)
    

    
    console.log("---------- 8. Get the current timestamp using Date.now() ----------");
    
    console.log(`Current Timestamp: ${Date.now()}`);
    
}



// Number Programmes

// 1. Round a decimal number to 2 places
// 2. Format a number to a given number of significant digits
// 3. Convert a number to binary/other base
// 4. Check if a number is an integer
// 5. Check if a number is finite
// 6. Check if a value is NaN
// 7. Parse a string into a floating-point/integer number
// 8. Print the maximum safe integer value


console.log("");
console.log("");
console.log("==================== Number Programmes ====================");
console.log("");
console.log("");

{
    console.log("---------- 1. Round a decimal number to 2 places ----------");
    
    let num = 232.5456
    
    console.log(`Number (${num}) After round off: ${num.toFixed(2)}`);
    
    
    
    
    console.log("---------- 2. Format a number to a given number of significant digits ----------");
    
    console.log(`Formatted Number: ${num.toPrecision(3)}`);
    
    
    
    
    console.log("---------- 3. Convert a number to binary/other base ----------");
    
    console.log(`Number: ${num}\nIn Binary: ${num.toString(2)}\nIn Octal: ${num.toString(8)}\nIn Hexadecimal: ${num.toString(16)}`);
    
    
    
    
    console.log("---------- 4. Check if a number is an integer ----------");
    
    console.log(`Number(${num}) is integer: ${Number.isInteger(num)}`);
    
    
    
    
    console.log("---------- 5. Check if a number is finite ----------");
    
    console.log(`Number(${num}) is finite: ${Number.isFinite(num)}`);
    

    
    
    console.log("---------- 6. Check if a value is NaN ----------");
    
    let num2 = "123he3"
    
    console.log(`The ${num2} is NaN: ${isNaN(num2)}`);
    
    
    
    console.log("---------- 7. Parse a string into a floating-point/integer number ----------");
    
    let str1 = "1010"
    
    console.log(`String "${str1}" in Integer: ${Number.parseInt(str1, 2)}`);
    
    let str2 = "10011.1000001010"
    
    console.log(`String "${str2}" in Float: ${Number.parseFloat(str2, 2)}`);
    
    
    
    
    console.log("---------- 8. Print the maximum safe integer value ----------");
    
    console.log(`Maximum Safe Integer Vakue: ${Number.MAX_SAFE_INTEGER}`);
    
}


// Math Programmes

// 1. Round a number up/down/nearest
// 2. Find the absolute value of a negative number
// 3. Find the maximum/minimum among given numbers
// 4. Calculate the power of a number
// 5. Find the square root of a number
// 6. Generate a random number between 0 and 1
// 7. Generate a random integer within a range
// 8. Truncate the decimal part of a number
// 9. Check the sign of a number
// 10.Print the value of PI


console.log("");
console.log("");
console.log("==================== Number Programmes ====================");
console.log("");
console.log("");


{
    console.log("---------- 1. Round a number up/down/nearest ----------");
    
    let num = 454.3267
    
    console.log(`Number: ${num}\nRound Up: ${Math.ceil(num)}\nRound Down: ${Math.floor(num)}\nRound Nearest Integer: ${Math.round(num)}`);
    
    
    
    
    console.log("---------- 2. Find the absolute value of a negative number ----------");
    
    let num1 = -234
    
    console.log(`Absolute Value: ${Math.abs(num1)}`);
    

    
    
    console.log("---------- 3. Find the maximum/minimum among given numbers ----------");
    
    console.log(`Maximum Number: ${Math.max(2, 45, 90)}\nMinimum Number: ${Math.min(2, 45, 90)}`);
    

    
    
    console.log("---------- 4. Calculate the power of a number ----------");
    
    console.log(`Powered Number: ${Math.pow(3, 4)}`);
    

    
    
    console.log("---------- 5. Find the square root of a number ----------");
    
    console.log(`Rooted Number(121): ${Math.sqrt(121)}`);
    
    
    
    console.log("---------- 6. Generate a random number between 0 and 1 ----------");
    
    function getRandomNum(min, max){
        return Math.random() * (max - min) + min;
    }
    
    console.log(`Random Number between 0 and 1: ${getRandomNum(0, 1)}`);
    


    console.log("---------- 7. Generate a random integer within a range ----------");
    
    function getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min) + min);
    }
    
    console.log(`Random Integer between -100 to 100: ${getRandomInt(-100, 100)}`);
    
    
    
    
    console.log("---------- 8. Truncate the decimal part of a number ----------");
    
    let num2 = 567.44324564
    
    console.log(`Number: ${num2}\nAfter Truncate: ${Math.trunc(num2)}`);
    
    
    
    console.log("---------- 9. Check the sign of a number ----------");
    
    let num3 = -2343.55
    
    console.log(`Sign of number ${num3} -> ${Math.sign(num3)}`);
    
    
    
    
    console.log("---------- 10.Print the value of PI  ----------");
    
    console.log(`Value of PI: ${Math.PI}`);
    
}