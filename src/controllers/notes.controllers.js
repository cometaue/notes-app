const NotesCtrls = {};
const Note = require('../models/Note');

NotesCtrls.renderNoteForm = (req, res) => {
  console.log(req.user);

  res.render('notes/new-note.hbs');
};

NotesCtrls.CreateNewNote = async (req, res) => {
  const { title, description } = req.body;
  const newNote = new Note({ title, description });
  newNote.user = req.user.id;
  await newNote
    .save()
    .then(console.log('aprobed'))
    .catch((err) => console.log(err));
  req.flash('success_msg', 'Note added Successfully');
  res.redirect('/notes');
};
NotesCtrls.renderNotes = async (req, res) => {
  const notes = await Note.find({ user: req.user.id }).lean();
  res.render('notes/all-notes.hbs', { notes });
};

NotesCtrls.renderEditForm = async (req, res) => {
  const noteEdit = await Note.findById(req.params.id);

  if (noteEdit.user != req.user.id) {
    req.flash('error_msg', 'Not Authorized');
    return res.redirect('/notes');
  }
  const reEdit = {
    title: noteEdit.title,
    desc: noteEdit.description,
    id: noteEdit._id,
  };
  res.render('notes/edit-form.hbs', { reEdit });
};

NotesCtrls.updateNotes = async (req, res) => {
  console.log(req.body.title);

  const { title, description } = req.body;
  await Note.findByIdAndUpdate(req.params.id, { title, description });
  req.flash('success_msg', 'Note updated Successfully');
  res.redirect('/notes');
};

NotesCtrls.deleteNotes = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  req.flash('success_msg', 'Note deleted Successfully');
  res.redirect('/notes');
};
module.exports = NotesCtrls;
