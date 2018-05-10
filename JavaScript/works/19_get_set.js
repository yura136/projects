var obj = {
	_age: 20,

	get age() {
		return this._age;
	},
	set age(_age) {
		this._age = _age;
	}
}

alert(obj.age);
obj.age = 40;
console.log(obj.age);