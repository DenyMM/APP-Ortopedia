import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsejoPage } from './consejo.page';

const routes: Routes = [
  {
    path: '',
    component: ConsejoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsejoPageRoutingModule {}
