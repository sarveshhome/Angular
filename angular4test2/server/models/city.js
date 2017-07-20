let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CitySchema = new Schema({
    name: String
});

let City = module.exports = mongoose.model("City", CitySchema);


//http://localhost:3120/api/city