import mongoose from 'mongoose';
var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  noteText:{
    type: String,
    default: "New entry"
  }
});
export default mongoose.model('Note', Schema);
