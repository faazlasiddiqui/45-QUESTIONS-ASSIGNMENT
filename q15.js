var myfriends = ["Arqam", "Hassam", "Iqra", "Shafaq"];
console.log("due to some personal reason Mr. ".concat(myfriends[0], " can't come for dinner. "));
myfriends[0] = "Bilal";
for (var i = 0; i < myfriends.length; i++) {
    console.log("Mr & Mrs ".concat(myfriends[i], "! You are invited for dinner on Monday at my place.\n"));
}
