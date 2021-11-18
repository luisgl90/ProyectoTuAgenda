const conexion = require("../DB/conexionDB");

//const medicoSchema = conexion.Schema(array_estruct_tablaDB,array_config)
const medicoSchema = conexion.Schema({
    nombre: String,
    apellido: String,
    especialidad: String,
    documento: Number,
    telefono: Number,
    direccion: String,
    email: String
}, {
    collection: "medicos",
    versionKey: false
});

//const personaDAO = conexion.model(nombre_coleccion,esquema);
const medicoDAO = conexion.model("medicos", medicoSchema);

module.exports = medicoDAO;