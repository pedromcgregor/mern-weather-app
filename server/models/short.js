const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create short weather schema
const shortShema = new Schema(
    {
        city: String,
        dt: Number,
        sunrise: Number,
        sunset: Number,
        temp: {
               day: Number,
               min: Number ,
               max: Number,
               night: Number,
               eve: Number,
               morn: Number
             },
        humidity: Number,
        weather: {
             items: [
               {
                 id: Number,
                 main: String,
                 description: String,
                 icon: String
               }
             ]
           }
    });
     
    // {
    //    "type": "object",
    //     "properties": {
    //       "city": {
    //         "type": "string"
    //       },
    //       "dt": {
    //         "type": "number"
    //       },
    //       "sunrise": {
    //         "type": "number"
    //       },
    //       "sunset": {
    //         "type": "number"
    //       },
    //       "temp": {
    //         "type": "object",
    //         "properties": {
    //           "day": {
    //             "type": "number"
    //           },
    //           "min": {
    //             "type": "number"
    //           },
    //           "max": {
    //             "type": "number"
    //           },
    //           "night": {
    //             "type": "number"
    //           },
    //           "eve": {
    //             "type": "number"
    //           },
    //           "morn": {
    //             "type": "number"
    //           }
    //         },
    //         "required": [
    //           "day",
    //           "min",
    //           "max",
    //           "night",
    //           "eve",
    //           "morn"
    //         ]
    //       },
    //       "humidity": {
    //         "type": "number"
    //       },
    //       "weather": {
    //         "type": "array",
    //         "items": [
    //           {
    //             "type": "object",
    //             "properties": {
    //               "id": {
    //                 "type": "number"
    //               },
    //               "main": {
    //                 "type": "string"
    //               },
    //               "description": {
    //                 "type": "string"
    //               },
    //               "icon": {
    //                 "type": "string"
    //               }
    //             },
    //             "required": [
    //               "id",
    //               "main",
    //               "description",
    //               "icon"
    //             ]
    //           }
    //         ]
    //       }
    //     },
    //     "required": [
    //       "city",
    //       "dt",
    //       "sunrise",
    //       "sunset",
    //       "temp",
    //       "humidity",
    //       "weather"
    //     ]
    //   }



 const Short = mongoose.model('Short', shortShema);
 module.exports = Short;