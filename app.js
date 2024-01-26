const express = require('express');
const app = express();
const productsRouter = require('./routes/productsRoutes');
const authRouter = require('./routes/authRoutes')
const customError = require('./utils/customError');
const errorController = require('./controllers/errorController');
const cors = require('cors');
const path = require("path");

var corsOptions = {
    origin: 'https://rkmapi-production.up.railway.app/',
    methods: 'GET, POST, PUT, PATCH, DELETE, HEAD',
    credentials: true,
}
app.use(cors(corsOptions));
app.use(express.json()); 

app.use('/', express.static(path.join(__dirname,'./public/mainPage')));
app.use('/products', express.static(path.join(__dirname,'./public/products/')));
app.use('/api/v1/products', productsRouter);
app.use('/api/v1', authRouter);

app.all("*", (request, response, next)=>{
    const error = new customError(`Page Not Found for the Requested URL ${request.url}`, 404); 
    next(error);
});

app.use(errorController);

module.exports = app;
