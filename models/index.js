import db from "../connection.js";
import Dokter from "./DokterModel.js";
import Pasien from "./PasienModel.js";
import Pendaftaran from "./PendaftaranModel.js";
import NomorAntri from "./NomorAntriModel.js";
import Puskesmas from './PuskesmasModel.js';

// Relasi antar model
Pasien.hasMany(Pendaftaran, {
    foreignKey: "id_pasien",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

Pendaftaran.belongsTo(Pasien, {
    foreignKey: "id_pasien",
});

Dokter.hasMany(Pendaftaran, {
    foreignKey: "id_dokter",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

Pendaftaran.belongsTo(Dokter, {
    foreignKey: "id_dokter",
});

Pendaftaran.hasOne(NomorAntri, {
    foreignKey: "id_pendaftaran",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

NomorAntri.belongsTo(Pendaftaran, {
    foreignKey: "id_pendaftaran",
});

Puskesmas.hasMany(Pendaftaran, {
    foreignKey: "id_puskesmas",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

Pendaftaran.belongsTo(Puskesmas, {
    foreignKey: "id_puskesmas",
});

// Sinkronisasi database
// await db.sync({ force: true }); // Uncomment jika ingin menghapus dan membuat ulang tabel
await db.sync(); // Sinkronisasi tanpa menghapus data
