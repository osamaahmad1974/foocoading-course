"use strict";
const myNumbers = [1, 2, 3, 4];
const myOddNumbers = myNumbers.filter(oddNum => oddNum % 2 !== 0).map(oddNum=>oddNum*2);
console.log(myOddNumbers);
