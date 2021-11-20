const citaDAO = require("../model/CitaDAO");

const CitaCtrl = {};



CitaCtrl.listar = async() => {
    let citas = citaDAO.find();
    return citas;
};

CitaCtrl.insertar = async(cita) => {
    delete cita._id;
    return await citaDAO.create(cita);
};

CitaCtrl.actualizar = async(cita) => {
    let id = cita._id;
    delete cita._id;
    return await citaDAO.findByIdAndUpdate(id, cita);
};

CitaCtrl.eliminar = async(id) => {
    return await citaDAO.deleteOne({ _id: id });
};

module.exports = CitaCtrl;