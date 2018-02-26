var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Hello World !!')
})

app.get('/pt', function(req,res) {
    res.send('Bom dia mundo !!')
})


app.listen(8083, function() {
    console.log('Example expresse app listening on port 8083')
})