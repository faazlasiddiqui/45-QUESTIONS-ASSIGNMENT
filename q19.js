//Dinner Guests: Working with one of the programs from Exercises 14 through 18,
// print a message indicating the number of people you are inviting to dinner.
var myfriends = ["Arqam", "Hassam", "Iqra", "Shafaq"];
for (var i = 0; i < myfriends.length; i++) {
    console.log("Mr & Mrs ".concat(myfriends[i], "! You are invited for dinner on Monday at my place.\n"));
}
// the number of people i am inviting
console.log("The number of people i am inviting are:  ".concat(myfriends.length));
