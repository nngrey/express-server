import express from 'express';
import * as noteController from '../controllers/note.server.controller';
import * as laneController from '../controllers/lane.server.controller';


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

export default router;
