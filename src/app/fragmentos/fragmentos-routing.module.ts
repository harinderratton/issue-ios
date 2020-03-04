import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FragmentosPage } from './fragmentos.page';

const routes: Routes = [
  {
    path: '',
    component: FragmentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FragmentosPageRoutingModule {}
