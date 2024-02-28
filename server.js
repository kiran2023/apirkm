require('dotenv').config();

process.on('unhandledRejection', (error) => {
  server.close(() => {
    process.exit();
  });
});

process.on('uncaughtException', (error) => {  
  process.exit(); 
})

const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect(process.env.CONN_STRING, {
  useNewUrlParser:true  
}).then(()=> console.log("Connected to Cloud Database") ).catch((error)=>console.log(`Error occurred - ${error}`));

const port = process.env.PORT ;
app.listen(port, () => console.log("Server Started and Listening."));