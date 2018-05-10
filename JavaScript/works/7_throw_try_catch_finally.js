// синтаксис: throw выражение (выражение любое)

/*!!! Когда интерпретатор видит инстуркцию throw, он будет искать ближайший обработчик ( блок catch) для нее в стеке вызовов.
	Если блока catch нигде нету, то выполнение скрипта прекращается.
	Uncaught - не поймано исключение, т.е. нету обработчика (блок catch в стеке вызовов)*/

// 10 = "string"; - реакция интерпретатора Uncaught ReferenceError: Invalid left-hand side in assignment
// ReferenceError - это один из дочерних объектов Error

/* Для всех типов ошибок существует свой конструктор - SyntaxError, ReferenceError, ... */

// Все эти объекты мы можем создавать вручную
var myError = new Error("My Error Message"); // создаем объект, через конструктор Error
console.log(myError.message); // Получим сообщение, через свойства объекта myError - My Error Message
console.log(myError.name);  // Error - повторяет имя конструктора

// throw myError; - Uncaught Error: My Error Message - выброс ошибки, можно где-то ловить ее дальше в коде

var calculate = function(n){
	if (n > 10) throw new Error("n should be less than 10"); // Если n больше 10 мы кидаем исключение
	return n + 10;
};

//calculate(20); // Uncaught Error: n should be less than 10

// Обработка исключений 

/* 	Блоки catch и finally, могут отсутствовать, но не оба одновременно
	В блок try инструкции, которые могут вбросить исключение
	В блоке catch мы ловим эти исключения, т.е. туда мы помещаем инструкции, которые будут выполняться в том случае, 
если в блоке try произошло какое-то исключение. При этом в него передается выражение, которое было в инструкции throw,
и для него в () можно прописать любое имя (обычно e - сокращенно от error).
	В блоке finally, мы помещаем инструкции, которые будут выполняться в не зависимости от того, произошли какие либо 
исключения или нет.

try {
	инструкции
} catch (идентификатор) {
	инструкции
} finally {
	инструкции
}
*/

try {
	calculate(20);  // Uncaught Error: n should be less than 10
} catch(e) {
	console.log("Can't execute calculate " + e.message); // Обработка ошибки, и при это программа выполняется дальше
} 