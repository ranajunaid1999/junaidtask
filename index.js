const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // res.send('Successful response.');
    res.render('index');
});

app.get('/I/want/title/', (req,res)=>{
    if (req.query.address == 'https://www.google.com/'
        || req.query.address == 'https://www.yahoo.com/'
        || req.query.address == 'https://www.dawn.com/'){
         res.redirect(req.query.address);

    }
    res.send(req.query.address + '- this route not exist');
});

// app.use(function(err, req, res, next) {
//     res.send('this route not exist');
// });

app.listen(3000, () => console.log('Example app is listening on port 3000.'));