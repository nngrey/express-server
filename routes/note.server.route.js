import express from 'express';
import * as noteController from '../controllers/note.server.controller';
import * as laneController from '../controllers/lane.server.controller';
import * as userController from '../controllers/user.server.controller';



// get an instance of express router
const router = express.Router();

router.route('/')
     .get(noteController.getNotes)
     .post(noteController.addNote)
     .put(noteController.updateNote);

router.route('/:id')
      .delete(noteController.deleteNote);

router.route('/lanes')
     .get(laneController.getLanes)
     .post(laneController.addLane)
     .put(laneController.updateLane);

router.route('/lanes/:id')
      .delete(laneController.deleteLane);

router.route('/register')
      .post(userController.addUser);

router.route('/sign-in')
      .post(userController.signIn);

router.route('/sign-out')
      .get(userController.signOut);


export default router;
