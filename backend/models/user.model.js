const mongoose= require('mongoose')

const UserSchema = new mongoose.schema({
    username: {type:String, required: true, unique: true},
    username: {type:String, required: true},
});
module.exports= mongoose.model('User', UserSchema);