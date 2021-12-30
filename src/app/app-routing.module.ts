import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },

  { path: 'merge',
   loadChildren: () => import('./merge/merge.module').then(m => m.MergeModule)
   },
  { path: 'rxjs', loadChildren: () => import('./rxjs/rxjs.module').then(m => m.RxjsModule) },
  { path: 'acordeon', loadChildren: () => import('./acordeon/acordeon.module').then(m => m.AcordeonModule) },
  { path: 'chat', loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule) },
  { path: 'patch', loadChildren: () => import('./patch/patch.module').then(m => m.PatchModule) },
  { path: 'material', loadChildren: () => import('./material/material.module').then(m => m.MaterialModule) },


  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
/*
<table mat-table [dataSource]="data" matSort class="tabla tablaResumen" matTableExporter #exporter="matTableExporter" id="tablaDescargaPdf">

    <!-- descarga fichero -->
    <ng-container matColumnDef="descargaPdfDoc">
      <th mat-header-cell *matHeaderCellDef mat-sort-header>Descarga</th>
      <td mat-cell *matCellDef="let row" class="u-text-align-center">
        <div class="row">
          <div class="col-6">
            <button class="noButton" (click)="descargarPDF(row)"><i class="fas fa-file-pdf"></i></button>
          </div>
          <div class="col-6">
            <button class="noButton" (click)="descargarDocx(row)"><i class="far fa-file-word"></i></button>
          </div>
        </div>
      </td>
    </ng-container>

    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;" (click)="mostrarExpediente(row)"
      class="u-cursor"></tr>
</table>
mostrarExpediente(elemento) {

    sessionStorage.setItem('idExp', JSON.stringify(elemento.idElemento));

    sessionStorage.setItem('elementoStatus', JSON.stringify({'codigo': elemento.codigoEstadoElemento, 'descripcion': elemento.estadoElementoCorto}));


    sessionStorage.setItem('elementoStatus', JSON.stringify(elemento.estadoInforme));
    this.router.navigate(['/' + this.lang + '/backoffice/elemento']);
  }






*/
