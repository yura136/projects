// Строковые литералы, записываются с помощью двойных или одинарных кавычек
console.log("Some string");
console.log('Another string');

console.log('Some "long" string'); // Some "long" string
console.log("Some 'long' string"); // Some 'long' string

// Строка - это последовательность символов каждый из которых занимает 2 байта
// Нету типа char, для хранения одного символа, используют строку длиной в 1 символ
console.log("c");

// Длина строки, количество 2-х байтовых символов
console.log("Hello world!".length); // 12 cимволов

// Если хотим сохранить строку но записать ее столбиком
// После \ не должно быть пробела!!!
console.log("Another \
very long \
string"); // Another very long string

// Escape Sequence - управляющая последовательность

// перенос строки n - new line
console.log("Another \nvery long \nstring");
/*Another
very long 
string*/

// табуляция \t
console.log("Another \n\tvery long \n\t\tstring");
/*Another
	very long 
		string*/

// кавычки \" - экронирование \\ - обратный слеш
console.log("Some \"very long\" string"); //Some "long" string

// оператор + (конкатенация - сложение строк), если один из операндов строка
var string = "Sometimes the same is different ok";
console.log(string + "!"); // Simetimes the same is different ok!

// методы объекта string
console.log(string.charAt(0)); // возвращает символ под индексом 0 - S
console.log(string.charAt(10)); // под 10-индексом: t
console.log(string.charAt(string.length - 1)); // последний символ строки - k


// !!! C ECMAScript 5 - строки можно интерпритировать как массивы
// Можно использовать вместо метода charAt
console.log(string[10]); // возвращает символ с индексом 10 - t



// Методы с подстроками
// От символа с индексом 10 и до конца (убирает первые 10 символов строки)
console.log(string.substring(10)); // the same is different ok
console.log(string.slice(10)); // the same is different ok

// От символа с индексом 0 и до символа с индексом 4 (перые 5 символов строки)
console.log(string.substring(0,5)); // Somet
console.log(string.slice(0,5)); // Somet

// Последние 10 символов (отличие substing jт slice)
console.log(string.slice(-10)); // fferent ok
// console.log(stirng.substring(-10)); - ошибка

// Первый параметр индекс, второй протяженность подстроки
console.log(string.substr(0,7)); //Sometim - протяженность 7 символов

// Строка - это неизменяемый тип (immutable type) !!!
// Исходная строка ни как не изменяется, а возвращается новая строка
console.log(string); // Sometimes the same is different ok

// Для поиска подстроки в строке
console.log(string.indexOf("i")); // 5 - так как первая буква i - c 5-ым индексом
console.log(string.indexOf("sam")); // 14, так s - имеет индекс 14

// Поиск с конца строки
console.log(string.lastIndexOf("me")); // 16 первое "me" в слове "same", так как поиск с конца
console.log(string.indexOf("me")); // 2 первое "me" в слове "Sometimes", так как поиск с начала

// Замена подстроки в нашей исходной строке
console.log(string.replace("is", "is not")); // Sometimes the same is not different ok
// Но исходная строка не изменяется!!!
console.log(string); // Sometimes the same is different ok

/*Если я хочу изменить исходную строку, то должен сделать следующее
string = string.replace("is", "is not");
console.log(string); -  Sometimes the same is not different ok*/

//Разбиение строки на массив, метод split(разделитель)
console.log(string.split(" ")); // ["Sometimes", "the", "same", "is", "different", "ok"]

//Верхний регистр
console.log(string.toUpperCase()); // SOMETIMES THE SAME IS DIFFERENT OK

// Нижний регистр
console.log(string.toLowerCase()); // sometimes the same is different ok

