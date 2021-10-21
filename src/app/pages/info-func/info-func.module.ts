import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { InfoFuncPage } from './info-func.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrMaskerModule } from 'br-mask';
import { InfoFuncPageRoutingModule } from './info-func-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoFuncPageRoutingModule,
    Ng2SearchPipeModule,
    BrMaskerModule
  ],
  
  declarations: [InfoFuncPage]
})
export class InfoFuncPageModule {}
