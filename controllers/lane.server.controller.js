import mongoose from 'mongoose';
import Lane from '../models/lane.server.model';

export const getLanes = (req,res) => {
  Lane.find().exec((err,lanes) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
return res.json({'success':true,'message':'Lanes fetched successfully',lanes});
  });
}

export const addLane = (req,res) => {
  const newLane = new Lane(req.body);
  newLane.save((err,lane) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
return res.json({'success':true,'message':'Lane added successfully',lane});
  })
}

export const updateLane = (req,res) => {
  let body;
  if(req.body.notes){
    const notes = req.body.notes.split(",");
    body = {notes: notes}
  } else {
    body = req.body
  }
  Lane.findOneAndUpdate({ _id:req.body.id }, body, { new:true }, (err,lane) => {
    if(err){
    return res.json({'success':false,'message':'Some Error','error':err});
    }
    return res.json({'success':true,'message':'Updated successfully',lane});
  })
}

export const deleteLane = (req,res) => {
  Lane.findByIdAndRemove(req.params.id, (err,lane) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
  const message = lane == null ? "unknown" : lane.laneText
return res.json({'success':true,'message':message+' deleted successfully'});
  })
}
