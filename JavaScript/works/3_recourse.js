function sumToUseIteration(n) {
	var result = 0;
	for (var i = 1; i <= n; i++) {
		result += i;
	}

	return result;
}

console.log(sumToUseIteration(100));

function sumToUseRecourse(n) {
	if (n > 1) {
		return sumToUseRecourse(n-1) + n;
	}

	return 1;
}

console.log(sumToUseRecourse(1000));

function sumToUseFormula(n) {
	return (1 + n) * n / 2;
}

console.log(sumToUseFormula(100));


/*Факторил числа*/
function factorialUseRecourse(n) {
	return (n) ? n * factorialUseRecourse(n-1) : 1;
}

console.log(factorialUseRecourse(10));

function factorialUseItaration(n) {
	var result = 1;
	if (n) {
		for (var i = 1; i <= n; i++) {
		result *= i;
		}
	} else {
		return 1;
	}
	return result;
}

console.log(factorialUseItaration(10));

/*Числа Фибоначчи*/
function fib(n) {
	var a = 1;
	var b = 1;
	for (var i = 2; i < n; i++) {
		c = a + b;
		a = b;
		b = c; 
	}
	return c;
}

console.log(fib(7));

function fibRec(n) {
	return (n >= 2) ? fibRec(n - 1) + fibRec(n - 2) : n;
}

console.log(fibRec(2));