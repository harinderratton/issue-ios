import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FragmentosPageRoutingModule } from './fragmentos-routing.module';

import { FragmentosPage } from './fragmentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FragmentosPageRoutingModule
  ],
  declarations: [FragmentosPage]
})
export class FragmentosPageModule {}
