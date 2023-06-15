import express from 'express' ; 
import router from './calculate.js'

const app = express() ; 
app.use(express.json()) ; 

app.use('/calculate', router);
app.use((error, req, res, next) => {
    const statusCode = error.statusCode;
    res.status(statusCode).send({
      status: false,
      msg: error.message,
      stack: error.stack,
      statusCode
    });
  });
  

app.listen(3000 , ()=>{
    console.log('Server is Ready :) ')
});