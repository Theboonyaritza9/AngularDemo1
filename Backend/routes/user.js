const route = require('express').Router();
const User = require('../model/user');


// Get All users in database
route.get('/users', (req, res) => {
    User.find((err, data) => {
        if (err) res.json({ result: "To request data from Databse failed..." });
        else res.json(data);
    })
});

route.get('/', (req, res) => {
    res.send('hi')
})

// Login system
route.post('/login', (req, res) => {
    const { email, password } = req.body;
    User.find({ email }, (err, data) => {
        if (data) {
            if (data[0].password === password) res.json({ result: true });
            else res.json({ result: 'password does not match'});
        }
        else res.json({ result: false })
    })
});

// Register system
route.post('/', (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const newUser = new User({
        firstName,
        lastName,
        email,
        password
    });
    try {
        newUser.save()
        console.log('Save data to database');
    } catch (err) {
        console.log('save error: ' + err);
    }
    // res.send('Data: '+ firstName + ' ' + lastName + ' ' + email);
    res.json({ result: true, firstName: firstName, lastName: lastName, email: email, password: password });
});


// Delete user
route.post('/delete', (req, res) => {
    const email = req.body.email;
    User.findOne({email: email}, (err, data) => {
        if(data){
            data.remove(() => { res.json({result: 'delete success'}) })
        }
        else{
            res.json({result: 'delete failed'})
        }
    })
})

module.exports = route;