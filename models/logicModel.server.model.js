import mongoose from 'mongoose';

var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  name:{
    type: String,
    default: "New Logic Model"
  },
  description:{
    type: String,
    default: "This is a logic model."
  },
  userId: String
});
export default mongoose.model('Note', Schema);
