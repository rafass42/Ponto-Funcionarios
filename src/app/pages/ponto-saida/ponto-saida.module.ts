import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PontoSaidaPageRoutingModule } from './ponto-saida-routing.module';

import { PontoSaidaPage } from './ponto-saida.page';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PontoSaidaPageRoutingModule,
    BrMaskerModule
  ],
  declarations: [PontoSaidaPage]
})
export class PontoSaidaPageModule {}
