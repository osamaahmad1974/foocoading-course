// 1.1 Open the apps.js and start by declaring an array that contains 10 strings. These strings should be of book titles you have read (or made up) and be lowercase without spaces so that you can use these later as HTML id attributes. (Example: Harry Potter's - The Chamber of Secrets -> harry_potter_chamber_secrets). Add a console.log statement to output this array to console. (This is for debugging and making sure everything is in order. Delete it later when you're done :))

const books = [
  "Love_In_The_Time_Of_Cholera",
  "Leaf_Storm",
  "The_Brothers_Who_Met_Poverty",
  "The_Fern_Flower",
  "The_Alchemist",
  "Life_Of_Pi",
  "The_Road_Less_Travelled",
  "The_History_of_Love",
  "The_Giving_Tree",
  "The_Red_Tent"
];
// console.log(books);

// 1.2 Open the empty index.html and add the required HTML to load the app.js file. Open index.html in the browser and confirm that the console.log statement shows the array. (Open the Chrome Developer Tools and inspect the console.)

// 1.3 Make a function (or functions) that generate a ul with li elements for each book ID in the array using a for loop. Make sure that the function names you choose are an accurate reflection of what they do. As a reminder, here are the recommended Naming Conventions.

function creating_Books_List(booksList) {
 
  let ul = document.createElement("ul");
  document.getElementById("BooksList").appendChild(ul);

  for (let index = 0; index < booksList.length; index++) {
    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML += booksList[index].replace(/_/g, " ");
  }
}
creating_Books_List(books);
