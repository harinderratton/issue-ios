import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplepayPageRoutingModule } from './applepay-routing.module';

import { ApplepayPage } from './applepay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplepayPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ApplepayPage]
})
export class ApplepayPageModule {}
