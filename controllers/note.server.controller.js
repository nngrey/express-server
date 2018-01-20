import mongoose from 'mongoose';
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
    return res.json({'success':true,'message':'Updated successfully',note});
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
