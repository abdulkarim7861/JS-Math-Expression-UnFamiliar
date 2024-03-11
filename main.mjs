// Problem 1 \\
let a = 10;
console.log(`Result:\nThe Value of a is ${a} \n -------------------------`);

console.log(`The value of ++a is: ${++a} \nNow the value of a is: ${a}`);

console.log(`The value of a++ is: ${a++} \nNow the value of a is: ${a}`);
console.log(`The value of a++ is: ${--a} \nNow the value of a is: ${a}`);
console.log(`The value of a++ is: ${a--} \nNow the value of a is: ${a}`);

// Problem 2 \\
let num1 = 2 ;
let num2 = 1 ;

             //   1   -    0   +    1   +   1
let result =  (--num1 - --num2 + ++num2 + num2--);
console.log(`${result}`); //3

// Problem 3 \\
// let userName = prompt("Enter your Name:");
// alert(`Hello ${userName}`);

// Problem 4 \\

let table = prompt(`Enter Table Which you want`);

if(table ===
     null ){

    console.log(`Table Of ${table}`)
    console.log(` ${table} x 1 = ${table*1}`);
    console.log(` ${table} x 2 = ${table*2}`);
    console.log(` ${table} x 3 = ${table*3}`);
    console.log(` ${table} x 4 = ${table*4}`);
    console.log(` ${table} x 5 = ${table*5}`);
    console.log(` ${table} x 6 = ${table*6}`);
    console.log(` ${table} x 7 = ${table*7}`);
    console.log(` ${table} x 8 = ${table*8}`);
    console.log(` ${table} x 9 = ${table*9}`);
    console.log(` ${table} x 10 =${table*10}`);
}else {
    console.log(` 5 x 1 = 5`);
    console.log(` 5 x 2 = 10`)
    console.log(` 5 x 3 = 15`);
    console.log(` 5 x 4 = 20`);
    console.log(` 5 x 5 = 25`);
    console.log(` 5 x 6 = 30`);
    console.log(` 5 x 7 = 35`);
    console.log(` 5 x 8 = 40`);
    console.log(` 5 x 9 =  45`);
    console.log(` 5 x 10 = 50`);
}

// Problem 5 \\
let subject_1 = prompt("Enter Name of Subject no 1"); 
let subject_2 = prompt("Enter Name of Subject no 2");
let subject_3 = prompt("Enter Name of Subject no 3");

const totalMarks = 100 ;

let obtMarkOfSubject_1 = parseFloat(prompt("Enter Obtained Marks Of Subject 1:"));
let obtMarkOfSubject_2 = parseFloat(prompt("Enter Obtained Marks Of Subject 2:"));
let obtMarkOfSubject_3 = parseFloat(prompt("Enter Obtained Marks Of Subject 3:"));

let percentageOfSubject_1 = (obtMarkOfSubject_1/totalMarks )  ;
let percentageOfSubject_2 = (obtMarkOfSubject_2/totalMarks )  ;
let percentageOfSubject_3 = (obtMarkOfSubject_3/totalMarks ) ;

console.log(`${subject_1}:${percentageOfSubject_1}%`)
console.log(`${subject_2}:${percentageOfSubject_2}%`)
console.log(`${subject_3}:${percentageOfSubject_3}%`)