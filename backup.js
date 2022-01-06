var express = require("express");
const mongoose = require("mongoose");
var router = express.Router();
var User = require("../models/User");


/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("./index.html");
});

router.post("/", (req, res) => {
  const { phoneNumber, text, sessionId } = req.body;
  let response;

  if (text === "") {
    console.log("hello");
    response =
      "CON Hello! Welcome to Haraway by Kingsworth Capital Ltd\n Please select\n1. Cash Deposit\n2. ATM Card Request\n3. Airtime Recharge\n4. Utility Bills\n5. Fund Betting Wallet\n";
  }
  if (text !== "") {
    let array = text.split("*");
    console.log(array);
    if (array.length === 1) {
      //Voucher Code
      response = "CON Please Enter your 15 digits Cashcard PIN";
    } else if (array.length === 2) {
      //Having The Account Number
      response = "CON Please Enter your 10 digits account number";
    }
    //Having The Account Name
    else if (array.length === 3) {
      response =
        "CON You are about to Deposit the sum N10,000 to UBA: Zainab Balogun Obialor\n1. Enter Depositor's name to proceed\n2. Decline ";
    } else if (array.length === 4) {
      //Save the Account details to database
      if (parseInt(array[3]) === 1) {
        let user = new User();
        user.harrawayPin = array[0];
        user.accountNumber = array[1];
        user.accountName = array[2];

        user.save((user) => {
          console.log(user);
          response = "END Fund Deposited succesfully";
        });
      }

      //Decline Deposit
      else if (parseInt(array[3]) === 2) {
        response = "END Deposit Declined!!!";
      }

      //View Transactions
      else if (parseInt(array[3]) === 3) {
        User.find({}, (err, user) => {
          console.log(user);
          let users_data = `${
            users.length
              ? `No Users Found`
              : `${users.map((items, index) => {
                  return `${index + 1}. ${items.accountName}\n`;
                })}`
          }`;
          response = "END Current Transactions";
        });
      }
    }
  }
  setTimeout(() => {
    res.send(response);
  }, 2000);
});

module.exports = router;
