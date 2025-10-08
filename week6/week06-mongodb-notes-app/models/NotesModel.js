

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  content: {
    noteTitle: { type: String, required: true },
    noteDescription: { type: String, required: true },
    priority: { type: String, enum: ["LOW", "MEDIUM", "HIGH"], default: "LOW" },
    dateAdded: { type: String },
    dateUpdated: { type: String }
  }
});

module.exports = mongoose.model("Note", noteSchema);
