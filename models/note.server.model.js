import mongoose from 'mongoose';
var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  name:{
    type: String,
    default: "New item"
  },
  laneId: String,
  uuid: String
});
export default mongoose.model('Note', Schema);
