const express = require( 'express' );
const router = express.Router();

let completedCalculation = [
    {
     num1: 2,
     math: '+',
     num2: 3,
     result: 5,
    }  
];

router.get('/', (req,res) => {
    console.log('GET/calculation');
    res.send(completedCalculation);
})


router.post('/', (req,res) => {
    let result = 0;
    if (req.body.math == '+'){
            result = req.body.num1 + req.body.num2;
        } else if (req.body.math == '-'){
            result = req.body.num1 - req.body.num2;
        } else if (req.body.math == '*'){
            result = req.body.num1 * req.body.num2;
        } else if (req.body.math == '/'){
            result = req.body.num1 / req.body.num2;
        }

    let newCalulation = {
    num1: req.body.num1,
    math: req.body.math,
    num2: req.body.num2,
    result: result,
    };
    completedCalculation.push(newCalulation);
    res.sendStatus(201);
})

    module.exports = router;