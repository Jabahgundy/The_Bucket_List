'use strict';
const UserModel = require(../models/UserModel);
const express = require('express');
const router = express.Router();

router.get('/signup', (req, res) => {
    res.render('template', {
        locals: {
            title: 'Register'
        },
        partials: {
            body: 'partial-signup',
            nav: 'partial-nav'
        }
    })
});

router.get('/login', (req, res) => {
    res.render('template', {
        locals: {
            title: 'Login'
        },
        partials: {
            body: 'partial-login',
            nav: 'partial-nav'
        }
    })
});


router.get('/logout', (req,res) => {
    res.redirect('/');

})


router.post('/signup', async(req, res) => {
    const { name, email, password } = req.body;
    const response = await UserModel.addUser(name, email, password);
    res.sendStatus(200);

    
});

router.post('/login', async(req, res) => {
    const { email, password } = req.body;
    const user = new UserModel(null, null, email,password);
    const response=await user.login();
    res.sendStatus(200);
    
});

module.exports = router