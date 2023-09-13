import Person from "../models/person.js";

export const createPerson = async (req, res) => {
    try {
        const { name, age, email, phone_no } = req.body;
        const person = new Person({ name, age, email, phone_no });

        await person.save();

        res.status(201).json(person);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const getPerson = async (req, res) => {
    try {
        const { id } = req.params;
        const person = await Person.findById(id);

        if (!person) {
            return res.status(404).json({ message: "Person not found" });
        }

        res.status(200).json(person);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const updatePerson = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age, email, phone_no } = req.body;

        const updatedPerson = await Person.findByIdAndUpdate(
            id,
            { name, age, email, phone_no },
            { new: true }
        );

        if (!updatedPerson) {
            return res.status(404).json({ message: "Person not found" });
        }

        res.json(updatedPerson)
    } catch {
        res.status(500).json({ error: error });
    }
}

export const deletePerson = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPerson = await Person.findByIdAndRemove(id);

        if (!deletedPerson) {
            return res.status(404).json({ error: 'Person not found' });
        }

        res.json({
            message: 'Person deleted successfully'
        })
    } catch {
        res.status(500).json({ error: 'Internal server error' })
    }
};