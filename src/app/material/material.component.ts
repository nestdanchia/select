import { CustomDatePipe } from './custom.datepipe';
import { DatePipe } from '@angular/common';
import { Renderer2,AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import * as moment from 'moment';
import { defer, fromEvent, merge, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';


// https://ultimatecourses.com/blog/difference-change-ngmodelchange-angular
// modal de una tabla
//https://angular.io/guide/practical-observable-usage
export interface PeriodicElement {

  name: string;
  position: number;
  weight: number;
  symbol: string;
}
// https://stackoverflow.com/questions/41653180/how-to-get-the-active-tab-in-angular-material2
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements AfterViewInit , OnInit, OnDestroy{
  public filterDateFrom!: Date;


  StackMoment!:string
  stacktConvert!:string;
  stack!:string;
  stackDateString!:string;
  stackDate!:Date;
  date!:Date;
  dateServer!: string;
  buttonsClik!:() => void;
  documentClick!: () => void;
  clickedRows = new Set<PeriodicElement>();

  @ViewChildren('clik',{ emitDistinctChangesOnly:true }) clik!: QueryList<any> ;
  // funciona con un boton comun se usa { static: true }
 @ViewChild('testBtn', { static: true }) testBtn!: ElementRef<HTMLButtonElement>;
 //@ViewChildren('pdf') bts!:QueryList<ElementRef>;

 event$ = defer(() => fromEvent(this.testBtn.nativeElement, 'click')).pipe(
   map(() => new Date().toString()),
   tap(console.log)
 )
 //funciona para un button externo de Angular Material #pdfExterno a la tabla se usa { read: ElementRef }
 @ViewChild('pdfExterno',{ read: ElementRef }) pdfExterno!: ElementRef<HTMLButtonElement>;
// logro capturar solo los eventos paar la primer fila de la tabla usando distintas estrategias
 @ViewChild('docx',{ read: ElementRef }) docx!: ElementRef<HTMLButtonElement>;

 pdfExterno$=defer(() => fromEvent(this.pdfExterno.nativeElement, 'click')).pipe(
   map(() => new Date().toString()),
   tap(console.log)
  )
  @ViewChild('pdf',{ read: ElementRef }) pdf!: ElementRef<HTMLButtonElement>;
 @ViewChild('mostrar',{ read: ElementRef }) mostrar!: ElementRef<HTMLButtonElement>;

 displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','descargaPdfDoc'];
 dataSource = ELEMENT_DATA;

// otra forma intento con Renderer2 capturar no solo a los eventos click() de la primer fila
 constructor(private renderer: Renderer2,private datePipe: DatePipe ,)

  {   this.date=new Date();}
 ngOnDestroy(): void {

 this.buttonsClik();
 this.documentClick();
 }
 // https://stackoverflow.com/questions/51105974/change-or-click-event-of-mat-button-toggle
 onValChange(value: any){
  console.log('onValChange',value)
}

 ngOnInit(): void {
   this.event$.subscribe();
   this.getTime();
 }

 ngAfterViewInit() {
   this.pdfExterno$.subscribe()
   this.render();
   console.log(this.pdf);
   console.log(this.docx);
   console.log(this.mostrar);


   console.log(this.clik.forEach(hello => console.log('clik',hello)));
   /* tampoco resulto solo 1 fila
   docx$!: Observable<any>;
   this.docx$=fromEvent(this.docx.nativeElement, 'click')
    .pipe(

      map(()=>new Date().toString()),
      tap(console.log)
      )
      this.docx$.subscribe(e=>console.log('docx',e))
      */
   /* Modicficando el codigo intente usar merge solo toma 1 fila
   y al primer button de l segunda fila
   <div>
            <button  id="pdf"   #pdf (click)="(pdf.id) ;descargarPDF(row)" >PDF</button>
          </div>
          <div>
            <button   id="docx" #docx (click)="(docx.id);descargarDocx(row)" >DOCX </button>
          </div>
        </div>
    */
   merge(
    fromEvent(this.pdf.nativeElement, 'click'),
    fromEvent(this.docx.nativeElement, 'click'),

).subscribe((event: Event | null)=> {
  console.log('desde Merge',event?.target);
});
  // let elem=this.renderer.selectRootElement('this.pdf');error
  // this.renderer.listen(elem, "clik", () => { console.log('clikkkkkkclikkkk') });
 }
 render(){
   setTimeout(()=>{
  this.clik.forEach(x=>{
    fromEvent(x.nativeElement,'click').subscribe(res=>{
      console.log('respuesta viewChildrem',res)
    })
  })
})
   // al hacer clik en cualquier lugar de la pagina responde
  this.documentClick = this.renderer.
  listen('document', 'click', (event:MouseEvent) =>{

    console.log('Desde render docx',event)
   } )

 this.buttonsClik= this.renderer.
  listen(this.docx.nativeElement, 'click', (event:MouseEvent) =>{

    console.log('Desde render docx',event)
   } )


  this.renderer.listen(this.pdf.nativeElement, 'click', (event) => {
    console.log('Desde render pdf',event)
  })
  this.renderer.listen(this.mostrar.nativeElement, 'click', (event) => {
    console.log('Desde Render mostrar',event)
  })
}
  onDocumentClick(e: any): boolean | void {
    throw new Error('Method not implemented.');
  }
descargarPDF(row:any){
  console.log('pdf',row);

// https://binary-coffee.dev/post/swiper-la-mejor-libreria-para-crear-un-carousel-con-angularxusqz
}
// https://swiperjs.com/angular
getTime(){
  // //import * as moment from 'moment';
  // para convertir usar moment permite pipe en el templete sin error de los datos requeridos
  // stacktConvert:{{stacktConvert |date:'shortTime'}}muestra stacktConvert:5:30 PM
  this.stack=' Thu Jul 26 2018 15:30:00 GMT-0500 ';
  this.StackMoment=new Date(this.stack).toISOString();
  console.log('StackMoment',this.StackMoment)
  this.stacktConvert=moment( this.StackMoment).format("YYYY-MM-DDTHH:mm")
console.log('stacktConvert',this.stacktConvert)

  let  locale = 'en-US';
  // con metodo transform error en pipe
// {{ stackDateString|date:'shortTime'}} Unable to convert into a date con stack
// toampoco posible con this.StackMoment
 this.stackDateString=this.datePipe.transform(this.StackMoment,'YYYY-MM-DDTHH:mm:ss')as string;

 console.log('Thu Jul 26 2018 15:30:00 GMT-0500-->YYYY-MM-DDTHH:mm',this.stackDateString);
 //2018-07-DDT17:30
this.stackDate=new Date(this.stackDateString)
  const startDate  = new Date('2017-12-14T16:34:10');
  console.log('stackDate',this.stackDate)


  let st='h:mm a'
  let shorTime='Dec 15, 2017, 12:00:00 PM'
let date=new Date()
   let dateU  = date.toLocaleTimeString('en-US')
 let u=  date.toLocaleDateString("en-US");
 console.log('date.toLocaleDateString("en-US")',u)
 console.log('date.toLocaleTimeString(en-US)',dateU)

//let localePipe=new DatePipe(locale)
 const t= this.datePipe.transform(shorTime,'short',locale) as string
// 2017-12-14T16:34:10
 console.log('Time Server',t)
 ////Time Server June 15, 2019 at 12:00:00 PM GMT-3
 let y =this.datePipe.transform(shorTime,'YYYY-MM-DDTHH:mm',locale)as string;
			console.log('Time Server Formato pedido',y)
      //Time Server 12:00:00 PM GMT-03:00
let s =new Date(t).toISOString()
console.log('toISOString()',s)
// toISOString()toISOString() 2019-06-15T15:00:00.000Z
//2017-12-14T16:34:10
//2017-12-14T16:34

//import * as moment from 'moment';
// https://momentjs.com/docs/#/displaying/as-javascript-date/
//let ff=moment().format("YYYY-MM-DDTHH:mm");
//console.log('moment',ff)


}


descargarDocx(row:any){
  console.log('docx',row)

  }

  onRowClicked(row:any): void{
    console.log('mat-row',row)
  }

  descargarPDFFueraDeMatTable(){
    console.log('funciona')
  }

  onSwiper(swiper:any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}





























/*
https://indepth.dev/posts/1336/how-to-do-dom-manipulation-properly-in-angular
https://www.geeksforgeeks.org/how-to-detect-click-event-outside-angular-component/
https://medium.com/claritydesignsystem/four-ways-of-listening-to-dom-events-in-angular-part-3-renderer2-listen-14c6fe052b59
constructor(elementRef: ElementRef, renderer: Renderer) {

    // Listen to click events in the component
    renderer.listen(elementRef.nativeElement, 'click', (event) => {
      // Do something with 'event'
    })
);

renderer.listenGlobal('document', 'click', (event) => {
  // Do something with 'event'
})


*/
//TypeError: Invalid event target si trato de definir en este metodo
// para utilizar la referencia injectada via  @ViewChild se hace dentro deAfterViewInit
   //this.pdf$  =fromEvent<MouseEvent>(this.pdf.nativeElement, "click");

/*
    this.docx$=fromEvent(this.docx.nativeElement, 'click')
    .pipe(

      map(()=>new Date().toString()),
      tap(console.log)
      )
      this.docx$.subscribe(e=>console.log('docx',e))
      */

//  selectRootElement(selectorOrNode: string|any): any
//fromEvent( this.renderer.selectRootElement(this.docx.nativeElement).click())

//El problema es que no encuentro como acceder al evento click() dentro de
  // una tabla de Angular Material siguiendo la misma metodologia que con pdfExterno
  // da error ERROR TypeError: Invalid event target

// https://www.tektutorialshub.com/angular/renderer2-angular/
// https://medium.com/codingthesmartway-com-blog/angular-material-part-4-data-table-23874582f23a
/*
Error al tratar de acceder a Angular Material table iniciando desde
ngAfterViewInit error TypeError: Invalid event target
y probe tambien desde   ngOnInit() da tambien error
  @ViewChild('pdf',{ read: ElementRef }) pdf!: ElementRef<HTMLButtonElement>;
  @ViewChild('mostrar',{ read: ElementRef }) mostrar!: ElementRef<HTMLButtonElement>;
  pdf$:Observable <Event>=defer(() => fromEvent(this.pdf.nativeElement, 'click')).pipe(
    map(() => new Date().toString()),
    tap(console.log)
   )


   docx$:Observable<Event>=defer(() => fromEvent(this.docx.nativeElement, 'click')).pipe(
    map(() => new Date().toString()),
    tap(console.log)
   )

   mostrar$:Observable<Event>=defer(() => fromEvent(this.mostrar.nativeElement, 'click')).pipe(
    map(() => new Date().toString()),
    tap(console.log)
   )
*/
// https://stackoverflow.com/questions/59645328/invalid-event-target-when-using-fromevent-with-angular-material-button
  //to inject a reference to a DOM element
  // https://github.com/angular-university/angular-viewchild-examples/tree/master/src/app

 // docx$!:Observable<Event>
/*

import { Pipe, PipeTransform } from '@angular/core'
import * as moment from 'moment'

@Pipe({
   name: 'formatDate'
})
export class DatePipe implements PipeTransform {
   transform(date: any, args?: any): any {
     let d = new Date(date)
     return moment(d).format('DD/MM/YYYY')

   }
}

*/
