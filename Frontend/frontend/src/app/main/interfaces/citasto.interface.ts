export interface ICitaTO{
  _id: String;
  hora: String;
  fecha: String;
  estado: String;
  precio: String;
  paciente: {
    nombre: String;
    apellido: String;
    documento: String;
  };
  medico: {
    nombre: String;
    apellido: String;
    especialidad: String;
  };
}

export class CitaTO implements ICitaTO{
  public _id = "";
  public hora = "";
  public fecha = "";
  public estado = "";
  public precio = "";
  public paciente = { nombre: "",  apellido: "", documento: ""};
  public medico = { nombre: "",  apellido: "", especialidad: ""};
}
