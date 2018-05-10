/*
	Оператор typeof возращает тип аргумента
	2 синтаксиса:
	1. typeof x
	2. typeof (x)
*/

console.log(typeof undefined); // "undefined"
console.log(typeof 0); // "number"
console.log(typeof true); // "boolean"
console.log(typeof "true"); //  "string"
console.log(typeof {}); // "object"
console.log(typeof null); // "object" (известная ошибка в языке JavaScript null == "object")
console.log(typeof function(){}); // "function"

console.log(typeof typeof undefined); // "string", так как typeof возращает строку