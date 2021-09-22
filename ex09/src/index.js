function myFunction(myObj, checkProp){
  // Only change code below this line
      if (myObj.hasOwnProperty(checkProp) == true){
          return myObj[checkProp];
      } else {
          return "Not Found";
      }
  // Only change code above this line
}

myFunction({ title: "Titanic", song: "My Heart Will Go On", genre: "drama" }, "title");
myFunction({ title: "Titanic", song: "My Heart Will Go On", genre: "drama" }, "song");
myFunction({ title: "Titanic", song: "My Heart Will Go On", genre: "drama" }, "genre");
myFunction({ title: "Titanic", song: "My Heart Will Go On", genre: "drama" }, "actor");

module.exports = myFunction;