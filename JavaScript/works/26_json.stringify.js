var event = {
	title: "Конференция",
	date: "сегодня"
};

var str = JSON.stringify(event);
console.log(str); // json - формат: {"title":"Конференция","date":"сегодня"}

var room = {
	number: 23,
	occupy: function() {
		console.log(this.number);
	}
};

event = {
	title: "Конференция",
	date: new Date(Date.UTC(2014, 0, 1)),
	room: room
};
console.log(JSON.stringify(event)); 
// {"title":"Конференция","date":"2014-01-01T00:00:00.000Z","room":{"number":23}}

// Объект содержит ссылку на DOM
var user = {
	name: "Yura",
	age: 28, 
	window: window
};
// Втрой параметр
console.log(JSON.stringify(user, ["name"])); // {"name":"Yura"}
var str = JSON.stringify(user,function(key, value) {
	if (key == 'window') return undefined;
	return value;
});
console.log(str); // {"name":"Yura","age":28}

// Красивый вывод третий параметр
var user = {
	name: "Yura",
	age: 28,
	roles: {
		isAdmin: false,
		isEditor: true
	}
};

// 4 пробела
var str = JSON.stringify(user, "", 4);
console.log(str);
/*{
    "name": "Yura",
    "age": 28,
    "roles": {
        "isAdmin": false,
        "isEditor": true
    }
}*/
// Слово
var str = JSON.stringify(user, "", "Привет");
console.log(str);
/*{
Привет"name": "Yura",
Привет"age": 28,
Привет"roles": {
ПриветПривет"isAdmin": false,
ПриветПривет"isEditor": true
Привет}
}*/