import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    BrMaskerModule,
    ReactiveFormsModule
    
  ],
  declarations: [PontoSaidaPage]
})
export class PontoSaidaPageModule {}
