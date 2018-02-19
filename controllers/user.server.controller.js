import mongoose from 'mongoose';
import User from '../models/user.server.model';

export const addUser = (req,res) => {
  if (req.body.email &&
    req.body.password &&
    req.body.passwordConf) {
    var userData = {
      email: req.body.email,
      password: req.body.password,
      passwordConf: req.body.passwordConf,
    }
    //use schema.create to insert data into the db
    const newUser = new User(req.body);

    newUser.save((err,user) => {
      if(err){
        console.log(err);
        return res.json({'success':false,'message':'Some Error'});
      }
  return res.json({'success':true,'message':'User added successfully',user});
    })
  }
}
