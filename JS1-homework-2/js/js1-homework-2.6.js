// Задание 2.6
"use strict";
/**
 * Функциы возвращает последний символ
 * @param {Number} val 	введенное числовое значение
 * @returns {Number} 		возвращаемое значение
 */
function lastSymbol(val) {
	let str = String(val); // приводим к строке
	let strLength = str.length; // получаем длину строки
	return Number(str.charAt(strLength - 1)); // последняя цифра строки
}

let num = +prompt("Введите сумму вклада в рублях: ");
let currency = "";

if (num >= 10 && num < 20) {
	currency = " рублей";
} else {
	switch (lastSymbol(num)) {
		case 1:
			currency = " рубль";
			break;
		case 2:
		case 3:
		case 4:
			currency = " рубля";
			break;
		case 0:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
			currency = " рублей";
			break;
	}
}
alert("Ваша сумма в " + num + currency + " успешно зачислена.");
