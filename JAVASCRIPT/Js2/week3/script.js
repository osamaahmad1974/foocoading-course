2-1:
'use strict';
function doThing(func) {
  console.log(
    "I am function (doThing), and I will print your name by calling another function called (printName)!"
  );
  let name = "osama";
  func(name);
}
function printName(num) {
  console.log("My name is: " + num);
}
doThing(printName);

2-2:
'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  //generating an array containing values from start value to end value
  let numbers = [];
  for (let index = startIndex; index <= stopIndex; index++) {
    numbers.push(index);
    if (index % 3 === 0 && index % 5 === 0) {
      threeCallback(index);
      fiveCallback(index);
    } else if (index % 3 === 0) {
      threeCallback(index);
    } else if (index % 5 === 0) {
      fiveCallback(index);
    }
  }
}
function sayThree(num) {
  console.log(num + " is divisible by 3.");
}
function sayFive(num) {
  console.log(num + " is divisible by 5.");
}
threeFive(10, 15, sayThree, sayFive);
module.exports = threeFive;




2-3:
'use strict';

//with for loop.
function repeatStringNumTimesWithFor(str, num) {
  let s = "";
  for (let index = 0; index < num; index++) {
    s += str;
  }
  return s;
}
let x = repeatStringNumTimesWithFor("abc", 3);
console.log(x);


// with while loop.

function repeatStringNumTimesWithWhile(str, num) {
  let s = "";
  let index=0;
  while (index<num) {
    s += str;
    index++;
  }
  return s;
}
let x = repeatStringNumTimesWithWhile("abc", 3);
console.log(x);

// with do-while loop

function repeatStringNumTimesWithDoWhile(str, num) {
  let s = "";
  let index = 0;
  if (num > 0) {
    do {
      s += str;
      index++;
    } while (index < num);
    return s;
  } else {
    return s;
  }
}

let x = repeatStringNumTimesWithDoWhile("abc", 3);
console.log(x);

2-4:
'use strict';

function Dog() {
  this.name = "Skobby";
  this.color = "brown";
  this.numLegs = 4;
}
let hound =new Dog();

2-5:
'use strict';

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
let x = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
console.log(x);


2-6:
'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const flattenedArr=[];
for (var i = 0; i < arr2d.length; i++) {
  for (var j = 0; j < arr2d[i].length; j++) {
   flattenedArr.push(arr2d[i][j]);
  }
}
console.log(flattenedArr);

2-7:
'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);
// because here it will refer to another address in the memory.
const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);
// because here it will refer to the same address in the memory.


Step 3:
'use strict';
function createBase(base) {
  return function(num) { return num + base;};
  }
const addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));
