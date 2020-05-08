import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PalabrasPageRoutingModule } from './palabras-routing.module';

import { PalabrasPage } from './palabras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PalabrasPageRoutingModule
  ],
  declarations: [PalabrasPage]
})
export class PalabrasPageModule {}
