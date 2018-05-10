/*Из строки в массив split()*/
/*var names = "Маша, Коля, Витя, Сергей, Максим, Кирилл";
var arr = names.split(", "); // в скобках разделитель (сепаратор) - 1 аргумент
console.log(arr); //  ["Маша", "Коля", "Витя", "Сергей", "Максим", "Кирилл"]
arr = names.split(", ", 3); 
console.log(arr); // ["Маша", "Коля", "Витя"]

var str = "Test unit"; 
console.log(str.split("")); // ["T", "e", "s", "t", " ", "u", "n", "i", "t"] - по буквам, если передать пустую строку
console.log(str.split()); //["Test unit"]
console.log(str.split("$$$")); // ["Test unit"]
console.log(str.split(" ")); //["Test", "unit"]*/

/*Из массива в строку join()*/
/*var arr = ["John", "Victor", "Bill"];
var str = arr.join(";"); // разделитель, как аргумент
console.log(str); // John;Victor;Bill
console.log(arr.join()); // John,Victor,Bill
console.log(arr.join("&&&")); // John&&&Victor&&&Bill

// Повтор строки
console.log(new Array(4).join("ля")); // ляляля, так как 4 пустых и 3 разделителя
console.log(new Array(4)); // [empty × 4]*/

/*Удаление из массива*/
/*var arr = ["One", "Two", "Three", "Four", "Five"];
delete arr[1]; // Так плохо, потому что элемент не удаляется, а вместо него undefined
console.log(arr); // ["One", empty, "Three", "Four", "Five"]
console.log(arr[1]); // undefined
 
// Из начала массива shift()
arr.shift();
console.log(arr); //  [empty, "Three", "Four", "Five"]

// Из конца массива pop()
arr.pop();
console.log(arr); // [empty, "Three", "Four"]

// Из середина массива, splice() - также можно вставлять на место удаленных
var arr = ["Я", "изучаю", "JavaScript"];
arr.splice(1, 1); //  с 1-ой позиции удалить 1 элемент
console.log(arr); //  ["Я", "JavaScript"]

var arr = ["Я", "сейчас", "изучаю", "JavaScript"];
arr.splice(0, 3, "Мы", "изучаем"); // с 0 позиции удалили 3 элемента, а 2 вставили
console.log(arr); // ["Мы", "изучаем", "JavaScript"]

var arr = ["One", "Two", "Three", "Four", "Five", "Six"];
var removed = arr.splice(2, 2); // splice возращает массив удаленных элементов
console.log(removed); //["Three", "Four"]

//Вставляем без удаления
var arr = ["Я", "изучаю", "JavaScript"];
arr.splice(2, 0, "сложный", "язык"); 
console.log(arr); //["Я", "изучаю", "сложный", "язык", "JavaScript"]


//Вставка с конца, через отрицательное число
arr.splice(-1, 0, "привет")
console.log(arr); // ["Я", "изучаю", "сложный", "язык", "привет", "JavaScript"]
*/

var arr = ["John", "Victor", "Maksim", "Igor", "Yura"];
var arrSlice = arr.slice(1, 3);
console.log(arr.slice()); // ["John", "Victor", "Maksim", "Igor", "Yura"]
console.log(arrSlice); // ["Victor", "Maksim"]
console.log(arr); // не изменился ["John", "Victor", "Maksim", "Igor", "Yura"]

//Сортировка массива

var arr = [1, 2, 15];
arr.sort();
console.log(arr); //   [1, 15, 2] "15" < "2"
// Функция сортировки для массива, сравнения как числа
function compareNumeric(a, b) {
	if (a > b) return 1;
	if (a < b) return -1;
}

function compareNumeric(a, b) {
	return a - b;
}
arr.sort(compareNumeric); // не указывать скобки ()

console.log(arr); //  [1, 2, 15]
[1, -2, 15, 2 ,0, 8].sort(function(a,b) {
	console.log(a + "<>" + b);
});

// Порядок на обратный
console.log([1, 2, 3, 4, 5].reverse()); // [5, 4, 3, 2, 1]

// Копирование элементов
console.log([1, 2, 3].concat(4, [5, 6])); //[1, 2, 3, 4, 5, 6]

// Поиск элемента в массиве
console.log([1, 2, 3, 4, "Yura"].indexOf("Yura")); // 4 - индекс
console.log([1, 2, 3, 4, 5, 6].indexOf(3, 4)); // -1, так как мы указали 4 (с этого индекса ищет 3)
console.log([1, 2, 3, 4, 5, 6].lastIndexOf(5)); // 4, но ищет справо - налево
console.log([1, 2, 3, 4, 5, 6].lastIndexOf(3, 4)); // 2, найдет так справо - налево

// Объект в виде массива
var user = {
	name: "Yura", 
	age: 29
};
var keys = Object.keys(user);
console.log(user); // {name: "Yura", age: 29}


/*Задачи*/
// Добавить класс в строкуъ

function addClass(obj, cls) {
	var classes = obj.className ? obj.className.split(" ") : []; // из строки в массив "open menu" => ["open", "menu"]

	for (var i = 0; i < classes.length; i++) {
		if (classes[i] == cls) return; // класс уже есть
	}

	classes.push(cls); // добавить

	obj.className = classes.join(" ");  // из массива в строку ["open", "menu"] => "open menu"
}

var object = {
	className: "open menu"
}
 addClass(object, "new");
 addClass(object, "open");
 addClass(object, "me");
console.log(object.className); // open menu new me


// Перевести текст вида border-left-width => borderLeftWidth
function camelize(str) {
	var arr = str.split("-"); // -webkit-border-left => ["webkit", "border", "left"] "-" разделитель

	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	}

	return arr.join(""); // ["1", "2", "3"] => "123"
}

console.log(camelize("-webkit-transiton")); // WebkitTransiton

// Удаление класса если он есть
function removeClass(obj, cls) {
	var classes = obj.className.split(" ");   // "all in out" => ["all", "in", "out"]

	for (var i = 0; i < classes.length; i++) {
		if (classes[i] == cls) {
			classes.splice(i, 1); // удалить класс номер позиции (i), количество 1 элемент
			i--; // так как удалили (элементы сместились), чтобы заново проверила элемент с номером i
		}
	}
	obj.className = classes.join(" "); // ["all", "in", "out"] => "all in out"
}

var obj = {
	className: "open menu menu"
}
removeClass(obj, "blabla");
removeClass(obj, "menu"); //  menu menu удалило
console.log(obj.className); // open

// Фильтрация массива "на месте"
function filterRangeInPlace(arr, a, b) {

	for (var i = 0; i < arr.length; i++) {
		var val = arr[i];
		if (val < a || val > b) {
			arr.splice(i--, 1); // удаляем текущий элемент, i-- возращает текущий, дикремент как удалили и элементы сместились, 
			// чтобы заново его проверило
		}
	}
}

var arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // удалило  все число вне диапазона [1...4]
console.log(arr); // [3, 1]

//Сортировка во обратоном порядке
function reverseSort(arr) {
	var empty = [];
	var k = 0;
	for (var i = arr.length - 1; i >= 0; i--) {
		empty[k] = arr[i];  // первому элементу, последний массива
		k++;
	}
	return empty;
}
var arr = [1 ,2 ,3, 4, 5, 6, 7]; //  [7, 6, 5, 4, 3, 2, 1]
console.log(reverseSort(arr));

// сортировка массива
var arr = ["HTMl", "JavaScript", "CSS"];

var arrSorted = arr.slice().reverse(); // мы сделали копию и реверс
console.log(arrSorted); // ["HTMl", "JavaScript", "CSS"]
console.log(arr); // ["CSS", "JavaScript", "HTMl"]


// случайный порядок в массиве

var arr = [1, 2, 3, 4, 5, 6];
function compareRandom(a, b){
	return Math.random() - 0.5; // random => 0...1  random -0.5 => -0.5 ... 0.5
}
arr.sort(compareRandom);
console.log(arr); //[3, 4, 2, 1, 5, 6]


// Сортировка объектов
var vasya = {name: "Vasya", age: 23};
var masha = {name: "Masha", age: 18};
var vovochka = {name: "Vovochka", age: 6};
 
var people = [vasya, masha, vovochka]; // массив и объектов

function compareAge(personA, personB) {  // наша функция сравнения
	return personA.age - personB.age;
}
people.sort(compareAge);
for (var i = 0; i < people.length; i++) {
	console.log(people[i].name); // выведет имена Vovochka(6), Masha(18), Vasya(23)

