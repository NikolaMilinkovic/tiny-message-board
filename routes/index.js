const express = require('express');
const router = express.Router();
const Message = require('../db_schemas/message');
const { connection } = require('mongoose');
const formatter = new Intl.DateTimeFormat('sr-RS', { day: '2-digit', month: '2-digit', year: 'numeric' });

/* GET home page. */
router.get('/', async(req, res, next) => {
  try {
    const messages = await Message.find();
    console.log(messages)
    res.render('index', { title: 'Mini Messageboard', messages: messages });

  } catch (error){

    console.error('Error fetching messages: ', error);
    res.status(500).send('Error fetching messages');
  }
});

router.post('/', async (req, res) => {
  try{
    const text = req.body.message;
    const name = req.body.username;
    const added = new Date();

    const message = new Message({text, name, added});
    await message.save();

  } catch (error){
    console.error('Writing to DB failed: ', error);
  }

  res.redirect('/');
})

module.exports = router;
