const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

// Define the user schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  googleId: { type: String, required: true, unique: true }, 
  email: { type: String, required: true },
  picture: { type: String },
  branch: { type: String },
  collegeName :{type:String},
  isOnboarded: { type: Boolean, default: false },
  isParticipant: { type: Boolean, default: false }, 
  team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
  isTeamLeader: { type: Boolean, default: false }, 
});


userSchema.methods.generateJwtToken = function() {
  return jwt.sign(
    { id: this._id, email: this.email }, // Payload
    process.env.JWT_SECRET, // Secret key
    { expiresIn: '1h' } // Expiration time
  );
};


const User = mongoose.model('User', userSchema);

module.exports = User;
