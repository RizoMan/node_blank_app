const express = require('express');
const mongoose = require('mongoose');

//Initialize
const app = express();
require('./database');

//Middlewares
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

//Routes
app.get('/', (req,res) => {
    res.send("We aasjdflkajdsfnp¿");
});

//Server is listening
app.listen(3000);