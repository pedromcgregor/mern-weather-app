
const  express = require('express');
const  mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Schema
const short = require('./models/short');

const app = express();

// Middleware 
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURL;

// Connect to Mongodb
mongoose
    .connect(db,{useNewUrlParser:true, useUnifiedTopology: true} )
    .then(()=> console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.use(express.urlencoded({extended: true}))


///@ route /feels
///@ desc Get all Cities Forecast
app.get('/feels', (req, res)=>{
    short.find()
    .then(short => res.json(short))
    .catch(err => console.log(err))
    
});

///@Get one city forecast by id
/// Route /feels/606118038dc573357cf00d17
app.get('/feels/:id', (req, res)=>{
    short.findById(req.params.id)
    .then(short => res.json(short))
    .catch(err => console.log(err))
    
});


///@ route Get one city forecast
///@ feels/?city=London
app.get('/feels/:city', (req, res)=>{
    short.findOne(req.params.city)
    .then(short => res.json(short))
    .catch(err => console.log(err));
});


///@ route add city weather
app.delete('/deleteCity/:id', (req, res) => {
   short.findByIdAndDelete(req.params.id)
    .then(result => {
        res.json({ sucess: true})
    })
    .catch(err => res.json({sucess: false}))
    
})

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server started on port ${port}`));