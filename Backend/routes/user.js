const route = require('express').Router();
const User = require('../model/user');

route.get('/users', (req, res) => {
    User.find((err, data) => {
        if (err) res.json({ result: "To request data from Databse failed..." });
        else res.json(data);
    })
});

route.get('/', (req, res) => {
    res.send('Hi users')
});



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

route.post('/', (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const newUser = new User({
        firstName,
        lastName,
        email,
        password
    });
    try {
        newUser.save((err, res) => {
            if (err) console.log(err);
            else res.json({result: false})
        });
        console.log('Save data to database');
    } catch (err) {
        console.log('save error: ' + err)
    }
    // res.send('Data: '+ firstName + ' ' + lastName + ' ' + email);
    res.json({ result: true, firstName: firstName, lastName: lastName, email: email, password: password });
})

module.exports = route;