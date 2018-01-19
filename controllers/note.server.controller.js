// ./express-server/controllers/note.server.controller.js
import mongoose from 'mongoose';
//import models
import Note from '../models/note.server.model';
export const getNotes = (req,res) => {
  Note.find().exec((err,notes) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
return res.json({'success':true,'message':'Notes fetched successfully',notes});
  });
}
export const addNote = (req,res) => {
  console.log("***"+req.body);
  const newNote = new Note(req.body);
  newNote.save((err,note) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
return res.json({'success':true,'message':'Note added successfully',note});
  })
}
export const updateNote = (req,res) => {
  Note.findOneAndUpdate({ _id:req.body.id }, req.body, { new:true }, (err,note) => {
    if(err){
    return res.json({'success':false,'message':'Some Error','error':err});
    }
    console.log(note);
    return res.json({'success':true,'message':'Updated successfully',note});
  })
}
export const getNote = (req,res) => {
  Note.find({_id:req.params.id}).exec((err,note) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    if(note.length){
      return res.json({'success':true,'message':'Note fetched by id successfully',note});
    }
    else{
      return res.json({'success':false,'message':'Note with the given id not found'});
    }
  })
}
export const deleteNote = (req,res) => {
  Note.findByIdAndRemove(req.params.id, (err,note) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
return res.json({'success':true,'message':note.noteText+' deleted successfully'});
  })
}
