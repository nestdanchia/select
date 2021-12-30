import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatchRoutingModule } from './patch-routing.module';
import { PatchComponent } from './patch.component';


@NgModule({
  declarations: [
    PatchComponent
  ],
  imports: [
    CommonModule,
    PatchRoutingModule
  ]
})
export class PatchModule { }
