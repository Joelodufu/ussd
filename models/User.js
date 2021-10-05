const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    harrawayPin: Number,
    accountNumber: Number,
    accountName: String
})
const User = mongoose.model('User', userSchema);
module.exports = User