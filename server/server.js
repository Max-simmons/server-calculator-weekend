const express = require('express');
let bodyParser = require('body-parser');
const app = express();
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

























app.listen(5050, function () {
    console.log('you started the server! it is running on port 5050.');
})