//Importamos Sequelize es el ORM (objetos<->tablas)
import Sequelize from "sequelize";


const db = new Sequelize(process.env.BASEDEDATOS, process.env.USUARIO, process.env.CONTRASENA, {
    host: process.env.HOST,
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

export default db;