var arr = ["a", "b"];

arr.push(function(){
	console.log(this);
})

arr[2](); //  ["a", "b", ƒ]

var obj = {
	go: function() {
		console.log(this);
	}
};
(obj.go)(); // {go: ƒ}


var name = "Пустая строка";
var user = {
	name: "John",
	export: this
};
console.log(user.export.name); // Пустая строка - this к глобальному объекту

var name = "Пустая строка";
var user = {
	name: "John",
	export: function() {
		return this;
	}
};
console.log(user.export().name); // John - this контекст текущего объекта

// Калькулятор
var calculator = {
	sum: function() {
		return this.a + this.b;
	},

	mul: function() {
		return this.a * this.b;
	},

	read: function() {
		this.a = +prompt("Введите первое число ", "");
		this.b = +prompt("Введите второе число ", "");
	}
};
calculator.read();
console.log(calculator.mul());
console.log(calculator.sum());


// Цепочка вызовов
var ladder = {
	step: 0,
	up: function() {
		this.step++;
		return this;
	},
	down: function() {
		this.step--;
		return this;
	},
	showStep: function() {
		console.log(this.step);
		return this;
	}
};

ladder.up().down().up().down().up().up().up().showStep();  // 1 0 1 0 1 1 1 -> 3
