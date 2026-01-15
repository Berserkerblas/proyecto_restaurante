// Aquí tambien tenemos que importar express:
import express from 'express';
import {paginaInicio, paginaCarta, paginaReserva, paginaNosotros, paginaCartaAlergenos, guardarReserva, anularReserva} from "../controllers/paginaController.js";

// Creamos una variable que contendrná las rutas de este archivo:
const router = express.Router();

// Página de inicio (principal):
router.get('/', paginaInicio);

// Carta del restaurante:
router.get('/carta', paginaCarta);

// Informacion de reserva y formulario:
router.get('/reserva', paginaReserva);

// Información del restaurante:
router.get('/nosotros', paginaNosotros);

// Para ir a las diferentes páginas de alérgenos (carta):
router.get('/carta/:slug', paginaCartaAlergenos);

// Procesar el formulario:
router.post('/reserva', guardarReserva);

// Anular una reserva:
router.post('/reserva/anular', anularReserva);

export default router;