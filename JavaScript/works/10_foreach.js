/* Функция callback - это просто написанная функция, которая передается как аргумент в функцию, и вызывается для каждого
элемента массива.*/


// forEach(callback(i, item, array)[, thisArg]) - только для перебора массива вместо for (ничего не возращает)

var arr = ["Яблоко", "Груша", "Апельсин"];

arr.forEach( function(item, i, arr) {
	console.log(i + ":" + item + " (массив:" + arr + ")");
});

/*0:Яблоко (массив:Яблоко,Груша,Апельсин)
1:Груша (массив:Яблоко,Груша,Апельсин)
2:Апельсин (массив:Яблоко,Груша,Апельсин)*/

// Фильтрация массива через функцию filter(callback(item, i, arr) [, thisArg]) - возращает новый массив 
//для которых callback(item, i, arr) возращает true
var arr = [1, -1, 2, -2, 3];

var positiveArr = arr.filter(function(number) {
	return number > 0;
});
console.log(positiveArr); //  [1, 2, 3] - все числа больше 0

var negativeArr = arr.filter(function(number) {
	return number < 0;
});
console.log(negativeArr); // [-1, -2]

// Трансформация массива map(callback [, thisArg]) - возращает новый массив, который состоит из результатов
// вызова функции callback для каждого элемента массива
var names = ['HTML', 'CSS', 'JavaScript'];

var nameLengths = names.map(function(name) {
	return name.length;  // возратим дли каждого элемента массива
}); 
console.log(nameLengths); // [4, 3, 10]
var nameLengtsUpdate = names.map(function(name) {
	if (name.length < 5) return "Вася";
	return "Коля";
});
console.log(nameLengtsUpdate); // ["Вася", "Вася", "Коля"]


// Проверка массива every(callback[, thisArg]) - return true, если callback true для каждого элемента
// some(...) - если для какого-нибудь
var arr = [1, 2, 3, 4, -5];
function isPositive(number) {
	return number > 0;
}

console.log(arr.every(isPositive)); // false - не все положительные (-5 < 0)
console.log(arr.some(isPositive)); // true - хоть один положительный 


// Последовательная обработка каждого элемента массива с сохранением промежуточного результата
// reduce(callback[, initialValue]) - обход слево-направо, reduceRight(...) - справо-налево
// callback(1. последний результат вызова ф-ции, 2. текущ. эл. массива, 3. номер текущ. эл., 4. массив)
// callback(previousValue, currentItem, index, arr)

// "Свертка массива" - т.е. получить допустим сумму
var arr = [1, 2, 3, 4, 5, 6, 7]
var result = arr.reduce(function(sum, current) {
	return sum + current;
}, 0); // 0 (можно было опустить) - начальное значение, суть вызовов: 0 1 3 6 10 15 21 28

var result1 = arr.reduce(function(sum, current) {
	return sum + current;
}, 3); // 3 - начальное значение, суть вызовов 3 4 6 9 13 18 24 31
console.log(result); // 28
console.log(result1); // 31


/*Задачи*/
// Переписать через map
var arr = ["Есть", "жизнь", "на", "Марсе"];
var arrLength = [];
for (var i = 0; i < arr.length; i++) {
	arrLength[i] = arr[i].length;
}
console.log(arrLength); // [4, 5, 2, 5]
// Решение
var arrLength = arr.map(function(name) {
	return name.length;
});
console.log(arrLength); // [4, 5, 2, 5]


// Частичные суммы [1, 1+2, 1+2+3, ...] - для приведенного внизу массива
var arr = [1, 2, 3, 4, 5];
function getSum(arr) {
	var result = [];

	var totalSum = arr.reduce(function(sum, item) {  // перебор слева-направо, с сохранением промеж. результата
		result.push(sum);  // здесь вначале 0, так как нет второго аргумента, за callback, если был бы 0 => [0, 1, 3, 6, 10, 15]
		return sum + item;  // для первого 0 + элемент
	});
	result.push(totalSum);

	return result;
}
console.log(getSum(arr)); // [1, 3, 6, 10, 15]
console.log(getSum([-1, -2, -5, 4])); //  [-1, -3, -8, -4]



