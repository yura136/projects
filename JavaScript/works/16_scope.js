// Замыкание
// Сумма через замыкание
function sum(a) {
	return function(b) {
		return a + b;
	}
};

console.log(sum(5)(20));

// Строковый буфер
function makeBuffer() {
	var text = "";
	return function(piece) {
		if (arguments.length == 0) {
			return text;
		}
		text += piece;
	}
};
var buffer = makeBuffer();
buffer(30);
buffer(40);
console.log(buffer()); // 3040
