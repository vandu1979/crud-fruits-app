//require
const express = require('express');
const app = express();
const fruits = require('./models/fruits');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());




//=====connection to database ======//

// =====Middleware=====//
//const fruits = ['apple', 'banana', 'pear'];

//-----Routes------//
//I.N.D.U.C.E.S.
//Index, New, Delete, Update, Create, Edit, Show

// Index
app.get('/fruits', (req, res) => {
    res.send(fruits);
});

// New

// Delete

// Update

// Create

// Edit

// show
// app.get('/fruits/:Index', (req, res) => {
//     res.send(fruits[req.params.Index]);
// });
app.get('/fruits/:indexOfFruitsArray', function(req, res){
    res.render('Show');
});


app.listen(3000, () => {
    console.log('listening');
});
