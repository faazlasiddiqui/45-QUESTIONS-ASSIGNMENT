/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order.
Print the list to show that its order has changed
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var favplace = ["Finland", "Australia", "Germany", "Italy", "Turkiye"];
// Print original order
console.log("Original Order:", favplace);
// Print in alphabetical order without modifying the actual list
console.log("Alphabetical Order:", __spreadArray([], favplace, true).sort());
// Show that the array is still in its original order
console.log("Original Order (not modified):", favplace);
// Print in reverse alphabetical order without changing the order of the original list
console.log("Reverse Alphabetical Order:", __spreadArray([], favplace, true).sort().reverse());
// Show that the array is still in its original order
console.log("Original Order (not modified):", favplace);
// Reverse the order of the list
favplace.reverse();
console.log("Reversed Order:", favplace);
// Reverse the order of the list again
favplace.reverse();
console.log("Original Order (reversed again):", favplace);
// Sort the array in alphabetical order
favplace.sort();
console.log("Sorted Alphabetical Order:", favplace);
// Sort to change the array to reverse alphabetical order
favplace.sort(function (a, b) { return b.localeCompare(a); }); //  the Array.sort method, using the localeCompare function, allows you to customize the sort order based on the result of the comparison function.
console.log("Sorted Reverse Alphabetical Order:", favplace);
