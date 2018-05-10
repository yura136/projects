/* Свойства акссесоры появились с EcmaScript5 */

// Свойства с данными (объект через литерал)
var person = {
	name: "Yura", 
	age: "28"
};

//Обращаемся к свойству
console.log(person.name); // Yura

// Изменяем свойство
person.name = "Denis";
console.log(person.name); // Denis

/* 
	Для акссесора в литерале есть специальный синтаксис (пара функций):
	get() - геттер (при обращение к свойству person.age, будет вызываться функция get)
	set() - сеттер (при изменение значения свойства person.age = 30, будет вызываться функция set)

	Геттер что-то возращает
	Сеттер что-то принимает и меняет
*/
var personAccess = {
	name: "Yura",
	_age: 28,  // Так как не может иметь то же имя, что и акссесор
	// Акссесоры
	get age(){   
		return this._age;
	},
	set age(value){
		this._age = value; // this указывает на personAccess
		// С проверкой данным
	},
	get height() {
		console.log("Hello from getter!");
	}
};

// Обращение к свойству объекта через get()
console.log(personAccess.age);  // 28
console.log(personAccess.;
console.log(personAccess.age); // 30
personAccess.height; // Hello from getter!