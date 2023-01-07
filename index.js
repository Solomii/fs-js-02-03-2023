// alert(123)

// console.log(123);
// console.log(12.3);
// console.log("text");
// console.log(true);
// console.log("true");
// console.log(null);
// console.log(undefined)

/* починати з букви, з $ або  _ 
 !!!не використовувати пробіл 
 регістрозалежне
 відповідає на питання, щ в ній 
 */

// let userName = "Brad";
// console.log(userName);

//  let userAge;   // оголошення
//  userAge = 59n;     // ініціфлізація

// console.log("user name:", userName);
// console.log("user name:", userAge);

// const userYearOfBirth = "";

//  userAge(60);
// userName = "Bradly";

// console.log(typeof userAge);
// const isUserMale = true;
//  const userGender="male";
//  userGender="female"; error;

// const AMOUNT_DAYS_WEEK = 7;

// let number = 12;
// {
//     let number = 66;
//     console.log(number);
// }

// console.log(number);

// let userAge = 23;

// const isAdultUser = true;

// const userEmail = "user@gmail.com";

// const programmingLanguage = "C++";

// const checkUserHasPet = false;

// const AMOUNT_OF_SEASONS = 4;

// let numberOne = 12;
// let numberTwo = 3;
// let numberOne = "12";
// let numberTwo = "3";

// let sum = numberOne + numberTwo;
// console.log(sum);

// let divide = numberOne / numberTwo;
// console.log(divide);

// let mul = numberOne * numberTwo;
// console.log(mul);

// let neg = numberOne - numberTwo;
// console.log(neg);

// let remainder = numberOne % numberTwo;
// console.log(remainder);

// let sum = numberOne + numberTwo;
// console.log(sum);

// let divide = numberOne / numberTwo;
// console.log(divide);›

// let mul = numberOne * numberTwo;
// console.log(mul);

// let neg = numberOne - numberTwo;
// console.log(neg);

// let remainder = numberOne % numberTwo;
// console.log(remainder);
// debugger

// if (number % 2 === 0) {
//     console.log("even");
// } else {
//     console.log("odd");
// }

// if (number > 7  && number%3 ===0) {
//   console.log("win");
// } else {
//   console.log("loser");
// }

// if (number <= 7  || number%3) {
//   console.log("loser");
// } else {
//   console.log("win");
// }

// let number = 10;
// // let numOpos = number*(-1);

// // if (number % 2 === 0 && number > 0) {
// //     console.log((number += 5));
// // } else if (number % 2 && number > 0) {
// //     console.log((number *= 2));
// // } else if (number % 2 === 0 && number < 0) {
// //   console.log(number=-number);
// // }

// // console.log(number)

// if (number > 0) {
//     if (number % 2 === 0) {
//         number += 5;
//     } else {
//         number * 2;
//     }
// } else if (number % 2 === 0 && number < 0) {
//     number = -number;
// }

// let numOne = 3;
// let numTwo = 8;
// let result = "";

// if (numOne % 2 === 0 && numTwo % 2 === 0) {
//     result = numOne + numTwo;
// } else {
//     result= (numOne - numTwo);
//     if (result<0) {
//       result=-result;
//     }
// }

// console.log(result);

// debugger;

// let symbol1 = 6;
// let symbol2 = 2;
// let result = "";

// if (symbol1 === 0 && symbol2 === 0 ){
//     result = 0/0;
// }  else if (symbol1 === 0 || symbol2 === 0) {
//   if (symbol1 === 0) {
//     result = symbol2;
// } else if (symbol2 === 0) {
//   result = symbol1;
// }
// } else if (symbol1 === symbol2) {
//     result = symbol1 * symbol2;
// }  else {
//    result=symbol1/symbol2;
// }

// console.log(result);

// const side = prompt("enter side", 4);
// const getPerimeterSquer = function (side = 1) {
//     if (side <= 0) {
//         return NaN;
//     }
//     return side * 4;
// };

// // debugger
// console.log(getPerimeterSquer());
// console.log(getPerimeterSquer(undefined));

// // debugger
// console.log(getPerimeterSquer(3));
// console.log(getPerimeterSquer(-3));

// /**
//  *
//  * @param {number} isAdult
//  * @param  {number} FULL_AGE default value = 18
//  * @returns {boolean}
//  */

// const getNumberAge = function (age, FULL_AGE = 18) {
//     // if (isAdult >= 18) {
//     //     return true;
//     // }
//     // return false;
//     return age >= FULL_AGE;
// };

// console.log(getNumberAge(18));
// console.log(getNumberAge(16));

// /**
//  *
//  * @returns  {string || null}
//  */

// const getValue = function () {
//   const isValue=prompt("enter value")
//    if (isValue) {
//     return isValue;
//    }
//    return null;
// };

// console.log(getValue())

/**
 * @param {number} numberOne
 * @param {number} numberTwo
 * @returns {boolean}
 */

const numberOne = 45;
const numberTwo = 9;

const isMultiplicity = function (numberOne, numberTwo) {
    return numberOne % numberTwo === 0;
};

if (Number.isInteger(numberOne) && Number.isInteger(numberTwo)) {
    console.log(isMultiplicity(numberOne, numberTwo));
} else {
    console.log("number must be integer ");
}
