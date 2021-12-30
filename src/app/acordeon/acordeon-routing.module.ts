import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcordeonComponent } from './acordeon.component';

const routes: Routes = [{ path: '', component: AcordeonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcordeonRoutingModule { }
