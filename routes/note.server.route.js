import express from 'express';
import * as noteController from '../controllers/note.server.controller';

// get an instance of express router
const router = express.Router();

router.route('/')
     .get(noteController.getNotes)
     .post(noteController.addNote)
     .put(noteController.updateNote);

router.route('/:id')
      .delete(noteController.deleteNote);

export default router;
