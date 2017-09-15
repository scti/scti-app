import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LecturesPage } from './lectures';

@NgModule({
  declarations: [
    LecturesPage,
  ],
  imports: [
    IonicPageModule.forChild(LecturesPage),
  ],
})
export class LecturesPageModule {}
