import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YearsPage } from './years';

@NgModule({
  declarations: [
    YearsPage,
  ],
  imports: [
    IonicPageModule.forChild(YearsPage),
  ],
})
export class YearsPageModule {}
