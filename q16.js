/*
More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15.
Add a print statement to the end of your program informing people that you found a bigger
dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list
*/
var myfriends = ["Arqam", "Hassam", "Iqra", "Shafaq"];
console.log(myfriends);
console.log("We found a bigger dinner table, so now more space is available");
// adding guest at begining
myfriends.unshift("Rabbiya");
// adding guest in middle
myfriends.splice(2, 0, "Muazzam");
//adding guest in last
myfriends.push("Rukhsana");
// now print invitation to guest with message
for (var i = 0; i < myfriends.length; i++) {
    console.log("Dear ".concat(myfriends[i], ", You are invited for dinner on Monday!;)"));
}
