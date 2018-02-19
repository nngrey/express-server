import mongoose from 'mongoose';

var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  name:{
    type: String,
    default: "New column"
  },
  notes: Array
});
export default mongoose.model('Lane', Schema);
