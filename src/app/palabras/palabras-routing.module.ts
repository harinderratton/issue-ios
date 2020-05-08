import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PalabrasPage } from './palabras.page';

const routes: Routes = [
  {
    path: '',
    component: PalabrasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PalabrasPageRoutingModule {}
