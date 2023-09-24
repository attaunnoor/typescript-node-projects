//Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "muhammad atta un noor";
var nameLowerCase = personName.toLocaleLowerCase();
console.log(nameLowerCase);
var nameUpperCase = personName.toUpperCase();
console.log(nameUpperCase);
var words = personName.split(" ");
console.log(words);
var titleCase = " ";
for (var i = 0; i < words.length; i++) {
    titleCase += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + "  ";
}
console.log(titleCase);
