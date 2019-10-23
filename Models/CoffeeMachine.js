const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuid = require('uuidv4');

const machineSchema = new Schema({
    _id: {
        type: String,
        default: uuid()
    },
    product_type: {
        type: String,
    },
    water_line_compatible: {
        type: Boolean
    }
}, { timestamps: true });

mongoose.model('Machines', machineSchema);

module.exports = mongoose.model('Machines');