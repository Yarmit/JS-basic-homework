// Задание 2.5
"use strict";
/**
 * Функция выполняет математические операции  ( +, -, *, / )
 * @param {Number} arg1	первое введеное число
 * @param {Number} arg2	второе введеное число
 * @param {String} operation	математическая операция (сложение, разность, умножение, деление)
 */
function mathOperation(arg1, arg2, operation) {
	switch (operation) {
		case "сложение":
			result = summation(arg1, arg2);
			simbol = " + "
			break;
		case "разность":
			result = subtraction(arg1, arg2);
			simbol = " - "
			break;
		case "умножение":
			result = multiplication(arg1, arg2);
			simbol = " * "
			break;
		case "деление":
			result = division(arg1, arg2);
			simbol = " : "
			break;
		default:
			alert("Введена неверная арифметическая операция!");
	}
}

/**
 * Функция сложения двух чисел
 * @param {Number} num1	первое введеное число  
 * @param {Number} num2	второе введеное число
 * @returns {Number}		возвращаемое значение
 */
 function summation(num1, num2) {
	return num1 + num2;
}
/**
 * Функция разности двух чисел
 * @param {Number} num1	первое введеное число 
 * @param {Number} num2 второе введеное число
 * @returns {Number}		возвращаемое значение
 */
function subtraction(num1, num2) {
	return num1 - num2;
}
/**
 * Функция умножения двух чисел
 * @param {Number} num1	первое введеное число 
 * @param {Number} num2 второе введеное число
 * @returns {Number}		возвращаемое значение
 */
function multiplication(num1, num2) {
	return num1 * num2;
}
/**
 * Функция деления двух чисел
 * @param {Number} num1	первое введеное число 
 * @param {Number} num2 второе введеное число
 * @returns {Number}		возвращаемое значение
 */
function division(num1, num2) {
	return num1 / num2;
}


let value_1 = +prompt("Введите первое целое число: ");
let value_2 = +prompt("Введите второе целое число: ");
let action = prompt("Введите необхдимую арифметическую операцию: сложение / разность / умножение / деление").toLowerCase();
let simbol = "";
let result = null;

mathOperation(value_1, value_2, action);

if (simbol) {
	alert(value_1 + simbol + value_2 + " = " + result);
}