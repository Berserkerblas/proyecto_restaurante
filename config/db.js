//Importamos Sequelize es el ORM (objetos<->tablas)
import Sequelize from "sequelize";


const db = new Sequelize(process.env.CONEXION, {
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