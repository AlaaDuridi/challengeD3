import express from 'express';
import { body } from "express-validator";
import { validationResult } from "express-validator";
const app = express();
app.use(express.json());
app.post('/calc' , 
[
body('x').exists().withMessage('x must be defined').isInt({ min: 1, max: 50 }).withMessage('x <=100 please'),
body('y').exists().withMessage('x must be defined').isInt({min:1, max:50}),
body('operation').exists().isIn(['+','-','*','/']).withMessage("valid operations are : +,-,*,/")
]
, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json(errors.array());
    }
    const { x ,y ,operation } = req.body;
    let result;
    switch (operation) {
        case '+' :
            result = x + y;
            break;
        case '-': 
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = x / y;
            break;
    }
    res.send({ result })
})
app.listen(3000, () =>
  console.log(`Server Ready -_-`) 
);
