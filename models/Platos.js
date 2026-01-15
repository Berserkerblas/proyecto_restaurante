import Sequelize from 'sequelize';
import db from '../config/db.js'

export const Plato = db.define('platos', {
    nombre: {
        type: Sequelize.STRING,
    },

    precio: {
        type: Sequelize.FLOAT,
    },

    descripcion: {
        type: Sequelize.STRING,
    },

    imagen: {
        type: Sequelize.STRING,
    },

    slug:{
        type: Sequelize.STRING,
    }
});