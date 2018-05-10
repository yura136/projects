// Односвязный список - структура данных, которая состоит из элементов хранящих ссылку на следующий.
// Послединй не хранит ссылки либо она равна null
var list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next : null
			}
		}
	}
}

// или
var list = {value: 1};
list.next = {value: 2};
list.next.next = {value: 3};
list.next.next.next = {value: 4};

// Выводит элементы списка по очереди, при помощи цикла
function printList(list) {
	var tmp = list; // временная переменная tmp для обхода по списку, для того чтобы делать по списку что-то еще (расширить код)

	while (tmp) {
		console.log(tmp.value);  // достаем значение, текущее
		tmp = tmp.next;  // чтобы достать следующее вложенное свойство
	}
}
printList(list); // 1, 2, 3, 4

// Обратный через цикл
function printListReverse(list) {
	var arr = [];
	var tmp = list;

	while(tmp) {
		arr.push(tmp.value); // добавляем в конце массива
		tmp = tmp.next; 
	}

	for (var i = arr.length - 1; i >= 0; i--) {  // Перебор в обратном порядке, с конца
		console.log(arr[i]);
	}
}
printListReverse(list); // 4, 3, 2, 1


// Через рекурсию: вывести текущее, а затем запустить следующее
function printListRecourse(list) {
	console.log(list.value);  // текущее значение

	if (list.next) {  // если следующее существует
		printListRecourse(list.next)  // то выводим следующее, и. т. д.
	}
}
printListRecourse(list); // 1, 2, 3, 4

// Обратный вывод через рекурсию: сначала обрабатываем следущее значение, а потом текущее
function printListReverseRecourse(list) {
	if (list.next) {
		printListReverseRecourse(list.next);
	}

	console.log(list.value); 
}
printListReverseRecourse(list); // 4, 3, 2, 1


// Отфильтровать анаграммы
// Анаграммы - слова, состоящие из одинакового количества букв но в разном порядке
var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"]
function aclean(arr) {
	var obj = {};  // используем для уникальности

	for (var i = 0; i < arr.length; i++) {
		//var sorted = arr[i].toLowerCase().split("").sort().join("");
		var sorted = arr[i] // ЗОВ или воз, зов, взо, озв, ОЗВ, .... все дадут на выходе "взо", так как sort()
			.toLowerCase()  // зов
			.split("") // ["з", "о", "в"]
			.sort() // ["в", "з", "о"]
			.join(""); // взо

			obj[sorted] = arr[i]; // нашему объекту, сохраняме одно значение с таким ключом
			// obj["взо"] = "воз", obj["взо"] = "ЗОВ", только одно запишется
	}

// Из объекта перебором запишем в массив
	var result = []; // создали пустой массив
	for (var key in obj) {   // перебираем объект по свойствам
		result.push(obj[key]);  // добавляем в массив (в конец)
	}

	return result;  // возращаем массив
}

console.log(arr); // ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"]
console.log(aclean(arr)); // ["ЗОВ", "гробик", "сектор"]

// Оставить уникальные элементы массива
var strings = ["кришна", "кришна", "харе", "кришна", "харе"];
function unique(arr) {
	var result = [];

	nextInput:
		for (var i = 0; i < arr.length; i++) {
			var str = arr[i]; // Присваиваем строке элементы массива

			// Цикл для отсева одинаковых имен
			for (var j = 0; j < result.length; j++) {
				if (result[j] == str) continue nextInput;  // если сторока такая же выходим из итерации
			}
			result.push(str); // добавляме в массив
		}
	return result;	
}
console.log(unique(strings)); // ["кришна", "харе"]


// через объект (более быстрое)
function unique(arr) {
	var obj = {};

	for (var i = 0; i < arr.length; i++) {
		var str = arr[i];
		obj[str] = true; // запомнить строку в виде свйоства объекта
	}
	return Object.keys(obj);  // ключи объекта
}
console.log(unique(strings)); // ["кришна", "харе"]

var obj1 = {name: "Yura", 
			age: 32};
