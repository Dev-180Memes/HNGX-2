import express from "express";
import { createPerson, getPerson, updatePerson, deletePerson } from "../controllers/personControllers.js";

const router = express.Router();

router.post('/persons', createPerson);
router.get('/persons/:id', getPerson);
router.put('/persons/:id', updatePerson);
router.delete('/persons/:id', deletePerson);

export default router;