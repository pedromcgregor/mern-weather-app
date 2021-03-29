const express = require('express');
const router = express.Router();

// shortr Model the Schema
const short = require('../../models/short')

//@route GET api/city
//@desc Gell all Cities
router.get('/', (req, res)=>{
    short.find()
    .sort({city: -1})       // descending
    .then(short => res.json(short))
    .catch(err => console.log(err))
    
});

module.exports = router;