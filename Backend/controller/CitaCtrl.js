const citaDAO = require("../model/CitaDAO");

const CitaCtrl = {};



CitaCtrl.listar = async() => {
    let citas = citaDAO.find();
    return citas;
};

CitaCtrl.insertar = async(cita) => {
    return await citaDAO.create(cita);
};

CitaCtrl.actualizar = async(cita) => {
    return await citaDAO.findByIdAndUpdate(cita._id, cita);
};

CitaCtrl.eliminar = async(id) => {
    return await citaDAO.deleteOne({ _id: id });
};

module.exports = CitaCtrl;