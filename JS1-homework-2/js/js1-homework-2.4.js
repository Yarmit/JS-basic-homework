
	// Задание 2.4
	"use strict";
	/**
	 * Функция сложения двух чисел
	 * @param {number} num1 	первое число
	 * @param {numder} num2 	второе число
	 * @returns {number}			возвращаемое значение
	 */
	function summation(num1, num2) {
		return num1 + num2;
	}

	/**
	 * Функция разности двух чисел
	 * @param {number} num1 	первое число
	 * @param {numder} num2 	второе число
	 * @returns {number}			возвращаемое значение
	 */
	function subtraction(num1, num2) {
		return num1 - num2;
	}

	/**
	 * Функция умножения двух чисел
	 * @param {number} num1 	первое число
	 * @param {numder} num2 	второе число
	 * @returns {number}			возвращаемое значение
	 */
	function multiplication(num1, num2) {
		return num1 * num2;
	}
	/**
	 * Функция деления двух чисел
	 * @param {number} num1 	первое число
	 * @param {numder} num2 	второе число
	 * @returns {number}			возвращаемое значение
	 */
	function division(num1, num2) {
		return num1 / num2;
	}

	// Переменные
	let value_1 = 30;
	let value_2 = 5;
	
	// Вывод в консоль 
	console.log("Результат сложения:  " + summation(value_1, value_2));
	console.log("Результат вычитания: " + subtraction(value_1, value_2));
	console.log("Результат умножения: " + multiplication(value_1, value_2));
	console.log("Результат деления:   " + division(value_1, value_2));
