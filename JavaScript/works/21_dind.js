function bind(func, context) {
	return function() {
		return func.apply(context, arguments);
	};
}


var user = {
	firstName: "Вася",
	sayHi: function(who) {
		console.log(this.firstName + who);
	}
}

var sayHi = bind(user.sayHi, user);

sayHi("Коля");
sayHi("Витя");


function mul(a, b) {
	return a * b;
};

var double = mul.bind(null, 2);

console.log( double(5) );

function ask(question, answer, ok, fail) {
	var result = prompt(question, '');
	if (result.toLowerCase() == answer.toLowerCase()) ok();
	else fail();
}

ask("Выпусить птичку?", "да", fly, die);

function fly() {
	console.log("Улетела");
}
function die() {
	console.log("Птичку жалко :(");
}
