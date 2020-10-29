const mongoose = require('mongoose');

const colorValidator = (v) => (/^#([0-9a-f]{6})$/i).test(v);

const personalBudgetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    related_value: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        validator: [colorValidator, 'Not a valid color'],
        required: true
    }
    
}, {collection: 'pb'});

module.exports = mongoose.model('pb', personalBudgetSchema);