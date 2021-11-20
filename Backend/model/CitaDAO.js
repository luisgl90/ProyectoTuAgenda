const conexion = require("../DB/conexionDB");

//const citaSchema = conexion.Schema(array_estruct_tablaDB,array_config)
const citaSchema = conexion.Schema({
    hora: String,
    fecha: String,
    estado: String,
    precio: String,
    paciente: {
        _id: String,
        nombre: String,
        apellido: String,
        documento: String
    },
    medico: {
        _id: String,
        nombre: String,
        apellido: String,
        especialidad: String
    }
}, {
    collection: "citas",
    versionKey: false
});

//const personaDAO = conexion.model(nombre_coleccion,esquema);
const citaDAO = conexion.model("citas", citaSchema);

module.exports = citaDAO;