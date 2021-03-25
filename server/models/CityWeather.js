const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create CityWeather schema
const CityWeatherShema = new Schema({
    city:{
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});
module.exports = CityWeather = mongoose.model('cityWeather', CityWeatherShema);