/* В JavaScript нет перегрузки функции, любая функция может быть вызвана с любым количеством аргументов, 
доступ к параметрам осуществляется за счет псевдо-массива arguments  - это НЕ МАССИВ (МЕТОДЫ МАССИВА К НЕМУ НЕ ПРИМЕНЯТЬ)*/

// Псевдо-массив arguments содержит: 1) список по номерам arguments[0], arguments[1], ...  2) свойство length

function sayHi() {
	for (var i = 0; i < arguments.length; i++) {
		console.log("Привет " + arguments[i]);
	}
}
 // Все работает вне зависимость от того сколько мы передаем аргументов
console.log(sayHi("Юра", "Игорь", "Саша", "Андрей")); // Привет Юра, Привет Игорь, Привет Саша, Привет Андрей
console.log(sayHi("Вася", "Коля"));

// В современной редакции стандарта аргументы отделены от локальных переменных
function f(x) {
	"use strict";  // строгий режим

	arguments[0] = 5;
	console.log(x);  // выведет 1 не 5,так как переменная "отвязана"" от arguments
}
f(1); // 1

// Но без строго режима
function f1(x) {
	arguments[0] = 5;
	console.log(x);  // выведет 5, так привязана в старом стандарте
}
f1(1); // 5


// Делаем обычный массив из arguments
var args = [];
function say() {
	for (var i = 0; i < arguments.length; i++) {
		args[i] = arguments[i];  // делаем обычный массив из arguments - такие объекты называют "коллекцией" или "псевдомассивами"
	}
	return args;
}

console.log(say());


/*КОПИРОВАНИЕ СВОЙСТВ из объекта src1,src2, ... в объект dst, и возращает полученный объект
  Функция copy(dst, src1, src2, ...)  - создаем сами благодаря arguments*/
function copy(dst) {
	//var dst = arguments[0]; - можно и так если copy()

	for (var i = 0; i < arguments.length; i++) {
		var arg = arguments[i];
		for (var key in arg) {
			dst[key] = arg[key];
		}
	}
	return dst;
}

var userAgent = {
	name: "Opera",
	version: "5"
}
var user = {
	name: "Yura",
	age: "28"
}
var student = {
	university: "BNTU"
};
console.log(student);  // {university: "BNTU"}
copy(student, userAgent, user); // в student скопировали userAgent и user
console.log(student); // {university: "BNTU", name: "Yura", version: "5", age: "28"}

//Создадим клон объекта
var userClone = copy({}, user);
console.log(userClone); // {name: "Yura", age: "28"}

/*Аргументы по умолчанию через ||
Если вызвать с меньшим количеством арументов то заменять на undefined */
function showWarning(width, height, title, contents) {
	width = width || 200; //если не указано, то 200, так width = undefined -> 200
	height = height || 100;
	title = title || "Предупреждение";

	return width + " " + height + " " + title + " " +  contents;
}
console.log(showWarning(353)); // 353 100 Предупреждение undefined
console.log(showWarning()); // 200 100 Предупреждение undefined
console.log(showWarning(0)); // 200 100 Предупреждение undefined, не 0 100 ...
// Решение проблемы
function show1Warning(width, height, title, contenst) {
	if (width === undefined) width = 200;
	return width;
}
console.log(show1Warning(0));  // 0 

// свойство argument.callee - ссылка на функцию в данный момент (устарело), лучше через NFE
var factArgCallee =  function(n) {
	return n == 1 ? 1 : n * arguments.callee(n-1);
}
console.log(factArgCallee(5));  // 120
// Через NFE
var factorial = function fact(n) {
	return n == 1 ? 1 : n * fact(n - 1);
}
console.log(factorial(5)); // 120

// argunents.callee.caller - хранит ссылку на функцию, которая вызвала данную
f1();
function f1() {
	console.log(arguments.callee.caller); // null, вызвали из глобального кода
	f2();
}
function f2() {
	console.log(arguments.callee.caller); // f1() {...} вызвали из f1()
	f3();
}
function f3() {
	console.log(arguments.callee.caller);  // f2() {...} вызвали из f2()
}

/* ИМЕНОВАННЫЕ АРГУМЕНТЫ (не использует arguments) - в JavaScript реализовано при помощи передачи объекта как аргумента */
function showWarning2(optins) {
	var width = optins.width || 200; // по умолчанию (рассмотрели выше)
	var height = optins.height || 100;
	// ... 
}
showWarning2({width: 500});  // вызов такой, функции просто передаем объект как аргумент

 


