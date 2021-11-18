const conexion = require("../DB/conexionDB");

//const pacienteSchema = conexion.Schema(array_estruct_tablaDB,array_config)
const pacienteSchema = conexion.Schema({
    nombre: String,
    apellido: String,
    documento: Number,
    fechaNac: String, //cambiar a Date
    rh: String,
    peso: Number,
    estatura: Number,
    telefono: Number,
    direccion: String,
    email: String,
    prioridad: String,
    user: String,
    pwd: String
}, {
    collection: "pacientes",
    versionKey: false
});

//const personaDAO = conexion.model(nombre_coleccion,esquema);
const pacienteDAO = conexion.model("pacientes", pacienteSchema);

module.exports = pacienteDAO;