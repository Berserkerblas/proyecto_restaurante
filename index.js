import 'dotenv/config';

// Esta es la forma actual: no usamos require sino import. Ya que node trabaja ahora con modulos.
import express from 'express';

// Importamos el router:
import router from "./routers/index.js";

// Importamos para que vaya el acceso a la bbdd:
import db from "./config/db.js";

// Creamos la intancia de la aplicacion express:
const app = express();

//Conectar a la bbdd:
db.authenticate()
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err => console.log(err));

// Definimos el puerto en el que el servidor va a escuchar:
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

// Habilitamos PUG:
app.set('view engine', 'pug');

//Middleware global:
app.use((req,res,next)=>{
    const year = new Date().getFullYear();
    res.locals.year = year;
    res.locals.nombrePagina =  'Deliciosso';
    next();
});

// Definimos la carpeta pública -> css, imganenes, el dump de la bbdd...
app.use(express.static('public'));

// Para que vaya el formulario (no se pq hace falta):
app.use(express.urlencoded({ extended: true }));

// Agregamos el router:
app.use('/', router);


