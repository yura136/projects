function pow(x, n) {

	if(n != 1) {
		return x * pow(x, n-1);
	}

	return x;
}

alert(pow(2,120));