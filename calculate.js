import {Router} from "express" ; 
import {body} from "express-validator";
import {validateResultMiddleware} from './validateResultMiddleware.js'

const router = Router() ; 

router.post("",[
    body("x").exists().isInt({min:1, max:50}),
    body("y").exists().isInt({min :1 ,max:50}) ,
    body("operation").exists().isIn(['+','-','*','/'])
], 
validateResultMiddleware,
(req, res) => {
    const {x,y,operation} = req.body ; 
    let result;
    switch(operation){
        case "+" :
            result = x+y ; 
            break;
        case "-" :
            result = x-y ; 
            break;
        case "*" : 
            result= x*y ;
            break;
        case "/" :
            result = x/y ;
            break; 
        }
        res.status(200).json(result)
    
}); 

export default router ; 