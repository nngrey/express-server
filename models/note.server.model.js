import mongoose from 'mongoose';
var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  name:{
    type: String,
    default: "New entry"
  },
  laneId: String
});
export default mongoose.model('Note', Schema);
