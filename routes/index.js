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
          response = 'CON Welcome to Haraway by Kingsworth Capital Ltd\n Please enter the 15 Digits Haraways CashCard PIN' 
      }
      if (text !== '')
      {  
          let array = text.split('*');
          if(array.length === 1){
          response = 'CON Enter Account Number';
          }
          else if(parseInt(array[1]))
          {
              let data = new user();
              data.PIN = array[0];
              data.account_number = array[1];
              data.account_name = array[2];
              data.save = (()=>{
                  response = 'CON Enter Account Name'
              })       
          }
          else if(parseInt(array[2]))
         {
               response = 'END CashCard Deposit was Successful'
         }
      }
      setTimeout(() => {console.log(text)
          res.send = (response);
          res.end()
      }, 2000);
})

module.exports = router;
