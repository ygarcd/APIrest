const mongoose = require('mongoose');

const ReadingSchema = new mongoose.Schema({
    sensorId: String,
    Value: Number,
    unit: String,
    createdAt: { type: Date, default: Date.now }
});

// Exportamos el modelo, el nombre debe estar en singular
module.exports = mongoose.model('Reading', ReadingSchema);