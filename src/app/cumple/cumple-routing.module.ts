import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CumplePage } from './cumple.page';

const routes: Routes = [
  {
    path: '',
    component: CumplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CumplePageRoutingModule {}
