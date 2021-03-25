const express = require('express');
const router = express.Router();

// CityWeather Model
const City = require('../../models/CityWeather');

//@route GET api/city
//@desc Gell all Cities
router.get('/', (req, res)=>{
    City.find()
    .sort({date: -1})
    .then(city => res.json(city))
});


//@route POST api/city
//@desc Create City
router.post('/', (req, res)=>{
    const newCity = new City({
        city: req.body.city,
        date: req.body.date
    });
    newCity.save()
    .then(city => res.json(city));
});

//@route DELETE api/city/:id
//@desc delete a City
router.delete('/:id', (req, res)=>{
  City.findById(req.params.id)
    .then(city => item.remove()
    .then(()=> res.json({ sucess: true})))
    .catch(err => res.status(404).json({sucess: false}));
});

module.exports = router;