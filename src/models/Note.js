const { model, Schema } = require('mongoose');

const NoteSchema = new Schema(
  {
    title: { type: String, required: [true, 'Title is required'] },
    description: { type: String, required: [true, 'Description is required'] },
    user: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

module.exports = model('Note', NoteSchema);
