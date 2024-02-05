function reverseFunction(num) {
	let digits = Array.from(String(num), Number);
	let reversedArray = digits.reduce((acc, digit) =>
		[digit, ...acc], []);
	return parseInt(reversedArray.join(''));
}

let num = 123456789;
let reversedNum = reverseFunction(num);

console.log(reversedNum);
