// Создать дату 20 февраля 2012 года, 3 часа 12 минут
var d = new Date(2012, 1, 20, 3, 12);
console.log(d); // Mon Feb 20 2012 03:12:00 GMT+0300 (Саудовское время (зима))

// Напишите функцию, которая возвращает день недели для даты date.
// День нужно возвратить в европейской нумерации (понедельник 1 день)
var date = new Date(2012, 0, 3); // 3 янв. 2012
console.log(date); // Tue Jan 03 2012 00:00:00 GMT+0300 (Саудовское время (зима))
console.log(date.getDate()); // 3
function getLocalDate(d) {
	var day = date.getDay();

	if(day == 0) { // день 0 становиться 7 (воскресенье)
		day = 7;
	}
	return day;
}
console.log(getLocalDate(date)); // 2


// Функция возращает число, которое было days дней назад от даты date
var date = new Date(2015, 0, 2); // 2 января 2015
function getDateAgo(date, days) {
	var dateCopy = new Date(date);

	dateCopy.setDate(date.getDate() - days);
	return dateCopy.getDate();
}
console.log(getDateAgo(date, 10)); // 23 23 декабря (2 января - 10 дней)

// Последний день месяца
function getLastDayOfMonth(year, month) {
	var date = new Date(year, month + 1, 0); // 0 так как день предыдущий
	return date.getDate();
}
console.log(getLastDayOfMonth(2012, 5)); // 30 в июне 30 дней

// Сколько секунд уже прошло сегодня?
function getSecondsToday() {
	var now = new Date();

	// создать объект из текущей даты, без часов-минут-секунд
	var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

	var diff = now - today; // разница в миллисекундах
	return Math.round(diff/1000); // перевести в секунды
}
console.log(getSecondsToday()); // 73665