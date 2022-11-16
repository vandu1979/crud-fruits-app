//require
const express = require('express');
const app = express();
const fruits = require('./models/fruits');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());




//=====connection to database ======//

// =====Middleware=====//
//const fruits = ['apple', 'banana', 'pear'];
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
app.use(express.urlencoded({extended:false}));

//-----Routes------//
//I.N.D.U.C.E.S.
//Index, New, Delete, Update, Create, Edit, Show

// Index
app.get('/fruits', (req, res) => {
    res.render('Index', {
      fruits: fruits  
    });
});

// New
app.get('/fruits/new', (req, res)=>{
    res.render('New');
})
// Delete

// Update

// Create
// app.post("/fruits", (req, res)=>{
//     console.log(req.body)
//     res.render("Data received");
// });
app.post('/fruits', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true; //do some data correction
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false; //do some data correction
    }
    fruits.push(req.body);
    console.log(fruits);
    res.redirect('/fruits');
});

// Edit

// show
// app.get('/fruits/:Index', (req, res) => {
//     res.send(fruits[req.params.Index]);
// });
app.get('/fruits/:index', function(req, res) {
    res.render('Show', {
        fruit: fruits[req.params.index]

    });
});


app.listen(3000, () => {
    console.log('listening');
});
