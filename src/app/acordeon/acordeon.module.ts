import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcordeonRoutingModule } from './acordeon-routing.module';
import { AcordeonComponent } from './acordeon.component';


@NgModule({
  declarations: [
    AcordeonComponent
  ],
  imports: [
    CommonModule,
    AcordeonRoutingModule
  ]
})
export class AcordeonModule { }
