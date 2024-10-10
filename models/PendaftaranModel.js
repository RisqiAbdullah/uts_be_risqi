import { DataTypes } from "sequelize";
import db from "../connection.js";

const Pendaftaran = db.define(
    "Pendaftaran",
    {
        id_pendaftaran: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        id_pasien: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'pasien',
                key: 'id_pasien'
            }
        },
        id_dokter: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'dokter',
                key: 'id_dokter'
            }
        },
        tanggal_daftar: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        keluhan: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "pendaftaran",
        timestamps: true,
    }
);

export default Pendaftaran;
