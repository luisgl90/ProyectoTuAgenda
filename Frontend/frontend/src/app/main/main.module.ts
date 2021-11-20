import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { CitasComponent } from './citas/citas.component';
import { CitasService } from './citas/service/citas.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CitasComponent
  ],
  providers:[
    CitasService
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
