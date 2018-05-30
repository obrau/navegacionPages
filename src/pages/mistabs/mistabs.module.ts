import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MistabsPage } from './mistabs';

@NgModule({
  declarations: [
    MistabsPage,
  ],
  imports: [
    IonicPageModule.forChild(MistabsPage),
  ],
  exports: [
    MistabsPage
  ]
})
export class MistabsPageModule {}
