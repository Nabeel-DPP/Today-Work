import express from 'express';
import mongoose from 'mongoose';
import { Distributor } from '../models/Distributor.js'; // Assuming Distributor model is already defined
const router = express.Router();

// CREATE: Add a new distributor entry
router.post('/', async (req, res) => {
  try {
    const newDist = new Distributor(req.body); 
    console.log("Insert Request Reached at Route", newDist);
    await newDist.validate();
    const savedDist = await newDist.save();
    console.log("Confirmation of Save:", savedDist);
    res.status(201).json(savedDist); // Respond with the saved distributor object
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


// This is also a method to create and Store document in the Database

// router.post('/', async (req, res) => {
//   try {
//     const savedDist = await Distributor.create(req.body);  // Insert one document
//     console.log("Confirmation of Save:", savedDist);
    
//     res.status(201).json(savedDist);
//   } catch (err) {
//     console.error("Error creating document:", err);
//     res.status(400).json({ message: err.message });
//   }
// });






// READ: Get all distributor entries
router.get('/', async (req, res) => {
  try {
    const distributors = await Distributor.find();
    res.status(200).json(distributors); // Respond with the list of distributors
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ: Get a specific distributor entry by ID
router.get('/:id', async (req, res) => {
  try {
    const distributor = await Distributor.findById(req.params.id);
    if (!distributor) return res.status(404).json({ message: 'Distributor not found' });
    res.status(200).json(distributor); // Respond with the specific distributor object
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE: Update an existing distributor entry by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedDist = await Distributor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDist) return res.status(404).json({ message: 'Distributor not found' });
    console.log("Update Confirmation:", updatedDist);
    res.status(200).json(updatedDist); // Respond with the updated distributor object
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE: Delete a distributor entry by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedDist = await Distributor.findByIdAndDelete(req.params.id);
    if (!deletedDist) return res.status(404).json({ message: 'Distributor not found' });
    console.log("Deletion Confirmation:", deletedDist);
    res.status(200).json({ message: 'Distributor deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
