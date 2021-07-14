// Function Expression
const sum1 = function (number1, number2) {
    const som1 = number1 * number1;
    const som2 = number2 * number2;
    const outcome1 = som1 + som2;
    const outcome2 = outcome1 * outcome1;
    return outcome2;
}

const result1 = sum1(1, 2);
console.log(result1);


// Function declaration
function sum2(no1, no2) {
    const som3 = no1 * no1;
    const som4 = no2 * no2;
    const outcome3 = som3 + som4;
    const outcome4 = outcome3 * outcome3;
    return outcome4;
}

const result2 = sum2(1, 2);
console.log(result2);


// Arrow function
const sum3 = (no3, no4) => {
    const som5 = no3 * no3;
    const som6 = no4 * no4;
    const outcome5 = som5 + som6;
    const outcome6 = outcome5 * outcome5;
    return outcome6;
}

const result3 = sum3(1, 2);
console.log(result3);
