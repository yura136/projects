// Функции - это объект в JavaScript !!!

// Объявление функции: fuction иденификатор (аргументы) {инструкции}

// Инструкция объявление функции - function declaration statement
function greet(name) {
	console.log(arguments); // Объект arguments ведет себя как массив в консоль как массив, для отображения всех аргументов
	// arguments[1] - ко второму аргументу
	return "Hello " + name;
	// полезное свойство - длина: arguments.length, можно перебрать все переданные аргументы в цикле
}

// Так как функция greet возращает строку, то можно вызывать методы объекта String
console.log(greet("Yura").toUpperCase()); // HELLO YURA
console.log(greet("Yura", "Vladimir", "Pit").toUpperCase()); // HELLO YURA
// Всем неинициализированным аргументам присваивается значения undefined
console.log(greet().toUpperCase()); // HELLO UNDIFINED

// Так как функция это объект, то можно передавать функции в качестве аргументов, а также возращать функции и функций

// Передача функции в качестве аргумента, может использоваться для реализации callback
// callback - для передачи функции, которая будет выполнена после выполнения функции в которую она передается
// Выражения определения функции - function definition expression
var func = function(callback) {
	var name = "Yura";
	callback(name);
};

func(function(n) {
	console.log("Hello " + n);
}); // Hello Yura

// Функция как возращаемое значение
var func1 = function() {
	return function() {
		console.log("Hi");
	}
};

// Когда мы вызываем это функци () в точку вызова возвращается анонимная функция, () - результат консоли
func1()(); // вторые скобки вызывают функцию

// Функция, которая вызывается сразу после определения называется АНОНИМНОЙ САЗОВЫЗЫВАЮЩЕЙСЯ ФУНКЦИЕЙ - self-invoking anonymous function
// Функция может быть вызвана сразу после определения, в том случае если мы используем выражения определения
// Мы присваиваем переменной greeting значение функции, для большей ясности значения вызова берется в круглые скобки
var greeting = (function(name, myName) {
	return "Hellо " + name + " " + myName;
}("Andrej", "Yura")); // вторые скобки выражение вызова функции

console.log(greeting); // Hello Andrej Yura

/*// Выражения определения функции - function definition expression, можно опускать имя функции - анонимная функция
var greet = function(name) {
	return "Hello " + name;
}; // Нужно ставить точку с запятой
function("Yura");
console.log(greet);*/