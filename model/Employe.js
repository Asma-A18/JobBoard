
const mongoose = require('mongoose');

const EmpSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
 
  status: {
    type: String,
     required: true,
  },
  skills: {
    type: [String]
    // required: true,
  },
  bio: {
    type: String,
  },
  experience: [
    {
      title: {
        type: String,
        required: true,
      },
      company: {
        type: String,
        required: true,
      },
      location: {
        type: String,
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false,
      },
      description: {
        type: String,
      },
    },
  ],
 
});



 

module.exports = Emp = mongoose.model('Emp', EmpSchema);

