import express from "express";
import {
    createDokter,
    deleteDokter,
    getAllDokter,
    getDokterById,
    updateDokter
} from "../controllers/DokterController.js";

import {
    createPasien,
    deletePasien,
    getAllPasien,
    getPasienById,
    updatePasien
} from "../controllers/PasienController.js";

import {
    createPendaftaran,
    deletePendaftaran,
    getAllPendaftaran,
    getPendaftaranById,
    updatePendaftaran
} from "../controllers/PendaftaranController.js";

import {
    createNomorAntri,
    deleteNomorAntri,
    getAllNomorAntri,
    getNomorAntriById,
    updateNomorAntri
} from "../controllers/NomorAntriController.js";

import {
    getAllPuskesmas,
    getPuskesmasById,
    createPuskesmas,
    updatePuskesmas,
    deletePuskesmas
} from "../controllers/PuskesmasController.js";

const router = express.Router();

// Rute untuk Dokter sudah dicheck
router.get("/dokter", getAllDokter);
router.get("/dokter/:id", getDokterById);
router.post("/dokter", createDokter);
router.put("/dokter/:id", updateDokter);
router.delete("/dokter/:id", deleteDokter);

// Rute untuk Pasien sudah dicheck
router.get("/pasien", getAllPasien);
router.get("/pasien/:id", getPasienById);
router.post("/pasien", createPasien);
router.put("/pasien/:id", updatePasien);
router.delete("/pasien/:id", deletePasien);

// Rute untuk Pendaftaran
router.get("/pendaftaran", getAllPendaftaran);
router.get("/pendaftaran/:id", getPendaftaranById);
router.post("/pendaftaran", createPendaftaran);
router.put("/pendaftaran/:id", updatePendaftaran);
router.delete("/pendaftaran/:id", deletePendaftaran);

// Rute untuk Antri sudah dicheck
router.get("/antri", getAllNomorAntri);
router.get("/antri/:id", getNomorAntriById);
router.post("/antri", createNomorAntri);
router.put("/antri/:id", updateNomorAntri);
router.delete("/antri/:id", deleteNomorAntri);

// Rute untuk Puskesmas
router.get("/puskesmas", getAllPuskesmas);
router.get("/puskesmas/:id", getPuskesmasById);
router.post("/puskesmas", createPuskesmas);
router.put("/puskesmas/:id", updatePuskesmas);
router.delete("/puskesmas/:id", deletePuskesmas);

export default router;
