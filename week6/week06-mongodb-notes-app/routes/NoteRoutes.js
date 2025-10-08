const express = require('express');
const noteModel = require('../models/NotesModel.js');
const noteRoutes = express.Router();

// CREATE a new Note
noteRoutes.post('/', async (req, res) => {
    if (!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    try {
        const note = new noteModel(req.body);
        const savedNote = await note.save();
        res.status(201).json(savedNote);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

// GET all Notes
noteRoutes.get('/', async (req, res) => {
    try {
        const notes = await noteModel.find();
        res.status(200).json(notes);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

// GET a single Note by ID
noteRoutes.get('/:noteId', async (req, res) => {
    try {
        const note = await noteModel.findById(req.params.noteId);
        if (!note) {
            return res.status(404).send({ message: "Note not found" });
        }
        res.status(200).json(note);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

// UPDATE a Note by ID
noteRoutes.put('/:noteId', async (req, res) => {
    if (!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    try {
        const updatedNote = await noteModel.findByIdAndUpdate(
            req.params.noteId,
            req.body,
            { new: true }
        );
        if (!updatedNote) {
            return res.status(404).send({ message: "Note not found" });
        }
        res.status(200).json(updatedNote);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

// DELETE a Note by ID
noteRoutes.delete('/:noteId', async (req, res) => {
    try {
        const note = await noteModel.findById(req.params.noteId);
        if (!note) {
            return res.status(404).send({ message: "Note not found" });
        }

        await note.deleteOne(); 
        res.status(200).json({ message: "Note deleted successfully" });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});


module.exports = noteRoutes;