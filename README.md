# challengeD3

problem statement <br> 
 create a new node js project application calculator, you must use express module<br> 
 define an endpoint POST/calculate, it should take a payload of two numbers and the operation <br> 
 between them as a json body data and apply the operation on the two numbers<br> 
 you must apply validation and error messages on the endpoint<br> 

sample request<br> 
POST/calculate<br> 
{<br> 
"x": "1",<br> 
"y": "2",<br> 
"operation": "+"<br> 
}<br> 

allowed numbers for x and y, integers from 1 to 50<br> 
allowed operations are addition, subtraction, division, multiplication<br> 

hint, use isIn validator<br> 
    body('operation').exists().isIn(['+','-','*','/'])<br> 


response must be the following format<br> 

{<br> 
"result": result of the operation<br> 
}<br> 
