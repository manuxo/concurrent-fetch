const http = require('http');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('./middleware/cors');
//Init App
const PORT = process.env.PORT || 3000;
const app = express();
//Middleware
app.use(cors.allowCORS);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));
//Routes
const pokemonRouter = require('./routes/pokemon-router');
const itemRouter = require('./routes/item-router');
app.use('/api/pokemon',pokemonRouter);
app.use('/api/item',itemRouter);
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'views','home','index.html'));
});

//Create server and listen
const server = http.createServer(app);
server.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});