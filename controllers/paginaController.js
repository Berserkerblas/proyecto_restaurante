import {Plato} from "../models/Platos.js";
import {Reserva} from "../models/Reserva.js";


const paginaInicio = (req, res) => {
    res.render('inicio', {
        pagina: 'Inicio'
    })
}

const paginaCarta = async (req, res) => {
    //Consulta bbdd
    const platos = await Plato.findAll();
    console.log(platos);
    console.log('Platos cargados:', platos.length);

    res.render('carta', {
        pagina: 'Carta',
        platos: platos,
    })
}

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Conocenos'
    })
}

// Página de alérgenos:
const paginaCartaAlergenos = async (req, res) => {
    const {slug} = req.params;
    try{
        const resultado = await Plato.findOne({where: {slug: slug}});
        res.render('alergenos', {
            pagina: 'Alérgenos',
            resultado: resultado,
        })
    }catch(err){
        console.log(err);
    }
}

// Para el formulario:
const guardarReserva = async (req, res) => {
    const {nombre, correo, telefono, comensales, fecha, hora} = req.body;
    // Aquí no hago comprobaciones, ya que mis campos del formulario son required
    try{
        await Reserva.create({nombre:nombre, correo: correo, telefono: telefono, comensales: comensales, fecha: fecha, hora: hora})
        res.redirect('/reserva');
    } catch(error){
        console.log(error);
    }
}

// Anular reservas:

const paginaReserva = (req, res) => {
    res.render('reserva', {
        pagina: 'Reservas',
        anulada: req.query.anulada
    });
};

const anularReserva = async (req, res) => {
    try {
        const { nombre, correo, fecha } = req.body;

        const eliminadas = await Reserva.destroy({
            where: { nombre, correo, fecha }
        });

        if (eliminadas === 0) {
            return res.redirect('/reserva?anulada=0');
        }

        return res.redirect('/reserva?anulada=1');
    } catch (error) {
        console.error(error);
        return res.redirect('/reserva?anulada=error');
    }
};



export {
    paginaInicio,
    paginaCarta,
    paginaReserva,
    paginaNosotros,
    paginaCartaAlergenos,
    guardarReserva,
    anularReserva
}
