'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: 'Home Page'
        },
        partials: {
            body: 'partial-index',
            nav: 'partial-nav'
        }
    })
})

module.exports = router
