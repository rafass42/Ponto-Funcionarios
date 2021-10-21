import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PontoEntradaPageRoutingModule } from './ponto-entrada-routing.module';
import { BrMaskerModule } from 'br-mask';
import { PontoEntradaPage } from './ponto-entrada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PontoEntradaPageRoutingModule,
    BrMaskerModule
  ],
  declarations: [PontoEntradaPage]
})
export class PontoEntradaPageModule {}
