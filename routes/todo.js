'use strict';

const express = require('express');
const router = express.Router();

router.get('/:userId?', async(req, res) => {
    const{userId} =req.params
    if (!!userId) {
        
        const taskList = await TodoModel.getAllTasks( userId);
        res.render('template', {
            locals: {
                title: 'Todo List'
            },
            partials: {
                body: 'partial-todo'
            }
        })
    } else{
        res.redirect('/');
        
    }

   
});

router.post('/addTodo', async (req, res) => {
    const { task_content, user_id } = req.body;
    const response = await TodoModel.addTask( task_content, user_id );
    res.sendStatus(200);
}),
module.exports = router