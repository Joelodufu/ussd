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
      console.log(array)
  }
  if (text !== "") {
    let array = text.split("*");
    console.log(array);

    //FOR DEPOSIT
    if (parseInt(array[0]) === 1) {
      if (array.length === 1) {
        //Voucher Code
        response = "CON Please Enter your 15 digits Cashcard PIN";
        console.log(array)
      } else if (array.length === 2) {
        //Having The Account Number
        response = "CON Please Enter your 10 digits account number";
        console.log(array)
      }
      //Having The Account Name
      else if (array.length === 3) {
        response =
          "CON You are about to Deposit the sum N10,000 to UBA: Zainab Balogun Obialor\n Enter Depositor's name to proceed or press '0' to Decline ";
          console.log(array)
      } else if (array.length === 4) {
        //Save the Account details to database

        //get the depositor name
        let accountName = array[3];
        if (parseInt(array[3]) != 0) {
          let user = new User();
          user.harrawayPin = array[0];
          user.accountNumber = array[1];
          user.accountName = array[2];

          user.save((user) => {
            console.log(user);
            response = "END Fund Deposited succesfully";
            console.log(array)
          });
        }

        //Decline Deposit
        else if (parseInt(array[3]) === 0) {
          response = "END Deposit Declined!!!";
          console.log(array)
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

    //FOR ATM
    if (parseInt(array[0]) === 2) {
      if (array.length === 1) {
        response =
          "CON Please select Your Bank\n1. Access Bank\n2. First Bank\n3. UBA\n4. Zenith Bank";
          console.log(array)
      } else if (array.length === 2) {
        response =
          "CON Select Card Type\n1. Master Card\n2. Visa Card\n3. Verve Card";
          console.log(array)
      } else if (array.length === 3) {
        response = "CON Enter your Full name as to be reflected on the Card";
        console.log(array)
      } else if (array.length === 4) {
        response = "CON Please enter your Account number";
        console.log(array)
      } else if (array.length === 5) {
        response = "CON Enter your BVN";
        console.log(array)
      } else if (array.length === 6) {
        response =
          "CON Please confirm request\n Select\n1. to Continue\n2. to decline";
          console.log(array)
      } else if (array.length === 7) {
        response =
          "END Your request  for ATM Card have been place succesfully\n Wait for pick-up message in 24 hours from now";
          console.log(array)
      }
    }

    //FOR AIRTIME RECHARGE
    //[3, 1||2, ]
    if (parseInt(array[0]) === 3) {
      if (array.length === 1) {
        response =
          "CON Please select mode of Recharge\n1. From Bank\n2. Cashcard Recharge";
          console.log(array)
      } else if (array.length === 2) {
        if (parseInt(array[1]) === 1) {
          console.log(array)
          if (array.length === 2) {
            response = "CON Please enter your account number";
            console.log(array)
          } else if (array.length === 3) {
            response = "CON Input the Ammount";
            console.log(array)
          } else if (array.length === 4) {
            response = "CON Input your Security PIN";
            console.log(array)
          } else if (array.length === 5) {
            response ="CON You are about to recharg.\n Please select to continue\n1. Accept\n2. Decline";
          } else if (array.length === 6) {
            response = "END Recharge succesful!!!";
          }
        } else if (parseInt(array[1]) ===2) {
          if (array.length === 2) {
            response = "CON Please Enter your 15 digits Cashcard PIN";
            console.log(array)
          } else if (array.length === 3) {
            response = "END Recharge Successful";
            console.log(array)
          }
        } else {
          response = "END please insert the right option";
          console.log(array)
        }
      }
    }

    //FOR UTILITY BILLS
    if (parseInt(array[0]) === 4) {
      response = "END THANKS FOR PAYING YOUR BILLS";
      console.log(array)
    }

    //FOR FUNDING OF BET WALLET
    if (parseInt(array[0]) === 5) {
      response = "END Wellone OGAH Gambler\n U TOO MUCH!!!";
      console.log(array)
    }
  }
  setTimeout(() => {
    res.send(response);
  }, 2000);
});

module.exports = router;
