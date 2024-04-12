#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log("Welcome to codewth Raffat - CLI Number Guessing Game");

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Enter your guess number(Number Limit from 1 to 5):",
    },
]);

if (answer.userGuessNumber === randomNumber){
    console.log("Congratulations! you guess a correct number. successfully done!");
}
else{
    console.log("Sorry, you guess a wrong number. please try again. dont giveup!");
}