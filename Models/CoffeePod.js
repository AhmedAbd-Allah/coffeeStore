const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const podSchema = new Schema({
    _id: {
        type: String,
    },
    product_type: {
        type: String,
    },
    coffee_flavor: {
        type: String,
    },
    pack_size: {
        type: Number,
    }
}, { timestamps: true });

mongoose.model('Pods', podSchema);

module.exports = mongoose.model('Pods');