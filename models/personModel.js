const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({

    gender: {
        type: String,
    },
    name: {
        title: {
            type: String,
        },
        first: {
            type: String,
        },
        last: {
            type: String,
        },
        _id: false,
    },
    location: {
        street: {
            type: String,
        },
        city: {
            type: String,
        },
        state: {
            type: String
        },
        postcode: {
            type: String,
        },
        coordinates: {
            latitude: String,
            longitude: String,
            _id: false,
        },
        
        timezone: {
            offset: String,
            description: String,
            _id: false,
        },
        _id: false,

    },
    email: String,

    login: {
        _id: false,
        uuid: String,
        username: String,
        password: String,
        salt: String,
        md5: String,
        sha1: String,
        sha256: String
    },

    dob: {
        _id: false,
        date: Date,
        age: Number,
    },
    registered: {
        _id: false,
        date: Date,
        age: Number,
    },
    phone: String,
    cell: String,
    // id: {
    //     // _id: false,
    //     name: String,
    //     value: String,
    // },
    picture: {
        _id: false,
        large: String,
        medium: String,
        thumbnail: String
    },
    nat: String

});

module.exports = Person = mongoose.model("mongoTask", personSchema);