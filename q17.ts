/* Shrinking Guest List: You just found out that your 
new dinner table won’t arrive in time for the dinner,
 and you have space for only two guests.
• Start with your program from Exercise 16.
 Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list.
 Each time you pop a name from your list,
print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list,
 letting them know they’re still invited.
 • Remove the last two names from your list,
  so you have an empty list. 
  Print your list to make sure you actually have an empty list at the end of your program
  */

  const myfriends: String[] = ["Shafaq" , "Hassam" , "Arqam" , "Iqra" , "Rabbiya", 
  "Muazzam"];
  console.log("More space on table isn't available now.");

  //removing last 4 guests
  let friend1 = myfriends.pop();
  console.log(`Sorry, ${friend1} You aren't invited anymore.`);

  let friend2 = myfriends.pop();
  console.log(`Sorry, ${friend2} You aren't invited anymore.`);

  let friend3 = myfriends.pop();
  console.log(`Sorry, ${friend3} You aren't invited anymore.`);

  let friend4 = myfriends.pop();
  console.log(`Sorry, ${friend4} You aren't invited anymore.`);

  //inviting leftover guests

  for (let i = 0; i < myfriends.length; i++){
    console.log(`Dear ${myfriends[i]}, You are still invited for dinner on Monday!`);
  }

  myfriends.pop();
  myfriends.pop();

  console.log(myfriends);