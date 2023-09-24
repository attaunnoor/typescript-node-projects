"use strict";
/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
var guestList = ['Faisal Anaari', 'Farooq', 'Fazaar', 'Shahid', 'Jarray', 'Inam'];
exports.guestList = guestList;
console.log("that you can invite only two people for dinner.");
//step1: Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guestList.length > 2) {
    var removedGuests = guestList.pop();
    console.log("Sorry ".concat(removedGuests, " you cannot invite them to dinner."));
}
//step2: Print a message to each of the two people still on your list, letting them know they’re still invited.
// for (let i = 0; i < guestList.length; i++) {
//     console.log(`${guestList[i]} is still invited to dinner.`);
// }
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Hi ".concat(guest, " you are still invited to dinner."));
}
//step3: Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guestList.pop();
guestList.pop();
console.log("Guest list after dinner: ", guestList);
