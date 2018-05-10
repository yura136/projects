// Выводим что-то в консоль
console.log("Hello world!");

// Объявим переменные
var myNumber = 2534,
	myString = "Some string",
	myBoll = true,
	myNull = null,
	myUndef = undefined;
// Определение типа переменных typeof
// Простые типы (приметивные)
console.log(typeof myNumber); // return Number
console.log(typeof typeof myNumber); // return string
console.log(typeof myString); // string
console.log(typeof myBoll); // boolean
console.log(typeof myNull); // object - известная ошбика
console.log(typeof myUndef); // undefined

console.log("Sorax".toUpperCase()); // Верхний регистр

// Объектные типы
var obj = {name: "sorax"},
	array = [1,2,3],
	regexp = /w+/g,
	func = function(){};
console.log(""); // Для разделения
console.log(typeof obj); // object
console.log(typeof array); // object
console.log(typeof regexp); // object
console.log(typeof func); // function
obj.name = "passive star"
console.log(obj);
array[1] = 3222;
console.log(array);
