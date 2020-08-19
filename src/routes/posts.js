const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//GET
router.get('/', (req, res) => {
    res.send("we are on posts route");
});

router.get('/1', (req, res) => {
    res.send("we are on post 1");
});

//POST
router.post('/', (req, res) => {
    const { title, description } = req.params;
    //console.log(title);
    if(title && description){
        res.send("Recieved");
        console.log("Recieved");
    }else{
        res.send("Wrong request");
        console.log("Wrong request");
    }
});
module.exports = router;