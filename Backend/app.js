const express = require("express");
const cors = require("cors");
const citaCtrl = require("./controller/CitaCtrl");
const medicoCtrl = require("./controller/MedicoCtrl");

const app = express();
app.use(express.json());
app.use(cors());


//*************************************Citas*************************************/
app.get("/api/citas", async(request, response) => { //Esperando respuesta
    //console.log("Lista de citas!");
    try {
        const citas = await citaCtrl.listar(); //Espera hasta crear el objeto en la DB
        response.status(200).json(citas);
    } catch (error) {
        console.log("Get citas error: " + error);
        response.status(204).json("Get citas error: " + error);
    }
});

//async y await se usan para conexión asíncrona, 
app.post("/api/citas", async(request, response) => { //Esperando respuesta
    const cita = request.body;
    try {
        await citaCtrl.insertar(cita); //Espera hasta crear el objeto en la DB
        response.status(201).json("cita registrado exitosamente!");
    } catch (error) {
        console.log("Insert citas error: " + error);
        response.status(204).json("Insert citas error: " + error);
    }
});

app.put("/api/citas", async(request, response) => { //Esperando respuesta
    const cita = request.body;
    try {
        await citaCtrl.actualizar(cita); //Espera hasta crear el objeto en la DB
        response.status(200).json("Cita actualizada exitosamente!");
    } catch (error) {
        console.log("Update cita error: " + error);
        response.status(204).json("Update cita error: " + error);
    }
});


app.delete("/api/citas/:id", async(request, response) => { //Esperando respuesta
    const id = request.params.id;
    try {
        await citaCtrl.eliminar(id); //Espera hasta crear el objeto en la DB
        response.status(201).json("cita eliminada exitosamente!");
    } catch (error) {
        console.log("Delete cita error: " + error);
        response.status(204).json("Delete cita error: " + error);
    }
});

//*************************************Citas*************************************/


//************************************Médicos************************************/
app.get("/api/medicos/:especialidad", async(request, response) => { //Esperando respuesta
    const esp = request.params.especialidad;
    try {
        //const medicos = await medicoCtrl.listar(); //Espera hasta crear el objeto en la DB
        const medicos = await medicoCtrl.buscarEsp(esp); //Espera hasta crear el objeto en la DB
        response.status(200).json(medicos);
    } catch (error) {
        console.log("Get medicos error: " + error);
        response.status(400).send("Get medicos error: " + error);
    }
});

//async y await se usan para conexión asíncrona, 
app.post("/api/medicos", async(request, response) => { //Esperando respuesta
    const medico = request.body;
    try {
        await medicoCtrl.insertar(medico); //Espera hasta crear el objeto en la DB
        response.status(201).send("Médico registrado exitosamente!");
    } catch (error) {
        console.log("Insert médico error: " + error);
        response.status(400).send("Insert médico error: " + error);
    }
});

app.put("/api/medicos", async(request, response) => { //Esperando respuesta
    const medico = request.body;
    try {
        await medicoCtrl.actualizar(medico); //Espera hasta crear el objeto en la DB
        response.status(200).send("cita actualizado exitosamente!");
    } catch (error) {
        console.log("Update médico error: " + error);
        response.status(400).send("Update médico error: " + error);
    }
});


app.delete("/api/medicos/:id", async(request, response) => { //Esperando respuesta
    const id = request.params.id;
    try {
        await medicoCtrl.eliminar(id); //Espera hasta crear el objeto en la DB
        response.status(201).send("Médico eliminado exitosamente!");
    } catch (error) {
        console.log("Delete médico error: " + error);
        response.status(400).send("Delete médico error: " + error);
    }
});

//************************************Médicos************************************/


app.listen(1650, () => {
    console.log("Conectado al servidor!");
});