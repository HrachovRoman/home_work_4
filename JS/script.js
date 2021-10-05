const arithmeticOperations = prompt('Какое арфиметическое действие вы хотите сделать? \nВведите необходимую фразу: \n \n"add" - сложение \n"sub" - вычитание \n"mult" - умножение \n"div" - деление');

const firstOperand = +prompt('Введите первое число');
const secondOperand = +prompt('Введите второе число');

if (arithmeticOperations === 'add') {
    let resultAddition = firstOperand + secondOperand;
    console.log(`${firstOperand} + ${secondOperand} = ${resultAddition}`);
}

if (arithmeticOperations === 'sub') {
    let resultSubtraction = firstOperand - secondOperand;
    console.log(`${firstOperand} - ${secondOperand} = ${resultSubtraction}`);
}

if (arithmeticOperations === 'mult') {
    let resultMultiplication = firstOperand * secondOperand;
    console.log(`${firstOperand} * ${secondOperand} = ${resultMultiplication}`);
}

if (arithmeticOperations === 'div') {
    let resultDivision = firstOperand / secondOperand;
    console.log(`${firstOperand} / ${secondOperand} = ${resultDivision}`);
}

// Также можно было это реализовать через else if 

// if (arithmeticOperations === 'add') {
//     let resultAddition = firstOperand + secondOperand;
//     console.log(`${firstOperand} + ${secondOperand} = ${resultAddition}`);
// } else if (arithmeticOperations === 'sub') {
//     let resultSubtraction = firstOperand - secondOperand;
//     console.log(`${firstOperand} - ${secondOperand} = ${resultSubtraction}`);
// } else if (arithmeticOperations === 'mult') {
//     let resultMultiplication = firstOperand * secondOperand;
//     console.log(`${firstOperand} * ${secondOperand} = ${resultMultiplication}`);
// } else if (arithmeticOperations === 'div') {
//     let resultDivision = firstOperand / secondOperand;
//     console.log(`${firstOperand} / ${secondOperand} = ${resultDivision}`);
// }