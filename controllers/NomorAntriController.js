import NomorAntri from "../models/NomorAntriModel.js";
import Pendaftaran from "../models/PendaftaranModel.js";

// Get All Nomor Antri
export const getAllNomorAntri = async (req, res) => {
    try {
        const nomorAntri = await NomorAntri.findAll();
        res.status(200).json(nomorAntri);
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: "Terjadi kesalahan saat mengambil semua nomor antri"
        });
    }
};

// Get Nomor Antri By ID
export const getNomorAntriById = async (req, res) => {
    try {
        const { id } = req.params;
        const nomorAntri = await NomorAntri.findByPk(id);
        if (!nomorAntri) {
            return res.status(404).json({ message: "Nomor antri tidak ditemukan" });
        }
        res.status(200).json(nomorAntri);
    } catch (error) {
        res.status(500).json({
            message: "Terjadi kesalahan saat mengambil nomor antri berdasarkan ID",
            error: error.message
        });
    }
};

// Create Nomor Antri
export const createNomorAntri = async (req, res) => {
    try {
        const { tanggal_antri, status, id_pendaftaran } = req.body;

        // Validasi input
        if (!tanggal_antri || !id_pendaftaran) {
            return res.status(400).json({
                message: "tanggal_antri dan id_pendaftaran harus diisi"
            });
        }

        // Cek apakah pendaftaran ada
        const pendaftaran = await Pendaftaran.findByPk(id_pendaftaran);
        if (!pendaftaran) {
            return res.status(404).json({
                message: "Pendaftaran tidak ditemukan"
            });
        }

        // Hitung nomor antri
        const lastNomorAntri = await NomorAntri.findOne({
            where: { tanggal_antri },
            order: [['nomor_antri', 'DESC']]
        });
        const nomor_antri = lastNomorAntri ? lastNomorAntri.nomor_antri + 1 : 1;

        const nomorAntri = await NomorAntri.create({
            tanggal_antri,
            status: status || 'menunggu',
            nomor_antri,
            id_pendaftaran
        });

        res.status(201).json({
            message: "Nomor antri berhasil dibuat",
            data: nomorAntri
        });
    } catch (error) {
        res.status(400).json({
            message: "Gagal membuat nomor antri",
            error: error.message
        });
    }
};

// Update Nomor Antri
export const updateNomorAntri = async (req, res) => {
    try {
        const { id } = req.params;
        const { tanggal_antri, status, nomor_antri, id_pendaftaran } = req.body;
        const [updated] = await NomorAntri.update({ tanggal_antri, status, nomor_antri, id_pendaftaran }, {
            where: { id }
        });
        if (updated) {
            const updatedNomorAntri = await NomorAntri.findByPk(id);
            res.status(200).json({
                message: "Nomor antri berhasil diperbarui",
                data: updatedNomorAntri
            });
        } else {
            res.status(404).json({ message: "Nomor antri tidak ditemukan" });
        }
    } catch (error) {
        res.status(400).json({
            error: error.message,
            message: "Gagal memperbarui nomor antri"
        });
    }
};

// Delete Nomor Antri
export const deleteNomorAntri = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await NomorAntri.destroy({ where: { id_nomor_antri: id } });
        if (deleted) {
            res.status(200).json({ message: `Nomor antri dengan ID ${id} berhasil dihapus` });
        } else {
            res.status(404).json({ message: "Nomor antri tidak ditemukan" });
        }
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: "Gagal menghapus nomor antri"
        });
    }
};
