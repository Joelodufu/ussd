var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('the jomilllss');
});

router.post('/', (req, res) => {
  const { phoneNumber, text, sessionId } = req.body;
  let response;

  if(text==='')
      { console.log('1')
          response = 'CON Welcome to Haraway by Kingsworth Capital Ltd\n Please select\n1. Deposit Cash\n2. Convert Airtime\n3. Fund betting wallet\n4. TV Subscription' 
      }
      if (text !== '')
      {  
          let array = text.split('*');
          if(array.length === 1){
          response = 'CON Please enter your CashCard PIN';
          }
          else if(parseInt(array[1]))
          {
              let data = new user();
              data.PIN = array[0];
              data.account_number = array[1];
              data.account_name = array[2];
              data.save = (()=>{
                  response = 'CON Enter 10-digits Account Number'
              })       
          }
          else if(parseInt(array[2]))
         {
               response = 'CON You are about to deposit 10,000 Naira in 2364300817 Zenith Bank Zainab Balogun Obialor.\nPlease enter depositors name to proceed'
         }{
            response = 'END Dear Emmanuel Oloche Nzekwe you have successfully deposited 10,000 to Zainab Balogun Obialor'

         }
      }
      setTimeout(() => {console.log(text)
          res.send = (response);
          res.end()
      }, 2000);
})

module.exports = router;
