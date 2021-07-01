'use strict';

const express = require('express');
const router = express.Router();
const TodoModel = require('../models/TodoModel')

router.get('/', async(req, res) => {
    const{user_id} = req.session
    console.log({user_id})
    if (!!user_id) {
        const taskList = await TodoModel.getAllTasks(user_id);
        const name = req.session.name
        const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)
        console.log({taskList})
        res.render('template', {
            locals: {
                title: 'Todo List',
                taskList,
                is_logged_in: req.session.is_logged_in,
                user_id,
                name: nameCapitalized
            },
            partials: {
                body: 'partial-todo',
                nav: 'partial-nav'
            }
        })
    } else{
        res.redirect('/');
    }

   
});

router.post('/add', async (req, res) => {
    const { task_content, user_id } = req.body;
    const response = await TodoModel.addTask( task_content, user_id );
    res.redirect('/todos');
});

router.post('/update', async (req, res) => {
    const { task_id, is_complete } = req.body;
    const response = await TodoModel.updateTask( task_id, is_complete);
    res.redirect('/todos')
});

module.exports = router