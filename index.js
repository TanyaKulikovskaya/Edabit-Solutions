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

/* Write a generic function chainer that takes a starting value, and an array of functions to execute on it.
The input for each function is the output of the previous function (except the first function, which takes the starting value as its input).
Return the final value after execution is complete. */

const chain = (input, fs) => {fs.reduce((acc, fn) => fn(acc), input)}

/* Return the number (count) of vowels in the given string.*/

const getCount = (str) => {
	let vowelsCount = 0;
	let vowels = ['a', 'e', 'i', 'o', 'u'];
	for (let char of str) {
	  if(vowels.includes(char)) vowelsCount++
	}
	return vowelsCount;
}

/* Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals,
saying each of the following phrases each time a petal was torn:
    I love you
    a little
    a lot
    passionately
    madly
    not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0. */

const howMuchILoveYou = (nbPetals) => {
    // your code
  const glossary =  ["not at all", "I love you", "a little", "a lot", "passionately", "madly"];
  return glossary[nbPetals % 6]
}

/* The Western Suburbs Croquet Club has two categories of membership, Senior and Open.
They would like your help with an application form that will tell prospective members which category they will be placed.
To be a senior, a member must be at least 55 years old and have a handicap greater than 7.
Input will consist of a list of pairs. Each pair contains information for a single potential member.
Information consists of an integer for the person's age and an integer for the person's handicap.
Output will consist of a list of string values stating whether the respective member is to be placed in the senior or open category. */

const openOrSenior = (data) => {
	return data.map((item) => item[0] >= 55 && item[1] > 7 ? 'Senior' : 'Open')
}

/* Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines
if a given non-negative integer is a power of two. */

function isPowerOfTwo(n){
    return Number.isInteger(Math.log2(n));
}

/* Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings,
ordered from shortest to longest. */

function sortByLength (array) {
  return array.sort((a, b) => a.length -b.length)
};


/* Create a function named rotate() that accepts a string argument
and returns an array of strings with each letter from the input string being rotated to the end. */

function rotate(str){
  const result = [];
  for (let i = 0; i < str.length; i++) {
    const tempStr = str.slice(i+1).concat(str.slice(0, i+1))
	result.push(tempStr);
}
  return result;
}

/* You'll have a function called "sortEmotions" that will return an array of emotions sorted.
It has two parameters, the first parameter called "arr" will expect an array of emotions where an emotion will be one of the following:

:D -> Super Happy
:) -> Happy
:| -> Normal
:( -> Sad
T_T -> Super Sad

And the second parameter is called "order", if this parameter is true then the order of the emotions will be descending
(from Super Happy to Super Sad) if it's false then it will be ascending (from Super Sad to Super Happy)

The array could be empty, in that case return the same empty array. */

function sortEmotions(arr, order) {
	if (arr.length > 0) {
		const glossary =  [ ':D', ':)', ':|', ':(', 'T_T' ];
		return [...arr].sort((a, b) => glossary.indexOf(order ? a : b)  -  glossary.indexOf(order ? b : a))
	}
	return arr;
}

/* Someone was hacking the score. Each student's record is given as an array.
The objects in the array are given again as an array of scores for each name and total score.
The scores for each grade is:
A: 30 points
B: 20 points
C: 10 points
D: 5 points
Everything else: 0 points
If there are 5 or more courses and all courses has a grade of B or above, additional 20 points are awarded.
After all the calculations, the total score should be capped at 200 points.
Returns the name of the hacked name as an array when scoring with this rule. */

function findHack(arr) {
	const result = [];
	const glossary = new Map ([
	  ['A', 30],
	  ['B', 20], 
	  ['C', 10],
	  ['D', 5]
	]);
	
	arr.forEach(([name, total, scores]) => {
	  const points = scores.map((score) => {
		return glossary.has(score) ? glossary.get(score) : 0;
	  })
	  
	 if (points.length >= 5 && points.every(p => p >= 20)) {
		points.push(20)
	  }
	 
	  const sum = points.reduce((sum, point) => sum + point, 0);
	 
	  if (sum !== total || sum > 200) {
		result.push(name);
	  }
	})
	
	return result;
}

/* Your job here is to write a function, which takes a sorted array ary and a value val,
and returns the lowest index where you could insert val to maintain the sorted-ness of the array.
The input array will always be sorted in ascending order. It may contain duplicates. 
Do not modify the input. */

function keepOrder(ary, val) {
	return ary.filter(num => num < val).length;
}

function keepOrder(ary, val) {

	if (ary[0] >= val) return 0;

	if (ary[ary.length - 1] < val) return ary.length;

	for (let i = 0; i < ary.length; i++) {
		if (ary[i-1] < val && ary[i] >= val) { 
			return i
		}
	}
}

/* You're re-designing a blog, and the blog's posts have the Weekday Month Day,
time format for showing the date and time when a post was made, e.g., Friday May 2, 7pm.
You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.
Write a function that takes the website date/time in its original string format and returns the shortened format.

Input
Input will always be a string, e.g., "Friday May 2, 7pm". 

Output
Output will be the shortened string, e.g., "Friday May 2". */

function shortenToDate(longDate) {
  return longDate.slice(0, longDate.indexOf(","))
}

/* Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order. */

function flattenAndSort(array) {
  return array.flat().sort((a, b) => a - b)
}


/* There is an array with some numbers. All numbers are equal except for one. Try to find it! */

function findUniq(arr) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (map[num]) {
      map[num] += 1
    } else map[num] = 1
  }
  return +Object.keys(map).filter((item) => map[item] === 1)[0]
}

/* Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned. */

function countSmileys(arr) {
  if (arr.length === 0) return 0;
  
  const eyes = [':', ';'];
  const nose = ['-', '~'];
  const mouth = [')', 'D'];
  
  
  const result = [];
  
  arr.forEach((item) => {
    let face = {};
    for (const char of item) {
      if (eyes.includes(char)) {
        face.isValidEyes = true;
      }
      if (nose.includes(char)) {
        face.isValidNose = true
      }
      if (mouth.includes(char)) {
        face.isValidMouth = true;
      }
    }
    if (face.isValidEyes && face.isValidMouth) {
      if (!face.isValidNose && item.length === 2 || face.isValidNose && item.length === 3) {
        result.push(face);
      }
    }
  
  })
  return result.length;
}

/* Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value,
you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.
Happiness rating will be total score / number of people in the room.
Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!). */

function outed(meet, boss){
	const total = Object.values(meet).reduce((acc, item) => acc + item, meet[boss]);
	const average = total/Object.keys(meet).length;
	return average <= 5 ?  'Get Out Now!' : 'Nice Work Champ!';
}

/* YouTube had a like and a dislike button, which allowed users to express their opinions about particular content.
It was set up in such a way that you cannot like and dislike a video at the same time.
There are two other interesting rules to be noted about the interface:
Pressing a button, which is already active, will undo your press.
If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state.
The same is true for the other way round.

Task
Create a function that takes in a list of button inputs and returns the final state. */

function likeOrDislike(buttons) {
  if (buttons.length === 0) return 'Nothing';
  let res = buttons[0];
  for (let i = 1; i < buttons.length; i++) {
    if (res === buttons[i]) res = 'Nothing';
    else res = buttons[i];
  }
  return res;
}

/* Complete the function that returns the lyrics for the song 99 Bottles of Beer as an array of strings:
each line should be a separate element - see the example at the bottom.

Note: in order to avoid hardcoded solutions, the size of your code is limited to 1000 characters

Lyrics
99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.

98 bottles of beer on the wall, 98 bottles of beer.
Take one down and pass it around, 97 bottles of beer on the wall.

...and so on...

3 bottles of beer on the wall, 3 bottles of beer.
Take one down and pass it around, 2 bottles of beer on the wall.

2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.

1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.

No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall. */

var sing = function () {
  const song = [];
  let count = 99;
  while (count > 0) {
    let firstStr = count === 1
    ?  `${count} bottle of beer on the wall, ${count} bottle of beer.`
    : `${count} bottles of beer on the wall, ${count} bottles of beer.`
    let secondStr = count === 1
    ?  'Take one down and pass it around, no more bottles of beer on the wall.'
    : count === 2
    ? `Take one down and pass it around, ${count -1} bottle of beer on the wall.`
    : `Take one down and pass it around, ${count -1} bottles of beer on the wall.`
    song.push(firstStr, secondStr);
    count -= 1;
  }
  song.push('No more bottles of beer on the wall, no more bottles of beer.', 'Go to the store and buy some more, 99 bottles of beer on the wall.');
  return song;
};