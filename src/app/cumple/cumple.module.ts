import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CumplePageRoutingModule } from './cumple-routing.module';

import { CumplePage } from './cumple.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CumplePageRoutingModule
  ],
  declarations: [CumplePage]
})
export class CumplePageModule {}
