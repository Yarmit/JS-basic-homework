	// Задание 2.3
	"use strict";	
	let a = +prompt("Введите первое целое число: ");
	let b = +prompt("Введите второе целое число: ");
	let result = null;

	if (a >= 0 && b >= 0) {
		result = a - b;
		alert("Числа положительные их разность равна: " + result)
	} else if (a < 0 && b < 0) {
		result = a * b;
		alert("Числа отрицательные их произведение равно: " + result)
	} else {
		result = a + b;
		alert("Числа разных знаков их сумма равна: " + result)
	}
	
	console.log(result);