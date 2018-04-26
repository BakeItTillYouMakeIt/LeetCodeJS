var isPalindrome = function (x) {
	if (x < 0 || (x % 10 == 0 && x != 0)) {
		return false;
	}

	let revertedNumber = 0;
	while (x > revertedNumber) {
		revertedNumber = revertedNumber * 10 + x % 10;
		x = Math.floor(x/10);
	}

	return (x == revertedNumber) || (x == Math.floor(revertedNumber / 10));
};
