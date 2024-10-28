#! /usr/bin/env node 
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
console.log("Pin is: 1155");
let myBalance = 20000;
let myPin = 1155;
let pinAnswer = await inquirer_1.default.prompt([
    {
        name: "Pin",
        type: "number",
        message: "Enter your Pin"
    }
]);
if (pinAnswer.Pin === myPin) {
    console.log("You entered correct pin");
    let operationAns = await inquirer_1.default.prompt([
        {
            name: "Operation",
            type: "list",
            message: "Please select option",
            choices: ["Withdraw", "Check Balance", "FastCash"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.Operation === "Withdraw") {
        let amountAns = await inquirer_1.default.prompt([
            {
                name: "Amount",
                type: "number",
                message: "Select the Amount you want to withdraw",
            }
        ]);
        if (myBalance >= amountAns.Amount) {
            console.log(myBalance -= amountAns.Amount);
            console.log(`Your remaining balance is ${myBalance}`);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    else if (operationAns.Operation === "Check Balance") {
        console.log(`Your Balance is ${myBalance}`);
    }
    else if (operationAns.Operation === "FastCash") {
        let fastCash = await inquirer_1.default.prompt([
            {
                name: "Balance",
                type: "list",
                message: "Select the amount you want to withdraw",
                choices: [5000, 10000, 15000, 20000]
            }
        ]);
        myBalance -= fastCash.Balance;
        console.log(`Your remaining balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect Pincode");
}
