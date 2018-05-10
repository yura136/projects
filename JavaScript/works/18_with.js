

var obj = {
	a: 10
}

with(obj) {
	a = 20;
}
alert(obj.a);

