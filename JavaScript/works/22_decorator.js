function f(x) {}

var timers = {};

f = timingDecorator(f, "myFunc");

f(1);
f(2);
f(3);

console.log(timers.myFunc);

var timers = {};
function timingDecorator(f, timer) {
	return function() {
		var start = performance.now();

		var result = f.apply(this, arguments);

		if (!timers[timer]) timers[timer] = 0;
		timers[timer] += performance.now() - start;

		return result;
	}
}

function fibonacci(n) {
	return (n > 2) ? fibonacci(n - 1) + fibonacci(n - 2) : 1;
}

fibonacci = timingDecorator(fibonacci, "fibo");

console.log(fibonacci(10));
console.log(fibonacci(20));

console.log(timers.fibo + "мс");