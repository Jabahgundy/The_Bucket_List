'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: 'Todo List'
        },
        partials: {
            body: 'partial-todo'
        }
    })
})

module.exports = router