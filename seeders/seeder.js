import Dokter from "../models/DokterModel.js";
import Pasien from "../models/PasienModel.js";
import Pendaftaran from "../models/PendaftaranModel.js";
import NomorAntri from "../models/NomorAntriModel.js";
import Puskesmas from "../models/PuskesmasModel.js";

const createSeeder = async () => {
    // await clean(); // Uncomment this line if you want to clean the database before seeding

    // Membuat Puskesmas
    const puskesmas = await Puskesmas.create({
        nama: "Puskesmas Sejahtera",
        alamat: "Jl. Kesehatan No. 1",
        no_telepon: "021-1234567",
        email: "puskesmas.sejahtera@example.com"
    });

    // Membuat Dokter
    const dokter = await Dokter.create({
        nama: "Dr. Alice Smith",
        spesialis: "Pediatri",
        no_telepon: "081234567891",
        email: "alice.smith@example.com",
        id_puskesmas: puskesmas.id_puskesmas
    });

    // Membuat Pasien
    const pasien = await Pasien.create({
        nama: "Budi Santoso",
        tanggal_lahir: "1990-01-01",
        alamat: "Jl. Contoh No. 123",
        no_telepon: "081234567890",
        jenis_kelamin: "Laki-laki",
        email: "budi.santoso@example.com"
    });

    // Membuat Pendaftaran
    const pendaftaran = await Pendaftaran.create({
        id_pasien: pasien.id_pasien,
        id_dokter: dokter.id_dokter,
        tanggal_daftar: "2024-01-01",
        keluhan: "Demam dan batuk",
        status: "menunggu"
    });

    // Membuat Nomor Antri
    const nomorAntri = await NomorAntri.create({
        nomor_antri: 1,
        tanggal_antri: "2024-01-01",
        status: "menunggu",
        id_pendaftaran: pendaftaran.id_pendaftaran
    });

    return { puskesmas, dokter, pasien, pendaftaran, nomorAntri };
};

const seedData = async () => {
    try {
        const data = await createSeeder();
        console.log(data);
    } catch (error) {
        console.error("Error seeding data:", error);
    }
};

seedData();
