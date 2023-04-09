const express = require('express');
const app = express();
let bodyParser = require('body-parser');
const numbers = require('./modules/numbers')

app.use(express.static('./server/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use( '/numbers', numbers);

// let completedCalculation = [
//     {
//      num1: 2,
//      math: '+',
//      num2: 3,
//      result: 5,
//     }  
// ];

// app.get('/', (req,res) => {
//     console.log('GET/calculation');
//     res.send(completedCalculation);
// })

// app.post('/', (req,res) => {
    // let result = 0;
    // if (req.body.math == '+'){
    //     result = req.body.num1 + req.body.num2;
    // } else if (req.body.math == '-'){
    //     result = req.body.num1 - req.body.num2;
    // } else if (req.body.math == '*'){
    //     result = req.body.num1 * req.body.num2;
    // } else if (req.body.math == '/'){
    //     result = req.body.num1 / req.body.num2;
    // }

//     let newCalulation = {
//         num1: req.body.num1,
//         math: req.body.math,
//         num2: req.body.num2,
//         result: result,
//     };
//     calculation.push(newCalulation);
//     res.sendStatus(201);

// })

const port = process.env.PORT || 5050;

app.listen( port, () => {
    console.log ('you started the server! it is running on port', port);
})