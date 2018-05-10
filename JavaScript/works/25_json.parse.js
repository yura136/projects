var numbers = "[0, 1, 2, 3]";
numbers = JSON.parse(numbers);
console.log(numbers);

var user = '{"name": "Yura", "age": 28, "isAdmin": false, "friends": [0, 1, 2, 3]}'
user = JSON.parse(user);
console.log(user.friends);

// Ключ - значение, умный разбор
var str = '{"title": "Конференция", "date": "2014-11-30T12:00:00.000Z"}';

var event = JSON.parse(str, function(key, value) {
	if (key == 'date') return new Date(value);
	return value;
});
console.log(event.date.getDate()); // 30

// Для вложенных объектов
var schedule = '{\
	"events": [\
		{"title": "Конференция", "date" : "2014-11-30T12:00:00.000Z"}, \
		{"title": "Конференция", "date" : "2015-04-18T12:00:00.000Z"} \
		]\
	}';

schedule = JSON.parse(schedule, function(key, value) {
	if (key == 'date') return new Date(value);
	return value;
});

console.log(schedule.events[1].date.getDate()); // 18