//! Question 1 - Design a function sum that take any number of argument and return their total. The function should work for both fixed and varible number of aruments using javascript features. The only numerical arguments will be provide

function sum(...args) {
	return args.reduce((accu, current) => {
		return accu + current;
	}, 0);
}

sum(100, 200, 300, 400);

//! Question 2 - Second largest element in string

let str = "dfa12321afd";
let numberArray = [];
let maxElem = Number.MIN_SAFE_INTEGER;
let secondMax = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < str.length; i++) {
	if (!Number.isNaN(Number(str[i]))) {
		numberArray.push(Number(str[i]));
	}
}

for (let i = 0; i < numberArray.length; i++) {
	if (numberArray[i] > maxElem) {
		secondMax = maxElem;
		maxElem = numberArray[i];
	} else if (numberArray[i] > secondMax && numberArray[i] < maxElem) {
		secondMax = numberArray[i];
	}
}

console.log(maxElem);
console.log(secondMax);

//! Question 3 - Palindrome number check

const isPalindrome = (x) => {
	if (x < 0) return false; // negative numbers are not palindromes

	let rev = 0;
	let temp = x;

	while (x !== 0) {
		let digit = x % 10;
		rev = rev * 10 + digit;
		x = Math.floor(x / 10); // integer division
	}

	return temp === rev;
};

console.log(isPalindrome(121));

// ! Question 4 - Reverse a number (Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0)

const max_value = 2 ** 31 - 1;
const min_value = -(2 ** 31);

function reverseNumber(num) {
	let rev;
	if (num < 0) {
		rev = Number("-" + String(num).split("").slice(1).reverse().join(""));
	} else {
		rev = Number(String(num).split("").reverse().join(""));
	}

	if (rev <= max_value && rev >= min_value) return rev;
	else return 0;
}

console.log(reverseNumber(-123));

//! Question 5 - Write a function that returns the number of negative numbers in an array.

function countNegatives(arr) {
	if (!Array.isArray(arr)) return false;

	let count = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			count++;
		}
	}

	return count;
}

console.log(countNegatives([1, 3, -5, null, undefined]));

// ! Question 6 - Find smallest element in the array

function findSmallest(arr) {
	if (!Array.isArray(arr)) return false;

	if (arr.length === 0) {
		return null;
	}

	let minElem = Number.MAX_SAFE_INTEGER;

	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] !== "number") return false;
		if (arr[i] < minElem) {
			minElem = arr[i];
		}
	}

	return minElem;
}

console.log(findSmallest([1, 3, 5, -1]));

// ! Question 7 - Find the largest element in the array

function findLargest(arr) {
	if (!Array.isArray(arr)) return false;
	if (arr.length === 0) {
		return null;
	}

	let maxElem = Number.MIN_SAFE_INTEGER;

	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] !== "number") return false;
		if (arr[i] > maxElem) {
			maxElem = arr[i];
		}
	}

	return maxElem;
}


console.log(findLargest([6, -32, 3]))
