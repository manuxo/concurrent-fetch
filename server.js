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
app.use('/api/pokemon',pokemonRouter);
//Create server and listen
const server = http.createServer(app);
server.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});