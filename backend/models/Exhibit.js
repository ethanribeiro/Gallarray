const mongoose = require('mongoose');

// const imageSchema = new mongoose.Schema({
//     url: {type: String, required: true},
//     description: {type: String},
//     alt: {type: String, default:""} 
// });

const exhibitSchema = new mongoose.Schema({
    // image: [imageSchema],
    image: {type: String},
    title: {type: String, required: true},
    categories: {type: String, required: true},
    // categories: [String],
    price: {type: Number, required: true},
    artist: {type: String, required: true},
    // artist: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    // },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Exhibit', exhibitSchema);