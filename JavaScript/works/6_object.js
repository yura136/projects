var user = {
	name: "Вася",
	surname: "Петров"
};

user.name = "Сергей";
delete user.name;

console.log(user);

function isEmpty(obj) {
/*	for (var key in obj) {
		return false;
	}
	return true;*/
	var counter = 0;
	for (var key in obj) {
		counter++;
	}
	return !counter
}

var schedule = {};
console.log(isEmpty(schedule));

schedule["8:30"] = "подъем";
console.log(isEmpty(schedule));

var salaries = {
	"Вася": 100,
	"Петя": 300, 
	"Даша": 250
};

var sum = 0;
for (var key in salaries) {
	sum += salaries[key];
}
console.log(sum);

var max = 0;
var maxName = "";
for (var key in salaries) {
	if (salaries[key] > max) {
		max = salaries[key];
		maxName = key;
	}
}

console.log(maxName || "нет сотрудников");

function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

function multiplyNumeric(obj) {
	for (var key in obj) {
		if ( isNumeric(obj[key]) ) {
			obj[key] *= 2;
		}
	}
	return obj;
}

var menu =  {
	width: 200,
	height: 300, 
	title: "My menu"
};

console.log(multiplyNumeric(menu));