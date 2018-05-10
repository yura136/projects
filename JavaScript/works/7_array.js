/*var goods = [1,3,3,4,5,6,6,100];

console.log(goods[goods.length - 1]);

goods.push("Компьютер");
console.log(goods);

var style = ["Джаз", "Блюз"];
console.log(style);
style.push("Рок-н-Ролл");
console.log(style);
style[style.length - 2] = "Классика";
console.log(style);
console.log(style[0]);
style.shift();
console.log(style);
style.unshift("Рэп", "Регги");
console.log(style);
*/
/*var i = 0;
var sum = 0;
var arr = [];

while(true) {
	var num = prompt("Введите значения");
	if (num === null || num === "" || isNaN(num) ) break;
	arr[i] = num;
	sum += +num;
	i++;
}
console.log(sum);
console.log(arr);
*/
/*var sum = 0;
var arr = [];

while(true) {
	var num = prompt("Number ", "");
	if (num === null || num === "" || isNaN(num)) break;
	arr.push(+num);
}

for (var i = 0; i < arr.length; i++) {
	sum += arr[i];
}

console.log(sum);
console.log(arr);*/


/*var arr = ["test", 2, 1.5, false];
function find(arr, value) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === value) {
			return i;
		}
		return -1;
	}
}


console.log(find(arr, "test"));
console.log(find(arr, 2));
console.log(find(arr, 1.5));
console.log(find(arr,0));

function find(arr, value) {
	if (arr.indexOf) {
		return arr.indexOf(value);
	}
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === value) {
			return i;
		}
		return -1;
	}	
}

console.log(find(arr, "test"));
console.log(find(arr, 2));
console.log(find(arr, 1.5));
console.log(find(arr,0));*/

/*Поиск элемента в массиве*/
// создаем пустой массив и проверяем поддерживается ли indexOf
if ([].indexOf) {

	var find = function (array, value) {
		return array.indexOf(value);
	}
} else {
	var find = function(array, value) {
		for (var i = 0; i < array.length; i++) {
			if (array[i] === value) return i;
		}
		return -1;
	}
}

var number = [1, 2, 3, 4, 5, 6];
console.log(find(number, 6));

/*Фильтры диапазона*/

var numeric = [];
function filterRange(arr, a, b) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] >= a && arr[i] <= b) {
			numeric.push(arr[i]);
		}	
	}
	return numeric;
}

var arr = [5, 4, 3, 8, 0, 12, 16, 18];

var filtered = filterRange(arr, 3, 5);
console.log(filtered);
console.log(arr);

/*Решето Эратосфена*/

var arr = []; // Создали пустой массив

for (var i = 2; i < 100; i++) {
	arr[i] = true;
}   // Заполнили его true

var p = 2; // Первое простое

do {
	for (i = 2 * p; i < 100; i += p) {
		arr[i] = false;
	} // false = 4, 6, 8, 10, ..., так i = i + p; 2 - это простое, true

	for (i = p + 1; i < 100; i++) {
		if (arr[i]) break; 
	} // идем с шагом 1 вправо, если true, выход из цикла, т.е первое бижайщее true

	p = i; // первое true присваиваем p
} while (p * p < 100);  // пока условие

var sum = 0;
 for (var i = 0; i < arr.length; i++) {
 	if (arr[i]) { // если true, то простое
 		sum += i;
 	}
 }


/**/
/*function getMaxSubSum (subArr) {
	var maxSum = 0;

	for (var i = 0; i < subArr.length; i++) {
		var sumFixedStart = 0;

		for (var j = i; i < subArr.length; i++) {
			sumFixedStart += arr[j];
			maxSum = Math.max(maxSum, sumFixedStart);
		}
	}
	return maxSum;
}*/

console.log(getMaxSubSum([100, -9, 101]));

function getMaxSubSum(arr) {
	var maxSum = 0, 
	partialSum = 0;
	for (var i = 0; i < arr.length; i++) {
		partialSum += arr[i];
		maxSum = Math.max(maxSum, partialSum);
		if (partialSum < 0) partialSum = 0;
	}
	return maxSum;
}

console.log(getMaxSubSum([1, 100, -102, 101, -104, 108, 108, 108, -1110000])); // 101
