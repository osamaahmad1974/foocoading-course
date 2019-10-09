// 1. Strings:

// 1.1 Add the string to your file and log it.
let myString = "hello,this,is,a,difficult,to,read,sentence";

// 1.2 Log the length of myString.
console.log(myString);

// 1.3 The commas make that the sentence is quite hard to read. Find a way to remove the commas from the string and replace them with spaces.
myString = myString.replace(/,/g, " ");

// 1.4 Log myString to see if you succeeded.
console.log(myString);

// 2. Arrays:
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
// 2.1 Add a statement that adds Mauro's favorite animal 'turtle' to the existing array.
favoriteAnimals.push("turtle");

// 2.2 Log your new array!
console.log(favoriteAnimals);

// 2.3 Now add Jim's favorite animal to the array, it's 'meerkat', but make sure it will be placed after 'blowfish' and before 'capricorn'.
favoriteAnimals.splice(1, 0, "meerkat");

// 2.4 Write a console.log statement that explains in words you think the new value of the array is.
console.log(" the array will be: ['blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle']");

// 2.5 Log your new array!
console.log(favoriteAnimals);

// 2.6 Log the length of the array, add a message: 'The array has a length of: ' (here you should show the length of the array).
console.log("The array has a length of: "+favoriteAnimals.length);

// 2.7 Jason does not like 'giraffe', delete this animal from the array.
favoriteAnimals.splice(3,1);
// 2.8 Again log your new array.
console.log(favoriteAnimals);

// 2.9 Now if unlike Jim, you don't like 'meerkat' and you want to delete it from the array, but you don't know the position or the index of the item in the array, how can you find it?
let index= favoriteAnimals.indexOf("meerkat");

// 2.10 Log the index of 'meerkat'. Add a message so it says: 'The item you are looking for is at index: ' (here you should show the index of the item).
console.log("The item you are looking for is at index: "+index);


// More JavaScript:
// 1- Create a function that takes 3 arguments and returns the sum of the these arguments.
 function sumArguments(par1,par2,par3){
     let sumParameters=par1+par2+par3;
     return sumParameters;
 }
 
 // 2- Create a function named colorCar that receives a color, and prints out, 'a red car' for example.
 function colorCar(color) {
     console.log("a "+color+" car");
 }
 
 // 3-Create an object and a function that takes the object as a parameter and prints out all of its properties and values.
 const object1 = {
    name: "Osama Ahmad",
    age: 42,
   
  };
  function printObject(par1) {
    console.log(Object.values(par1));
     }


 // 4- Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)

 const vehicle1={
     1:"car",
     2:"motorbike",
 };

function vehicleType(color,code) {

    console.log("a "+color+" "+vehicle1[code]);
}
 /* 5- Can you write the following without the if statement, but with just as a single line with console.log(...);?
if (3 === 3) {
  console.log("yes");
} else {
  console.log("no");
}
*/

console.log((3 === 3) ? "Yes" : "No");

// 6-Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'

const vehicle={
    1:"car",
    2:"motorbike",
    age:5,
};

function vehicleStatus(color,code,age) {
    if (age>1) {
        console.log("a "+color+" "+vehicle[code]+" used "+vehicle[code]);
         }
         else{
        console.log("a "+color+" "+vehicle[code]+" new "+vehicle[code]);
         }
}

// 7- Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
let vehicles = ["car", "motorbike", "caravan", "bike"];

// 8- How do you get the third element from that list?
vehicles[2];

// 9- Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".

const vehicle3={
    1:"car",
    2:"motorbike",
    3:"bike",
    
    age:5,
};

function vehicleStatus3(color,code,age) {
    if (age>1) {
        console.log("a "+color+" "+" used "+vehicle3[code]);
         }
         else{
        console.log("a "+color+" "+" new "+vehicle3[code]);
         }
}

vehicleStatus3("green",3,1);

// 10- Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)Hint, the output should be correct English with all the punctuation in place (that's the challenge). So plurals for the vehicle types, commas followed by a single space, the word and to replace the final comma and closed off by a period.

function advertisement() {
    let v=0;
    let adver="Amazing Joe's Garage, we service ";
    while (v<vehicles.length-1) {
        adver=adver+vehicles[v]+"s, ";
        v=v+1;

        
    }
    adver=adver+vehicles[v]+"s.";
    console.log(adver);
    
}
advertisement();

// 11- What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?
console.log("my solution on numer 10 it works for adding any more to the list and I had test it");

// 12- Create an empty object.
let emptyObject={};

// 13- Create an object that contains the teachers that you have had so far for the different modules.

let teachers={"Omid":{"module":"Match-IT"}, 
"Franko":{"module":"FooCafe"},
"Fadi":{"module":"FooCafe"}
};

// 14- Add a property to the object you just created that contains the languages that they have taught you.
teachers.Omid.language="Java";
teachers.Franko.language="JavaScript";
teachers.Fadi.language="Html-Css";

/* 15- Write some code to test two arrays for equality using == and ===. Test the following:
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
What do you think will happen with x == y, x === y and z == y and z == x? Prove it!
*/

// Answer:to test 2 arrays first I have to check if both of them has the same length.
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
console.log((x === y) ? "Yes" : "No");// result is No.
console.log((x == y) ? "Yes" : "No");// result is NO.
console.log((z == y) ? "Yes" : "No");// result is Yes.
console.log((z == x) ? "Yes" : "No");// result is No.

/* 16- Take a look at the following code:
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).
Does the order that you assign (o3 = o2 or o2 = o3) matter?
*/
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
console.log(o3);
o2.cafe="javascript";
console.log(o3);
// yes changing o2 will change o3.
o1.cafe1="HTML";
console.log(o3);
// changing o1 will not change o3.


/*17- What does the following code return? (And why?)
let bar = 42;
typeof typeof bar;
*/

console.log(typeof typeof bar);
// it will return String.

