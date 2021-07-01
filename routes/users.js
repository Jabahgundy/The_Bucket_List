'use strict';

const express = require('express');
const router = express.Router();

router.get('/signup', (req, res) => {
    res.render('template', {
        locals: {
            title: 'Register'
        },
        partials: {
            body: 'partial-signup'
        }
    })
});

router.get('/login', (req, res) => {
    res.render('template', {
        locals: {
            title: 'Login'
        },
        partials: {
            body: 'partial-login'
        }
    })
});

router.post('/signup', (req, res) => {
    
    
});

router.post('/login', (req, res) => {
    
    
});

module.exports = router