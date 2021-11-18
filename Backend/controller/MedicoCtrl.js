const medicoDAO = require("../model/MedicoDAO");

const MedicoCtrl = {};


MedicoCtrl.buscarEsp = async(espec) => {
    let medicos = medicoDAO.find({ especialidad: espec }, "nombre apellido");
    return medicos;
};

MedicoCtrl.listar = async() => {
    let medicos = medicoDAO.find();
    return medicos;
};

MedicoCtrl.insertar = async(medico) => {
    return await medicoDAO.create(medico);
};

MedicoCtrl.actualizar = async(medico) => {
    return await medicoDAO.findByIdAndUpdate(medico._id, medico);
};

MedicoCtrl.eliminar = async(id) => {
    return await medicoDAO.deleteOne({ _id: id });
};

module.exports = MedicoCtrl;