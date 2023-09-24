import inquirer from "inquirer"

let {num1,num2,oper} = await inquirer.prompt([
    {
    name: "num1",
    type: "number",
    message: "enter 1st Number",
    },
    {
        name: "num2",
        type: "number",
        message: "enter your first number",
    },
    {
        name: "oper",
        type: "list",
        options: ["+", "-", "*", "/"],
        message: "enter your second number",
    }
]);

if(oper==="+") {
    console.log(num1 + num2)
} else
console.log("no")
