import { Component, OnInit } from '@angular/core';
import { CitasService } from './service/citas.service'; // Importa el servicio de Citas
import { CitaTO } from '../interfaces/citasto.interface';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {

  constructor(private _citasService: CitasService) { }

  listaCitas : CitaTO[] = new Array<CitaTO>();  //Variable que guarda la lista de citas
  cita: CitaTO = new CitaTO();                  //Variable que guarda una cita

  ngOnInit(): void { //Ejecuta instrucciones al iniciar la página
    this.listarCitas();
  }

  listarCitas(){
    this._citasService.listarCitas().subscribe(
      data => {
        this.listaCitas = data;
      }
    )
  }

  limpiarFormulario(){
    this.cita = new CitaTO();
  }

  guardarCitas(){
    if (this.cita._id == "") {
      this._citasService.guardarCitas(this.cita).subscribe(
        data => {
          console.log(data);
          this.listarCitas();
          this.limpiarFormulario();
        }
      );
    } else {
      console.log("actualizarCitas -->")
      this._citasService.actualizarCitas(this.cita).subscribe(
        data => {
          console.log(data);
          this.listarCitas();
          this.limpiarFormulario();
        }
      );
    }
  }

  eliminarCitas(id: string){
    this._citasService.eliminarCitas(id).subscribe(
      data => {
        console.log(data);
        this.listarCitas();
      }
    );
  }

  mostrarCitas(cCita: CitaTO){
    this.cita = cCita;
  }

}
