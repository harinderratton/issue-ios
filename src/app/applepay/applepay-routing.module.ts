import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplepayPage } from './applepay.page';

const routes: Routes = [
  {
    path: '',
    component: ApplepayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplepayPageRoutingModule {}
