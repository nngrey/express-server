import mongoose from 'mongoose';
import User from '../models/user.server.model';

export const addUser = (req,res) => {
  if (req.body.email && req.body.password) {
    var userData = {
      email: req.body.email,
      password: req.body.password
    }
    //use schema.create to insert data into the db
    const newUser = new User(req.body);

    newUser.save((err,user) => {
      if(err){
        return res.json({'success':false,'message':'Some Error'});
      }
  return res.json({'success':true,'message':'User added successfully',user});
    })
  }
}

export const signIn = (req,res) => {
  console.log(User);
  if (req.body.signInEmail && req.body.signInPassword) {
    User.authenticate(req.body.signInEmail, req.body.signInPassword, function (error, user) {
      if (error || !user) {
        var err = new Error('Wrong email or password.');
        err.status = 401;
        return next(err);
      } else {
        req.session.userId = user._id;
        return res.json({'success':true,'message':'User authenticated', user});
      }
    });
  }
}

// GET for logout logout
export const signOut = (req, res, next) => {
  if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      } else {
        return res.json({'success':true,'message':'User signed out'});
      }
    });
  }
}
