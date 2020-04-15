const { Router } = require('express');

const router = Router();

const {
  renderNoteForm,
  CreateNewNote,
  renderNotes,
  renderEditForm,
  updateNotes,
  deleteNotes,
} = require('../controllers/notes.controllers');

const { isAuthenticated } = require('../helpers/auth');
router.get('/notes', isAuthenticated, renderNotes);
router.get('/notes/add', isAuthenticated, renderNoteForm);
router.post('/notes/new-note', isAuthenticated, CreateNewNote);
router.get('/notes/edit/:id', isAuthenticated, renderEditForm);
router.put('/notes/edit/:id', isAuthenticated, updateNotes);
router.delete('/notes/delete/:id', isAuthenticated, deleteNotes);
module.exports = router;
