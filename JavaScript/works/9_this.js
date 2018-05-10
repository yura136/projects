// У нас есть объект "person" у него есть имя, и метод который вернет строку с приветствием
var person = {
	name: "Yura",
	greet: function(){   // Метод
		// работает хорошо, но это только одно свойсто объекта
		// Если брать много свойств объекта, и название объекта изменится, то придется менять это название везде - это плохо!
		return "Hello! My name is " + person.name; 
	}
};

console.log(person.greet()); // Hello! My name is Yura

/* Решение ключевое слово this - заменяет название объекта
this - обращение к текущему объекту, внутри которого я определяю метод */

var otherPerson = {
	name: "Yura",
	age: "29",
	height: "181",
	weight: "78",
	otherGreet: function(){  // Метод
		return "Hi! My name is " + this.name + ". I am " + this.age;
	}
};

console.log(otherPerson.otherGreet()); // Hi! My name is Yura. I am 29

// Так как функция в JavaScript является объектом, то можно сделать так
var greet1 = function(){
	return "Hi! My name is " + this.name; // this указывает на обьект, где есть ссылки (person1, anotherPerson1)
};

// Если функция принимает аргументы
var greetArg = function(greeting){
	return greeting + "! My name is " + this.name;
};

var person1 = {
	name: "John",
	greet1: greet1, // Ссылка на объект (метод) greet1
	anotherGreet: greetArg // Ссылка на объект (метод) greetArg
	// link: greet1 - наш метод (объект)
};

var anotherPerson1 = {
	name: "Bob",
	greet1: greet1, // Ссылка на объект (метод) greet1
	anotherGreet: greetArg // Ссылка на объект (метод) greetArg
	// link: greet1 - наш метод (объект)
};

console.log(person1.greet1()); // Hi! My name is John
//console.log(person1.link());  // Hi! My name is John
console.log(anotherPerson1.greet1()); // Hi! My name is Bob  здесь this в методе greet1 указывает на onotherPerson1

/* МЕТОДЫ call() и apply() для смены указателя this*/

console.log(anotherPerson1.greet1.call(person1)); // Hi! My name is John, здесь this в методе greet1 указывает на person1
 
 /* Вызовем у объекта "person1" свойство (метод) "anotherGreet" (указывает на метод "greetArg", где "this" указывает на "person1" ), 
 у "anotherGreet" вызовем метод call, куда передадим первым аргументом имя нового объекта "anotherPerson1", т.е. this уже указывает 
 не на "person1", а на "anotherPerson1", т.к. у "anotherPerson1", тоже есть ссылка на метод "greetArg". Второй арумент это любая строкаю
 мы поменяем, чтобы ключево слова 
 */
console.log(person1.anotherGreet.call(anotherPerson1, "Hello friend")); // Hello friend! My name is Bob, а не John, здесь this указывает на anotherPerson1

// МЕТОД apply(), то же самое, что и call(), только аргументы передаются массивом
console.log(person1.anotherGreet.apply(anotherPerson1, ["Hello friend"])); // Hello friend! My name is Bob

/* МЕТОД bind() похож на call(), apply(), но в отличие от них он не вызывает функцию, а просто связывает ее с каким-то объектом*/
var bound = greetArg.bind(anotherPerson1); //this указывает на anotherPerson1
console.log(bound("Hello there")); // Hello there! My name is Bob


/* Вызов глобального объекта через this. Так как мы запускаем это в браузере, то глобальный объекта - это 
object Window */

var func = function() {
	return "Hi! My name is " + this;
};

console.log(func()); // Hi! My name is [object Window]

// this указывает на глобальный объект вне всяких функций
console.log(this); // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}