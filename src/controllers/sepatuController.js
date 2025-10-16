import { SepatuModel } from "../models/sepatuModel.js";

export const SepatuController = {
    async getAll(req, res) {
        try {
            const { status } = req.query;
            const sepatu = await SepatuModel.getAll(status);
            res.json(sepatu);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async getById(req, res) {
        try {
            const sepatu = await SepatuModel.getById(req.params.id);
            res.json(sepatu);
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    },

    async create(req, res) {
        try {
            const sepatu = await SepatuModel.create(req.body);
            res.status(201).json({ message: "Data sepatu berhasil ditambahkan.", sepatu });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async update(req, res) {
        try {
            const updated = await SepatuModel.update(req.params.id, req.body);
            res.json({ message: "Status sepatu berhasil diperbarui.", updated });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async remove(req, res) {
        try {
            const result = await SepatuModel.remove(req.params.id);
            res.json(result);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },
};
