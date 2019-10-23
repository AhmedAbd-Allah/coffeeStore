const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuid = require('uuidv4');

const podSchema = new Schema({
    _id: {
        type: String,
        default: uuid()
    },
    product_type: {
        type: String,
    },
    coffee_flavor: {
        type: String,
    },
    pack_size: {
        type: String,
    }
}, { timestamps: true });

mongoose.model('Pods', podSchema);

module.exports = mongoose.model('Pods');