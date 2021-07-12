const mongoose = require("mongoose");

const friendSchema = new mongoose.Schema({
    name: String,
    hobbies: Array,
    age: Number,
    examScore: [
        {
            _id: false,
            difficulty: Number,
            score: Number
        },
    ],

});

module.exports = Friend = mongoose.model("friends", friendSchema);