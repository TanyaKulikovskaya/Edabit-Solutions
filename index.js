'use strict';

/* Create a function that takes a country's name and its area as arguments and
returns the area of the country's proportion of the total world's landmass. */

function areaOfCountry(name, area) {
	let percentage = (area/1489400).toFixed(2);
	return `${name} is ${percentage}% of the total world's landmass`;
};

/* Create a function that takes an array of numbers arr, 
a string str and return an array of numbers as per the following rules:

"Asc" returns a sorted array in ascending order.
"Des" returns a sorted array in descending order.
"None" returns an array without any modification. */

function ascDesNone(arr, str) {
	if(str === 'Asc') return arr.sort((a, b) => a - b);
	if(str === 'Des') return arr.sort((a, b) => b - a);
	if(str === 'None')return arr;
};

/* Create a function that takes two numbers as arguments (num, length) 
and returns an array of multiples of num until the array length reaches length. */

function arrayOfMultiples (num, length) {
	let arr = [];
	for (i = 1; i <= length; i++) {
		arr.push(num * i);
	}
	return arr;
};

/* Create a function that takes an array of objects (groceries)
which calculates the total price and returns it as a number.
A grocery object has a product, a quantity and a price */

function getTotalPrice(groceries) {
	let total = [];
	for(grocery of groceries) {
		total.push(grocery.price * 100  * grocery.quantity);
	};
	let totalPrice = total.reduce(function(acc, item) {
		return acc + item}, 0);
	return totalPrice/100;
};

/* Americans are odd people: in their buildings, the first floor is actually the ground floor and 
there is no 13th floor (due to superstition). Write a function that given a floor in the american system
returns the floor in the european system. With the 1st floor being replaced by the ground floor and
the 13th floor being removed, the numbers move down to take their place. 
In case of above 13, they move down by two because there are two omitted numbers below them.
Basements (negatives) stay the same as the universal level. */

function getRealFloor(n) {
	let result;
	if(n <= 0) result = n;
	if(n > 0 && n <= 12) result = n - 1;
	if(n >= 14) result = n - 2;
	return result;
  }

/* Given an array of integers as strings and numbers,
return the sum of the array values as if all were numbers.
Return your answer as a number. */

function sumMix(x){
	return x.reduce((sum, current) => Number(sum) + Number(current));
}

/* How many bottles of duty free whiskey you would have to buy
such that the saving over the normal high street price would
effectively cover the cost of your holiday.
You will be given the high street price (normPrice),
the duty free discount (discount) and the cost of the holiday. */

function dutyFree(normPrice, discount, hol) {
	return Math.floor(hol/(normPrice*discount/100));
}

/* Write a method alternate_sq_sum() (JS: alternateSqSum )
that takes an array of integers as input and finds the sum
of squares of the elements at even positions (i.e., 2nd, 4th, etc.)
plus the sum of the rest of the elements at odd position. */

function alternateSqSum(arr){
	if (arr.length === 0) return 0;
	return arr.map((item, index) => {
	  return (index == 0 || index % 2 == 0 ) ? item : item**2;
	}).reduce((sum, item) => sum + item);
}; 

/* There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between
left side letters and right side letters was too high and the war began.
Write a function that accepts fight string consists of only
small letters and return who wins the fight. */

function alphabetWar(fight) {
	let leftSide = new Map ([
	  ['w', 4],
	  ['p', 3],
	  ['b', 2],
	  ['s', 1]
	]);
	  let rightSide = new Map ([
	  ['m', 4],
	  ['q', 3],
	  ['d', 2],
	  ['z', 1]
	]);
	let leftValues = [];
	let rightValues = [];

	for(let ch of fight) {
	  if(leftSide.has(ch)) leftValues.push(leftSide.get(ch));
	  else if(rightSide.has(ch)) rightValues.push(rightSide.get(ch));
	};

	let sumleftValues = getSum(leftValues);
	let sumrightValues = getSum(rightValues);
    
	if(sumleftValues > sumrightValues) return "Left side wins!";
	else if(sumleftValues < sumrightValues) return "Right side wins!";
	return "Let's fight again!";
};

function getSum(arr) {
	return arr.reduce((sum, item) => sum + item);
}

 // Your goal is to return multiplication table for number that is always an integer from 1 to 10.

function multiTable(number) {
	let arrOfRow = [];
	for(let i = 1; i <= 10; i++) {
	  arrOfRow.push(`${i} * ${number} = ${i * number}`)
	}
	return arrOfRow.join('\n');
}

/* Given an input of an array of digits, return the array with each digit incremented by its position in the array: 
the first digit will be incremented by 1, the second digit by 2, etc.
Your result can only contain single digit numbers,
so if adding a digit with its position gives you a multiple-digit number, only the last digit of the number should be returned. */

const incrementer = (nums) => { 
	let result = [];
	for (let i = 0; i < nums.length; i++) {
	  let current = ((nums[i] + i + 1) + '').slice(-1);
	  result.push(+current);
	}
	return result;
  }