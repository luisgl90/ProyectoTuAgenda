import { CitasComponent } from './citas/citas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'citas', component: CitasComponent},
  {path: '**', redirectTo: 'citas'} //Ruta por defecto en  caso de que falle la página
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
