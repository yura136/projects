/*
 В JavaScript 6 типов данных (5 примитивных и 1 объект)
*/

/*ПРИМИТИВНЫЕ ТИПЫ (1.числовой, 2.строковый, 3.логический, спец. типы: 4.null, 5.undefined)*/
// Числовой тип "number" (2; 2.5; Infinity; -Infinity; NaN)
var fl = .345; // Дробные числа
var int = 2; // Целые числа
console.log(2/0); // Infinity  - бесконечность
console.log(-2/0); // -Infinity  - минус бесконечность
console.log(typeof -Infinity); // number
console.log("obj" * 2); // NaN (Not a number) - не число
console.log(typeof NaN); // number

// Строка тип "string"
var str = "Мама мыла раму";
str = 'Одинарные кавычки тоже подойдут';

// Булевый (логический) тип "boolean" (false, true)
var checked = true;
checked = false;

// Специальное значение "null" (одно единственное значение null)
var age = null; // возраст неизвестен

// Специальное значение undefined "значение не присвоено" (одно единственное значение undefined)
var x;
console.log(x); // undefined

// В явном виде присваиваем undefined
var x = 123;
x = undefined;
console.log(x); // undefined

/* 
	6-ой тип "ОБЪЕКТЫ" - используется для коллекции данных и для объявления более сложных сущностей 
*/
var user = {name: "Yura"};
console.log(user.name); // Yura