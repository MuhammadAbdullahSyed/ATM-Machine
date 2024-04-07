#! /usr/bin/env node
import inquirer from "inquirer"
let myBalance=10000 
let pinCode=1234
let pinAnswer= await inquirer.prompt([{
    name: "pin",
    type: "number",
    message: "Enter your pin number",
}])

if (pinAnswer.pin === pinCode){
    console.log("correct Pin code")


   let operationAnswer = await inquirer.prompt([{
        name: "operation",
        type: "list",
        message: "Please select option",
        choices: ["withdraw", "Check balance", "Fast Cash"],

    }])


    if (operationAnswer.operation === "withdraw"){
        let amountAnswer = await inquirer.prompt(
        [
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            }
        ]
        )

        if (amountAnswer.amount <= myBalance){

            let newBalance=myBalance -= amountAnswer.amount
            console.log(`Your transcation is successfully completed and your balance is ${newBalance}`)
        }
        else{
            console.log("you have insufficient balance");
        }
        
    }
   
    else if (operationAnswer.operation === "Fast Cash"){
    let fastCashAns = await inquirer.prompt ([{
        name: "fastCash",
        type: "list",
        message: "Select your amount",
        choices: ["500","1000","2000"],
    }])
    let fastCashBal=myBalance -= fastCashAns.fastCash
    console.log(`Your transcation is successfully completed and your balance is ${fastCashBal}`)
   }

   else if (operationAnswer.operation === "Check Balance"){
    }
    console.log(`Your current balance is ${myBalance}`)
   }

else {
    console.log("Incorrect Pin code")
}