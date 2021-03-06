var express = require('express');
var app = express();



// Entering Login: Detect Login action
// app.use(function (req, res, next) {
//     console.log('Someone want to login');
//     next();
// })

var login = function (req, res, next) {
    console.log('Someone want to log in');
    next();
}
// 在這邊call
// app.use(login);

// Go Index
// app.get('/', function (req, res) {
//     res.send('<h1>Index</h1>')
// })

// 也可以直接帶入app.get的路徑下一個參數直接call：
app.get('/', login, function (req, res) {
    res.send('<h1>Index</h1>');
})

// 404 Page Not Found
app.use(function (req, res, next) {
    res.status(404).send('page not found')
    next();
})

// Prevent Error Message to show if Some Code has error
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('We have some problem here');
})

// 監聽 port
var port = process.env.PORT || 3000;
console.log(port);
app.listen(port);