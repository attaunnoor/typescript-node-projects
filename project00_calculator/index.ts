import inquirer from "inquirer";

const answers : {
    numberOne: number
    numbertwo: number
    operator: string
} = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Enter First Number"
    },
    {
        type: "number",
        name: "numbertwo",
        message: "Enter second Number"
    },
    {
        type: "list",
        choices: ["+", "-", "*", "/"],
        name: "operator",
        message: "Select Operator"
    }
])

const {numberOne, numbertwo, operator} = answers
if (numberOne && numbertwo && operator) {
    let result: number = 0;
    if (operator === "+") {
        result = numberOne + numbertwo
    } else if (operator === "-") {
        result = numberOne - numbertwo
    } else if (operator === "*") {
        result = numberOne * numbertwo
    } else if (operator === "+") {
        result = numberOne / numbertwo
    } 
    console.log("Your restult is", result); 
} else {
    console.log("kindly enter valid input")
}
