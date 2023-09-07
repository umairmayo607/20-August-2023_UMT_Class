import inquirer from "inquirer";
let user = inquirer.prompt({
    type: "input",
    name: "userName",
    message: "What is your Name?",
});
console.log(user);
