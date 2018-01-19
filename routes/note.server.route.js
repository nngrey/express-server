// ./express-server/routes/note.server.route.js
import express from 'express';
//import controller file
import * as noteController from '../controllers/note.server.controller';
// get an instance of express router
const router = express.Router();
router.route('/')
     .get(noteController.getNotes)
     .post(noteController.addNote)
     .put(noteController.updateNote);
router.route('/:id')
      .get(noteController.getNote)
      .delete(noteController.deleteNote);
export default router;
