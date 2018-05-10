// Способы создания объекта типа Date()

// Текущая дата и время
var now = new Date();
console.log(now); // Sun Mar 18 2018 14:13:00 GMT+0300 (Саудовское время (зима))

// Количество милисекунд с 1 января 1970 года GMT+0 (у нас стоит GMT+03)
var Jan02_1970 = new Date(3600 * 24 * 1000); // 24 часа после 
console.log(Jan02_1970); // Fri Jan 02 1970 03:00:00 GMT+0300 (Саудовское время (зима))

// Компоненты местной зоны (обязательны 2 первых параметра) (отсчет месяцев с 0!!!)
// Date(year, month, date, hours, minute, second, ms)
console.log(new Date(2011, 0, 1, 0, 0, 0, 0)); // Sat Jan 01 2011 00:00:00 GMT+0300 (Саудовское время (зима))
// Или тоже самое сокращено, так как остальные по умолчанию
console.log(new Date(2011, 0)); // Sat Jan 01 2011 00:00:00 GMT+0300 (Саудовское время (зима))
console.log(new Date(1989, 4, 10, 3, 40, 29, 569)); // Wed May 10 1989 03:40:29 GMT+0300 (Саудовское время (зима))


var dateD = new Date("2018");
console.log(dateD); // Mon Jan 01 2018 03:00:00 GMT+0300 (Саудовское время (зима))

// Получение компонентов даты
var meDateNow = new Date();
console.log(meDateNow.getFullYear());  // 2018
console.log(meDateNow.getMonth()); // 2
console.log(meDateNow.getSeconds()); // 44

// Сдвинем на UTF +0
console.log(meDateNow.getUTCHours()); // 11
// Мой UTF указанный в ОС (UTF +03)
console.log(meDateNow.getHours()); // 14
console.log(meDateNow.getTime()); // число милисекунд с 1970  1521477275597
console.log(new Date().getTimezoneOffset()); // разница в поясах (минуты) -180

/*УСТАНОВАКА КОМПОНЕНТОВ ДАТЫ*/

var today = new Date;
today.setHours(0);
console.log(today); // Mon Mar 19 2018 00:38:00 GMT+0300 (Саудовское время (зима))

today.setHours(0, 0, 0, 0); 
console.log(today); // Mon Mar 19 2018 00:00:00 GMT+0300 (Саудовское время (зима))

/*Автоисправление даты*/

var d = new Date(2013, 0, 32); // не 32-ое января, а 1-ое февраля
console.log(d); // Fri Feb 01 2013 00:00:00 GMT+0300 (Саудовское время (зима)

var d = new Date(2011, 1, 28); // 28-е февраля
d.setDate(d.getDate() + 2); // 28-е февраля + 2 дня
console.log(d); // Wed Mar 02 2011 00:00:00 GMT+0300 (Саудовское время (зима))

var d = new Date();
d.setSeconds(d.getSeconds() + 70); // на 70 секунда больше
console.log(d); // 

console.log(+new Date);  // 1521477835415, кол-во мс с 1970
console.log(+d.valueOf()); //1521477943630 


/*Бенчмаркинг*/

var arr = [];
for (var i = 0; i < 1000; i++) arr[i] = 0; // заполнили массив

function walkIn(arr) {
	for (var key in arr) arr[i]++;  
}

function walkLenght(arr) {
	for (var i = 0; i < arr.length; i++) {
		arr[i]++;
	}
}

function bench(f) {
	var date = new Date();
	for (var i = 0; i < 10000; i++) {
		f(arr);
	}
	return new Date() - date;
}
console.log("Время walkIn: " + bench(walkIn) + " ms"); // Время walkIn: 1706 ms
console.log("Время walkLenght: " + bench(walkLenght) + " ms"); // Время walkLenght: 69 ms

/* Форматирование дат */
// Вывод с локализацией
var date = new Date(2014, 11, 31, 12, 30, 0);
var options = {
	era: "long", 
	year: "numeric"
};
console.log(date.toLocaleString("ru", options)); // 2014 г. от Рождества Христова
console.log(date.toLocaleString("en-US", options)); // 2014 Anno Domini

// Вывод без локализации
var d = new Date();
console.log(d.toString()); // Mon Mar 19 2018 19:59:47 GMT+0300 (Саудовское время (зима))
console.log(d.toISOString()); // 2018-03-19T17:00:34.846Z
console.log(d.toUTCString()); // Mon, 19 Mar 2018 17:00:59 GMT


/* Разбор стороки*/
var msUTC = Date.parse('2012-01-26T13:51:50.417Z');
console.log(msUTC); // 1327585910417 - число милисекунд, которое соответствует строке

// С тайм зоной -07:00 GMT:
var msUTC = Date.parse('2012-01-26T13:51:50.417-07:00');
console.log(msUTC); // 1327611110417 - число милисекунд, которое соответствует строке
