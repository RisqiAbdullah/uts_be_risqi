import { DataTypes } from "sequelize";
import db from "../connection.js";

const Pasien = db.define(
    "Pasien",
    {
        id_pasien: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nama: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tanggal_lahir: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        alamat: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        no_telepon: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        jenis_kelamin: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isEmail: true,
            },
        },
    },
    {
        tableName: "pasien",
        timestamps: true,
    }
);

export default Pasien;
