import Pasien from "../models/PasienModel.js";

// Get All Pasien
export const getAllPasien = async (req, res) => {
    try {
        const pasien = await Pasien.findAll();
        res.status(200).json(pasien);
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: "Terjadi kesalahan saat mengambil semua data Pasien"
        });
    }
};

// Get Pasien By ID
export const getPasienById = async (req, res) => {
    try {
        const { id } = req.params;
        const pasien = await Pasien.findByPk(id);
        if (!pasien) {
            return res.status(404).json({ message: "Pasien tidak ditemukan" });
        }
        res.status(200).json(pasien);
    } catch (error) {
        res.status(500).json({
            message: "Terjadi kesalahan saat mengambil pasien berdasarkan ID",
            error: error.message
        });
    }
};

// Create Pasien
export const createPasien = async (req, res) => {
    try {
        const { nama, tanggal_lahir, alamat, no_telepon, jenis_kelamin, email } = req.body;
        const pasien = await Pasien.create({ 
            nama, 
            tanggal_lahir, 
            alamat, 
            no_telepon, 
            jenis_kelamin,
            email
        });
        res.status(201).json({
            message: "Pasien berhasil dibuat",
            data: pasien
        });
    } catch (error) {
        res.status(400).json({
            message: "Gagal membuat pasien",
            error: error.message
        });
    }
};

// Update Pasien
export const updatePasien = async (req, res) => {
    try {
        const { id } = req.params;
        const { nama, tanggal_lahir, alamat, no_telepon, jenis_kelamin, email } = req.body;
        
        const pasien = await Pasien.findByPk(id);
        if (!pasien) {
            return res.status(404).json({ message: "Pasien tidak ditemukan" });
        }

        await pasien.update({ 
            nama, 
            tanggal_lahir, 
            alamat, 
            no_telepon, 
            jenis_kelamin,
            email
        });

        const updatedPasien = await Pasien.findByPk(id);
        res.status(200).json({
            message: "Data Pasien berhasil diperbarui",
            data: updatedPasien
        });
    } catch (error) {
        res.status(400).json({
            message: "Gagal memperbarui data Pasien",
            error: error.message
        });
    }
};

// Delete Pasien
export const deletePasien = async (req, res) => {
    try {
        const { id } = req.params;
        const pasien = await Pasien.findByPk(id);
        if (!pasien) {
            return res.status(404).json({ message: "Pasien tidak ditemukan" });
        }
        await pasien.destroy();
        res.status(200).json({ message: `Pasien dengan ID ${id} berhasil dihapus` });
    } catch (error) {
        res.status(400).json({
            message: "Gagal menghapus Pasien",
            error: error.message
        });
    }
};
