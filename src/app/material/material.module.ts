import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module';
import { MaterialComponent } from './material.component';
import { MatTableModule } from '@angular/material/table';
import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SwiperModule } from 'swiper/angular'
import { CustomDatePipe } from './custom.datepipe';
import { PipePipe } from './pipe.pipe';



// https://www.tutorialesprogramacionya.com/angularya/detalleconcepto.php?punto=45&codigo=45&inicio=40
@NgModule({
  declarations: [
    MaterialComponent,
   CustomDatePipe,
   PipePipe
  ],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    SwiperModule,

    FormsModule
  ],
  providers: [
    DatePipe,

  ],
})
export class MaterialModule { }
// https://blog-angular--university-io.translate.goog/angular-material-data-table/?_x_tr_sl=auto&_x_tr_tl=es&_x_tr_hl=es
