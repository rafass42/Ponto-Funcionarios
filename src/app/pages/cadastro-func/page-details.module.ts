import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageDetailsPageRoutingModule } from './page-details-routing.module';

import { PageDetailsPage } from './page-details.page';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageDetailsPageRoutingModule,
    BrMaskerModule,
    ReactiveFormsModule
  ],
  declarations: [PageDetailsPage]
})
export class PageDetailsPageModule {}
