import Sequelize from 'sequelize';
import db from '../config/db.js'

export const Reserva = db.define('reservas', {
    nombre: {
        type: Sequelize.STRING,
    },

    telefono:{
        type: Sequelize.STRING,
    },

    correo:{
        type: Sequelize.STRING,
    },

    comensales:{
        type: Sequelize.INTEGER,
    },

    fecha: {
        type: Sequelize.DATEONLY,
    },

    hora: {
        type: Sequelize.STRING,
    }

});