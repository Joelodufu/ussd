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
      "CON Welcome to Haraway by Kingsworth Capital Ltd\n Please enter the 15 Digits Haraways CashCard PIN";
  }
  if (text !== "") {
    let array = text.split("*");
    console.log(array);
    if (array.length === 1) {
      //Voucher Code
      response = "CON Enter Account Number";
    } else if (array.length === 2) {
      //Having The Account Number
      response = "CON Enter The Account Name";
    }
    //Having The Account Name
    else if (array.length === 3) {
      response =
        "CON Please Confirm Deposit\n1. deposit\2. decline\3. view Transactions";
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
