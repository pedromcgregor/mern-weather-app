const  express = require('express');
const  mongoose = require('mongoose');
const bodyParser = require('body-parser');

const city = require('./routes/api/cityWeather');

const app = express();

// Middleware 
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURL;

// Connect to Mongodb

mongoose
    .connect(db,{useNewUrlParser:true} )
    .then(()=> console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Use Route
app.use('/api/city', city);

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server started on port ${port}`));