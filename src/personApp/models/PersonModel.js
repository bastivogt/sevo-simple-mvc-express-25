const { DataTypes } = require("sequelize");
const db = require("../../../db");

const PersonModel = db.define("person", {
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    published: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
    },
});

module.exports = PersonModel;