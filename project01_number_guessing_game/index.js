import inquirer from "inquirer";
const randomNumGen = Math.floor(Math.random() * 10);
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Write your guess between 1 to 10"
    }
]);
const { userGuess } = answer;
console.log(userGuess, "user guessed", randomNumGen, "system gen");
if (userGuess === randomNumGen) {
    console.log("Your answer is correct \n you win ! ");
}
else {
    console.log("Please try again");
}
