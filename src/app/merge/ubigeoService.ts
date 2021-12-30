import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Ubigeo } from './model';
@Injectable({
  providedIn: 'root'
})
export class UbigeoService {
ubiIni!:Ubigeo
  constructor() {
    this.ubiIni={


        idUbigeo:1,
        departamento:'calafate',
        provincia:'Mendoza',
        distrito:'centro'


    }
   }


  listarDepartamento(): Observable<string[]>{
    return of ([this.ubiIni.departamento])
  }

  listaProvincias(paramDep:any): Observable<string[]>{
    return of ([this.ubiIni.provincia])
  }

  listaDistritos(paramDep:any,paramProv:any): Observable<Ubigeo[]>{
    return of ([this.ubiIni])
  }


}
